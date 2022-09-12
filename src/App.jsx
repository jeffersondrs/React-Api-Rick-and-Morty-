import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [rickAndMortyName, setRickAndMortyName] = useState([]);
  const [rickAndMortyChosen, setRickAndMortyChosen] = useState(false);
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    imagem: "",
    gender: "",
    species: "",
    origin: "",
  });
  const searchCharacter = () => {
    axios.get(
      `https://rickandmortyapi.com/api/character/?name=${rickAndMortyName}`
    )
      .then((response) => {
        const data = response.data.results;
        console.log(data);
        setCharacter({
          name: data.name,
          status: data.status,
          imagem: data.image,
          gender: data.gender,
          species: data.species,
          origin: data.origin.name,
        });
      })
      .catch((err) => {
         console.log(err.message);
      });
      setRickAndMortyChosen(true);
  };

  return (
    <div className="App flex flex-col items-center justify-center bg-indigo-500 w-screen h-screen">
      <h1 className="text-white font-bold m-5 bg-blue-800 w-80 h-12 p-3 text-center">
        Rick and Morty Api Restfull React
      </h1>
      <input
        className="text-black rounded-r-md h-8 w-80 text-center border-none sm:rounded-none"
        type="text"
        placeholder="Search Character"
        onChange={(event) => {
          setRickAndMortyName(event.target.value);
        }}
      />
      <button
        className="text-white font-semibold w-52 bg-gray-800 rounded-full h-12 m-3 hover:bg-gray-700"
        onClick={searchCharacter}
      >
        Search Character.
      </button>
      <div>
        {!rickAndMortyChosen ? (
          <h1 className="text-white font-bold"> Please, chose a character</h1>
        ) : (
          <div className="bg-white w-80 h-full flex flex-col items-center justify-center rounded-xl p-2">
            <img
              className="w-48 h-48 bg-slate-900 rounded-lg m-1"
              src={character.imagem}
            />
            <h1 className="text-base uppercase font-bold bg-slate-200 w-full text-black m-2 p-2 rounded-lg ">
              {character.name}
            </h1>
            <div className="flex flex-col items-start text-white justify-between bg-slate-700 rounded-md w-full p-2 h-36 text-base">
              <h3>
                <strong>Status:</strong> {character.status}
              </h3>
              <h3>
                <strong>Gender:</strong> {character.gender}
              </h3>
              <h3>
                <strong>Origin:</strong> {character.origin}
              </h3>
              <h3>
                <strong>Species:</strong> {character.species}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

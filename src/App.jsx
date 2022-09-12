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
    location: "",
  });
  const searchCharacter = () => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${rickAndMortyName}`
      )
      .then((response) => {
        const data = response.data.results[0];
        setCharacter({
          name: data.name,
          status: data.status,
          imagem: data.image,
          gender: data.gender,
          species: data.species,
          origin: data.origin.name,
          location: data.location.name,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    setRickAndMortyChosen(true);
  };

  return (
    <div className="App flex flex-col items-center justify-center bg-rmgreen-light w-screen h-screen">
      <h1 className="text-white sm:h-16 xl:h-8 2xl:h-8 font-bold m-2 bg-rmearth h-18 w-52 2xl:w-96 xl:w-80 p-1 text-center">
        Rick and Morty Api Restfull React
      </h1>
      <input
        className="text-black rounded-sm h-10 w-52 2xl:w-96 xl:w-80 text-center border-none sm:rounded-none"
        type="text"
        placeholder="Search Character"
        onChange={(event) => {
          setRickAndMortyName(event.target.value);
        }}
      />
      <button
        className="text-white font-semibold text-lg w-52 h-12 md:w-52 md:h-18 md:text-xl xl:w-80 xl:text-2xl 2xl:w-96 bg-teal-700 rounded-full  m-1 hover:bg-gray-700"
        onClick={searchCharacter}
      >
        Search Character.
      </button>
      <div>
        {!rickAndMortyChosen ? (
          <h1 className="text-white font-bold underline"> Please, chose a character</h1>
        ) : (
          <div className="bg-rmmarfin w-56 h-full xl:w-80 sm:w-64 sm:h-full md:h-full md:w-80 xl:h-full 2xl:h-full 2xl:w-96 flex flex-col items-center justify-center rounded-xl p-2">
            <img
              className="md:w-80 md:h-80 2xl:w-96 2xl:h-96 xl:w-80 xl:h-80 sm:w-60 sm:h-60 rounded-sm"
              src={character.imagem}
            />
            <h1 className="text-base uppercase font-bold bg-teal-900 w-full text-rmmarfin m-1 p-2 rounded-lg ">
              {character.name}
            </h1>
            <div className="flex flex-col items-start text-white justify-between  rounded-md w-full p-1 h-36 text-base flex-nowrap bg-rmgreen">
              <div className="grid grid-cols-2 h-full w-full justify-between items-center p-1">
                <h3>
                  <strong className="hover:underline">Status:</strong>{" "}
                  {character.status}
                </h3>
                <h3>
                  <strong className="hover:underline">Gender:</strong>{" "}
                  {character.gender}
                </h3>

                <h3>
                  <strong className="hover:underline">Origin:</strong>{" "}
                  {character.origin}
                </h3>
                <h3>
                  <strong className="hover:underline">Species:</strong>{" "}
                  {character.species}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React from "react";

class RandomCharacter extends React.Component {
  state = {
    character: {}
  };

  componentDidMount() {
    this.fetchRandomCharacter();
  }

  requestCharacterById = async (id = 1) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const json = await response.json();
    this.setState({ character: json });
    console.log(json);
  };

  fetchRandomCharacter = () => {
    const numberOfCharacters = 493;
    const randomNumber = Math.floor(Math.random() * numberOfCharacters);
    this.requestCharacterById(randomNumber);
  };

  render() {
    const { name, image } = this.state.character;
    return (
      <div>
        <img src={image} />
        <h3>{name}</h3>
        <button onClick={this.fetchRandomCharacter}>
          Generate Random Character
        </button>
      </div>
    );
  }
}

export default RandomCharacter;

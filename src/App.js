import React from 'react';
import './App.css';
import Title from './components/Title'
import Pokemon from './components/Pokemon/Pokemon'
import LikeCounter from './components/LikeCounter';
import AwesomeAnimals from './components/AwesomeAnimals';
import ArticleList from './components/ArticleList';

function App() {
  const allPokies = [{name: "Charizard", weight: 90, awesome: true, terrifying: false, abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]}, 
    {name: "Bulbasaur", weight: 6.9, awesome: true, terrifying: false, abilities: ["Overgrow", "Chlorophyll"]}]

  return (
    <div className="App">
      <main className="container my-5">
        <Title message="Some Simple Title" className="mb-4" />
        <LikeCounter />
        <AwesomeAnimals />
        <ArticleList />
        <div className="row">
          {allPokies.map(pokemon => (
            <div className="col-md-6 col-lg-4">
              <Pokemon
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

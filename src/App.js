import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Character from './components/character'

function App() {

  const [dataCharacter, setdataCharacter] = useState({
    quote: "Eat my shorts",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  })

  function requestAPI() {
    setdataCharacter({
      quote: "Loading ...",
      image: "./loading.svg",
      character: "Loading ..."
    });
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log("llego")
      return(
        setdataCharacter({
          quote: data[0].quote,
          image: data[0].image,
          character: data[0].character
        })
      )
    })
    .catch(error => alert("Al parecer hay un error, es posible que no tenga internet"))
  }

  return (
    <div className="App">
      <section className='title-page'>
        <h1>Peronajes de los simpson</h1>
      </section>
      <section className='character'>
        <Character key={dataCharacter.character} quote={dataCharacter.quote} image={dataCharacter.image} character={dataCharacter.character} />
        <button className='success' onClick={requestAPI}>Siguiente</button>
      </section>
    </div>
  );
}

export default App;

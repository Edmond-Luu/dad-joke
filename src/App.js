import React from "react";

function App() {

  const [joke, setJoke] = React.useState([localStorage.getItem("joke"), undefined] || []);


  function jokeSetter(theJoke) {
    setJoke(oldJokes => [theJoke, oldJokes[0]])
  }

  React.useEffect(() => {
    localStorage.setItem("joke", joke[0])
    console.log(joke)
  }, [joke])

  function handleClick() {
    fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => jokeSetter(data.joke))
  }

  function handlePrevious() {
    if (!joke.includes(undefined)) {
      setJoke(oldJoke => [oldJoke[1], oldJoke[0]])
    }
  }

  function handleReset() {
    setJoke([]);
  }

  function handleCopy() {
    navigator.clipboard.writeText(joke)
  }

  return (
    <div className="container">
      <h1 className="title">Dad Joke Generator</h1>
      <div className="jokeField">
        <p className="jokeText" onClick={handleCopy}>{joke[0]}</p>
      </div>
      <p className="caption">Click on the joke to copy it to your clipboard</p>
      <div className="button generateButton" onClick={handleClick}>Generate Joke</div>
      <div className="button previousButton" onClick={handlePrevious}>Previous Joke</div>
      <div className="button resetButton" onClick={handleReset}>Reset</div>
      <div className="footer">
        <p>Made completely from scratch with ❤️ by <a href="https://edmond-luu.github.io" target="_blank" rel="noreferrer">Edmond Luu</a></p>
      </div>
    </div>
  );
}

export default App;

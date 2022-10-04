import React from "react";

function App() {

  const [joke, setJoke] = React.useState([localStorage.getItem("joke0"), localStorage.getItem("joke1")] || []);


  function jokeSetter(theJoke) {
    setJoke(oldJokes => [theJoke, oldJokes[0]])
  }

  React.useEffect(() => {
    if (joke.length > 0) {
      localStorage.setItem("joke0", joke[0])
      if (joke.length === 2) {
        localStorage.setItem("joke1", joke[1])
      }
    }
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
    if (!joke.includes(undefined) && !joke.includes("")) {
      setJoke(oldJoke => [oldJoke[1], oldJoke[0]])
    }
  }

  function handleReset() {
    setJoke([]);
    if (joke.length > 0) {
      localStorage.setItem("joke0", "")
      if (joke.length === 2) {
        localStorage.setItem("joke1", "")
      }
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(joke)
  }

  return (
    <div className="container">
      <h1 className="title">Dad Joke Generator</h1>
      <div className="jokeField">
        {!joke.includes(undefined) && !joke.includes(null) && <p className="jokeText" onClick={handleCopy}>{joke[0]}</p>}
      </div>
      <p className="caption">Click on the joke to copy it to your clipboard</p>
      <div className="button generateButton" onClick={handleClick}>Generate Joke</div>
      <div className="bottomButtons">
        <div className="button previousButton" onClick={handlePrevious}>Previous Joke</div>
        <div className="button resetButton" onClick={handleReset}>Reset</div>
      </div>
      <div className="footer">
        <p>Made completely from scratch with ❤️ by <a href="https://edmond-luu.github.io" target="_blank" rel="noreferrer">Edmond Luu</a></p>
      </div>
    </div>
  );
}

export default App;

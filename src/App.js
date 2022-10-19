import React from "react";

function App() {

  const [joke, setJoke] = React.useState(localStorage.getItem("joke0") || "");
  const [prevJoke, setPrevJoke] = React.useState(localStorage.getItem("joke1") || "")


  function jokeSetter(theJoke) {
    if (joke !== "" || joke !== undefined){
      setPrevJoke(joke);
    }
    setJoke(theJoke);
  }

  React.useEffect(() => {
    if (!joke !== undefined && joke !== "") {
      localStorage.setItem("joke0", prevJoke);
      if (!prevJoke !== undefined && prevJoke !== "") {
        localStorage.setItem("joke1", prevJoke);
      }
    }
  }, [joke, prevJoke])

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
    if (!joke !== undefined && joke !== "" && !prevJoke !== undefined && prevJoke !== "") {
      const jokeHolder = joke;
      setJoke(prevJoke);
      setPrevJoke(jokeHolder);
    }
  }

  function handleReset() {
    setJoke("");
    setPrevJoke("");
    if (!joke !== undefined && joke !== "") {
      localStorage.setItem("joke0", "")
      if (!prevJoke !== undefined && prevJoke !== "") {
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
        {!joke !== undefined && joke !== "" && <p className="jokeText" onClick={handleCopy}>{joke}</p>}
      </div>
      <p className="caption">Click/tap on the joke to copy it to your clipboard</p>
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

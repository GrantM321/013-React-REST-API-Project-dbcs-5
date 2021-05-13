import React, {useState, useEffect, useRef} from 'react';
import countries from './countries';
import './Quiz.css';


function Quiz({score, handleUpdateScore}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState("");
  const [country, setCountry] = useState({});
  const answer = useRef(null);
  
  useEffect(() => {
    setCountry(countries[Math.floor(Math.random() * 196)])
    setIsLoaded(true)
  }, [])

  const handleCheckAnswer = () => {
    console.log(answer.current);
    const correctAnswer = country.name.toLowerCase();
    const userAnswer = answer.current.value.toLowerCase()
    .trim();
    answer.current.value = ""
    if (correctAnswer == userAnswer) {
      console.log("Correct!")
      setResults("Correct!")
      handleUpdateScore()
    } else {
      console.log("Incorrect!")
      setResults(correctAnswer)
    }
  }

  const handleNext = () => {
    setCountry(countries[Math.floor(Math.random() * 196)])
    setIsLoaded(true)
    setResults("")
  }


  return (
    <main>
      <div class="header">
        <h1>Capitol Quiz</h1>
        <p class="score">Score: {score}</p>
      </div>
      <div class="question">
        {isLoaded ? (
        <>
            <h2>{country.capital}</h2>
            <h3>Hint: {country.region}</h3>
            <img src={country.flag} alt="flag" width="200" />
        </>
        ) : (<h2>Loading...</h2>)}
      </div>
      <div class="answer-box">
        <label for="Country">Country: </label>
        <input ref={answer} type="text" id="Country" name="Country" disabled={!isLoaded} />
      </div>
      <div class="hint-and-check">
        <button class=" btn check" type="button" onClick={handleCheckAnswer}>Check</button>
      </div>
      <div class="correct-incorrect">
        <p>{results}</p>
      </div>
      <div class="stats-next">
        <button class="btn stats" type="button">Stats</button>
        <button class="btn next" type="button" onClick={handleNext}>Next</button>
      </div>



    </main>

  );
}

export default Quiz;
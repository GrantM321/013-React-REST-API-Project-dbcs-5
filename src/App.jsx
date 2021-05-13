import React, {useState} from 'react'
import Quiz from './Quiz'
import Stats from './Stats'

function App() {
  const [score, setScore] = useState(0)

  const handleUpdateScore = () => {
    setScore(score => score + 1);
  }

  return <Quiz score={score} handleUpdateScore={handleUpdateScore} />
}

export default App;
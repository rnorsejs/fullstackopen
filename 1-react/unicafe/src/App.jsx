import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good * 1 + (bad * -1)) / total
  const positive = good/total * 100

  if (total > 0) {
    return (
      <>
        <h2>Stats</h2>
        <table>
          <thead>
            <StatLine text="good" value={good} />
            <StatLine text="neutral" value={neutral} />
            <StatLine text="bad" value={bad} />
            <StatLine text="total" value={total} />
            <StatLine text="average" value={average} />
            <StatLine text="positive" value={positive} />
          </thead>
        </table>
      </>
    )
  } else {
    return <p>No feedback given!</p>
  }

  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={addGood} text="Good" />
      <Button handleClick={addNeutral} text="Neutral" />
      <Button handleClick={addBad} text="Bad" />

      <Stats good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App
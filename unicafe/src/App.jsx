import { useState } from 'react'

const Button = ({label, value, handleClick}) => {
  return (
    <>
      <button value={value} onClick={handleClick}>{label}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
	return (
		<tr>
			<td>{text}</td> 
			<td>{value}</td>
		</tr>

	)
}

const Statistics = ({good, neutral, bad}) => {
	if(good + neutral + bad > 0 ) {
		return (
			<>
				<h2>Statistics</h2>
				<table>
					<tbody>
						<StatisticLine text={"Good"} value={good} />
						<StatisticLine text={"Neutral"} value={neutral} />
						<StatisticLine text={"Bad"} value={bad} />
						<StatisticLine text={"All"} value={good + neutral + bad} />
						<StatisticLine text={"Average"} value={(good + neutral + bad) / 3} />
						<StatisticLine text={"Positive"} value={(good / (good + neutral + bad))*100 + "%"} />
					</tbody>
				</table>
			</>
		)
	}
	return (
		<>
			<p>No feedback given</p>
		</>
	)
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback application</h1>
      <Button label={"Good"} value={good} handleClick={() => setGood(good + 1)} />
      <Button label={"Neutral"} value={neutral} handleClick={() => setNeutral(neutral + 1)} />
      <Button label={"Bad"} value={bad} handleClick={() => setBad(bad + 1)} />
	  <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
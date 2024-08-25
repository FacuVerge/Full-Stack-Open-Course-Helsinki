import { useEffect, useState } from 'react'
import './App.css'
import countriesService from './countriesService'
import Countries from './Countries'

function App() {
	
	const [search, setSearch] = useState('')
	const [countries, setCountries] = useState([])
	
	useEffect(() => {
		countriesService.getAll().then((countries) => {
			setCountries(countries.filter(countrie => countrie.name.common.toLowerCase().includes(search.toLowerCase()) || search === ''))
		})
	}, [search])

	const handleSearchChange = (event) => {
		setSearch(event.target.value)
	}

	return (
		<>
			<p>Find countries <input onChange={handleSearchChange} value={search}></input></p>
			<Countries 
				countries={countries} 
				search={search} 
				setSearch={setSearch}
			/>
		</>
	)
}

export default App

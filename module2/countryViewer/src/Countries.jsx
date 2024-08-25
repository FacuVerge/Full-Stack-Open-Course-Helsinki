import Countrie from './Countrie'

const Countries = ({countries, search, setSearch}) => {

	const handleClick = (name) => {
		setSearch(name)
	}

	if(countries.length > 10) {
		return(
			<p>Use the filter to find countries!</p>
		)
	} else if (countries.length === 1 && countries[0].name.common.toLowerCase() === search.toLowerCase()) {
		return (
			<Countrie countrie={countries[0].name.common} />
		)
	} else {
		return(
			countries.map(countrie => 
				<p key={countrie.name.common}>{countrie.name.common}<button onClick={() => handleClick(countrie.name.common)}>Show</button></p>
			)
		)
	}
}

export default Countries
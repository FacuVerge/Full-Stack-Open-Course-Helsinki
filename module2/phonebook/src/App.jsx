import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personsService from './services/persons';
import Notification from './Notification';
import './App.css'

const App = () => {
	
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newPhone, setNewPhone] = useState('')
	const [filter, setFilter] = useState('')
	const [message, setMessage] = useState(null)
	const [isSucceed, setIsSucceed] = useState(false)

	useEffect(() => {
		personsService.getAll()
			.then(initialPersons => {               
				setPersons(initialPersons)      
			}) 
	}, [])

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handlePhoneChange = (event) => {
		setNewPhone(event.target.value)
	}

	const handleFilterChange = (event) => {
		setFilter(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		
		if(persons.map(person => person.name).includes(newName)) {
			const person = persons.find(n => n.name === newName)
			if(!(person.name === newName && person.phone === newPhone)) {
				if (window.confirm(`${person.name} is already in database. Do you want to change its phone?`)) {
					const changedPerson = { ...person, phone: newPhone }
					personsService.put(changedPerson)
						.then(personChanged => {
							setPersons(persons.map(person => person.id !== changedPerson.id ? person : personChanged))
						})
				}
			}
		}else{
			const newPerson = {
				name: newName,
				phone: newPhone
			}
			personsService.create(newPerson)
				.then(personCreated => {
					setPersons(persons.concat(personCreated));
				}).catch(error => {
					console.log(error.response.data.error)
					setIsSucceed(false)   
					setMessage(`Could not create ${newPerson.name}`)        
					setTimeout(() => {          
						setMessage(null)        
					}, 5000)
				})
		}
		setNewName('');
		setNewPhone('');
		setIsSucceed(true)
		setMessage(`Action completed successfully`)        
		setTimeout(() => {          
			setMessage(null)        
		}, 5000)
	}

	const personsShowed = filter.length > 0 ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons;

	const handleDelete = (personToDelete) => {
		if (window.confirm(`Do you really want to delete ${personToDelete.name}?`)) {
			personsService.delete(personToDelete.id)
			.catch(error => {   
				setIsSucceed(false)   
				setMessage(`Could not delete ${personToDelete.name} beacuse it was not found on database`)        
				setTimeout(() => {          
					setMessage(null)        
				}, 5000)})
			.then(() => {
				setPersons(persons.filter(person => person.id !== personToDelete.id))
			})
			
		}
	}
 
	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={message} isSucceed={isSucceed} />
			<Filter filter={filter} handleFilterChange={handleFilterChange} />
			<h2>Add a new Person to PhoneBook!</h2>
			<PersonForm
				handleSubmit={handleSubmit}
				newName={newName}
				handleNameChange={handleNameChange}
				newPhone={newPhone}
				handlePhoneChange={handlePhoneChange}
			/>
			<h2>Phones</h2>
			<Persons persons={personsShowed} handleDelete={handleDelete}/>
		</div>
	)
}

export default App
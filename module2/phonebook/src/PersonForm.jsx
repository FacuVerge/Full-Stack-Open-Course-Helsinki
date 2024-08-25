const PersonForm = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
	return (
	  	<form onSubmit={handleSubmit}>
	  		<table>
				<tbody>
		  			<tr>
						<td>Name: </td>
						<td><input value={newName} onChange={handleNameChange}/></td>
		  			</tr>
		  			<tr>
						<td>Number: </td>
						<td><input value={newNumber} onChange={handleNumberChange}/></td>
		  			</tr>
		  		</tbody>
	  		</table>
			<div>
		  		<button type="submit">Add</button>
			</div>
	  	</form>
	)
}

export default PersonForm
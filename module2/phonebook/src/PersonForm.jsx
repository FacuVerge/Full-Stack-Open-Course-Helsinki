const PersonForm = ({handleSubmit, newName, handleNameChange, newPhone, handlePhoneChange}) => {
	return (
	  	<form onSubmit={handleSubmit}>
	  		<table>
				<tbody>
		  			<tr>
						<td>Name: </td>
						<td><input value={newName} onChange={handleNameChange}/></td>
		  			</tr>
		  			<tr>
						<td>Phone: </td>
						<td><input value={newPhone} onChange={handlePhoneChange}/></td>
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
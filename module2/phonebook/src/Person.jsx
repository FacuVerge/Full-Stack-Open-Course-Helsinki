const Person = ({person, handleDelete}) => {
    return (
        <tr>
            <td>{person.name} </td> 
            <td>{person.phone}</td> 
            <td><button onClick={() => handleDelete(person)}>Delete</button></td>
        </tr>
    )
} 

export default Person
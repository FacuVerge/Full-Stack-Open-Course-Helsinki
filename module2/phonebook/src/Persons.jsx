import Person from "./Person"

const Persons = ({persons, handleDelete}) => {
    return (
        <table>
            <tbody>
                {persons.map(person => 
                    <Person key={person.name} person={person} handleDelete={handleDelete} />
                )}
            </tbody>
        </table>
    )
}

export default Persons
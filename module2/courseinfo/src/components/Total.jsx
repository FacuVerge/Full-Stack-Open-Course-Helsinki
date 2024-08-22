const Total = ({ course }) => { 
    return(
        <>
            <p>{"Number of exercises " +
                course.parts.map(part => part.exercises)
                                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                }
            </p>
        </>
    )
}

export default Total
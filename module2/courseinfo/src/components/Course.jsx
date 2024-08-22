import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    return(
        <>
            <Header course={course}></Header>
            <Content parts={course.parts}></Content>
            <Total course={course}></Total>
        </>
    )
}

export default Course
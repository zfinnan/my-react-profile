import { Link } from 'react-router-dom'

function Skills(props) {
    const skillItems = props.skillsList.map((p) => {
        return <li><Link to={`/skills/${p.id}`}>{p.name}</Link></li>
    })

    return (
        <>
        <h1>Skills</h1>
        <ul>
            {skillItems}
        </ul>
        </>
    )
}

export default Skills
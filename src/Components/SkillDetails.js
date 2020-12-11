function SkillDetails(props) {
    return (
        <div>
            <h1>{props.skill.name}</h1>
            <p>{props.skill.description}</p>
        </div>
    )
}


export default SkillDetails
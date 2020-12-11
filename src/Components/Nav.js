import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/procedures">Skills</Link></li>
            <li><Link to="/weather">Weather</Link></li>
        </ul>
    )
}

export default Nav
import { Link } from "react-router-dom"


function Header() {
    return <nav className=" light-green accent-4">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Foodcort</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="https://github.com/HalynaPavliuk/Foodcort-react" target="_blank" rel="noreferrer">GitHub</Link></li>
                    </ul>
                </div>
        </nav>
}

export default Header
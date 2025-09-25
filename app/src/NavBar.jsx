import { Link } from "react-router-dom";
import './App.css'; 

function NavBar() {
    return (
        <nav className="navbar-custom">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/enemigo" className="nav-link">Enemigo</Link></li>
                <li className="nav-item"><Link to="/crear-enemigo" className="nav-link">crear enemigo</Link></li>
                <li className="nav-item"><Link to="/nivel" className="nav-link">mirar niveles</Link></li>
                <li className="nav-item"><Link to="/crear-nivel" className="nav-link">crear nivel</Link></li>
                <li className="nav-item"><Link to="/nivel-enemigo" className="nav-link">nivel enemigo</Link></li>
                <li className="nav-item"><Link to="/crear-nivel-enemigo" className="nav-link">crear nivel enemigo</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/enemigo">Enemigo</Link></li>
                <li><Link to="/crear-enemigo">crear enemigo</Link></li>
                <li><Link to="/nivel">mirar niveles</Link></li>
                <li><Link to="/crear-nivel">crear nivel</Link></li>
                <li><Link to="/nivel-enemigo">nivel enemigo</Link></li>
                <li><Link to="/crear-nivel-enemigo">crear nivel enemigo</Link></li>

            </ul>
        </nav>
    );
}

export default NavBar;
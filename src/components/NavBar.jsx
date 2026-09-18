import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="uk-navbar uk-navbar-container">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/admin">Admin Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    )
}
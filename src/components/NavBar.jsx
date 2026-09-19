import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="uk-navbar uk-navbar-container uk-padding uk-padding-remove-vertical">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/store">Store</NavLink></li>
                    <li><NavLink to="/admin">Admin Dashboard</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
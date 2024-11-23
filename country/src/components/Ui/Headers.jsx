import { NavLink } from "react-router-dom";

function Headers(){
    return(
<header>
    <div className="container">
        <div className="grid navbar-grid">
            <div className="Logo">
            <h1>WorldAtlas</h1>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/country">Country</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</header>
    )
}

export default Headers;
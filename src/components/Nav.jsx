import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
    const [open , setOpen] = useState(true);

    const handleLinkClick = () => {
        document.getElementById("close-button").click();
    };

    useEffect(() => {
        if (!open) {
          document.getElementById("close-button").click();
        }
    }, [open]);

    return (
        <nav className="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img width="200" src={logo} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" id="close-button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={handleLinkClick}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
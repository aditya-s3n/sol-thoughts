//react modules
import React from "react";

//render Header 
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                <a className="navbar-brand h5" href="/">Mind of the Sun</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link active h5" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item nav-shortcut">
                            <a className="nav-link active h5" aria-current="page" href="/threads">Threads</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

//export
export default Header;
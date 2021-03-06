//react modules
import React from "react";

//render Header 
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-masthead" id="navbar">

            <div className="container-fluid">

                <a className="navbar-brand" href="/"><img src="https://raw.githubusercontent.com/aditya-s3n/sun-thoughts-imgs/f8676648044b492235b8f364f782c688134e0f8f/logo.png?token=GHSAT0AAAAAABSOU5N6CKLKSDAOJYXN7N6OYUSSMRQ" alt="logo" width="45" height="45" className="mx-2" /> Sol Thoughts</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

    
                
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    {/* <span className="mx-auto">Hello</span> */}

                    <ul className="ms-0 navbar-nav ms-auto">
                    
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item nav-shortcut">
                            <a className="nav-link active" aria-current="page" href="/threads">Threads</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

//export
export default Header;
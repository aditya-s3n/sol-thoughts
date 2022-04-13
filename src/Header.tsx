//react modules
import React from "react";

//render Header 
function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">

                <a class="navbar-brand h5" href="/">Mind of the Sun</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item">
                            <a class="nav-link active h5" aria-current="page" href="/">Home</a>
                        </li>

                        <li class="nav-item nav-shortcut">
                            <a class="nav-link active h5" aria-current="page" href="/threads">Threads</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

//export
export default Header;
//react modules
import React from "react";

//render Footer function
function Footer() {
    return (
        <div className="container" id="Footer">
        
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">Aditya Sen :)</p>

                <a href="#navbar" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    Back to the Top
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="https://twitter.com/AdityaS3n" className="nav-link px-2 text-muted"><i class="bi bi-twitter fs-3"></i></a></li>
                    <li className="nav-item"><a href="https://github.com/aditya-s3n" className="nav-link px-2 text-muted"><i class="bi bi-github fs-3"></i></a></li>
                </ul>

            </footer>

        </div>
    );  
}

//export
export default Footer;
//react modules
import React from "react";

//render Footer function
function Footer() {
    return (
        <div className="container" id="Footer">
        
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">Aditya :)</p>

                <a href="#Title" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    Back to the Top
                </a>


                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="https://twitter.com/AdityaS3n" class="nav-link px-2 text-muted"><i class="fa-brands fa-twitter fa-xl"></i></a></li>
                    <li class="nav-item"><a href="https://github.com/aditya-s3n" class="nav-link px-2 text-muted"><i class="fa-brands fa-github fa-xl"></i></a></li>
                </ul>

            </footer>

        </div>
    );  
}

//export
export default Footer;
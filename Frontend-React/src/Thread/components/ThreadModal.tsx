//react modules
import React, { useState } from "react";


function ThreadModal({ title, route }) {
    const [showPassword, setShowPassword] = useState(false); //state to show/hide password

    //render
    return (
        <div className="modal fade" id={`${route}Modal`} tabindex="-1" aria-labelledby={`${route}ModalLabel`} aria-hidden="true">
                
                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id={`${route}ModalLabel`}>{title} Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            
                            <div className="input-group mb-3">
                                <input type={showPassword ? "text" : "password"} name="password_thread" placeholder="Password" className="form-control" />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => setShowPassword(!showPassword)}><i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i></button>
                            </div>
                            
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>

                    </div>

                </div>

            </div>
    );
}

//export
export default ThreadModal;
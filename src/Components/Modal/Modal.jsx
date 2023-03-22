import React from "react";

function Modal({ isOpen, onClose }) {
    return (
        <div className={`modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
                <h2>Sign In</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit" className="submit_btn">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;

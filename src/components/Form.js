import React from "react";

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="my-4">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className={`form-control ${
                            props.emailIsValid ? "is-valid" : "is-invalid"
                        }`}
                        id="email"
                        placeholder="Enter email ..."
                        onChange={props.handleEmailChange}
                        required
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            props.firstNameLength > 0
                                ? "is-valid"
                                : "is-invalid"
                        }`}
                        id="firstName"
                        placeholder="Enter First Name ..."
                        onChange={props.handleFirstNameChange}
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            props.lastNameLength > 0 ? "is-valid" : "is-invalid"
                        }`}
                        id="lastName"
                        placeholder="Enter Last Name ..."
                        onChange={props.handleLastNameChange}
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className={`form-control ${
                            props.passwordIsValid ? "is-valid" : "is-invalid"
                        }`}
                        id="password"
                        placeholder="Enter password ..."
                        onChange={props.handlePasswordChange}
                        required
                    />
                </div>
                <div className="my-4">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkRemember"
                        onChange={props.handleRememberMeChange}
                    />
                    <label htmlFor="checkRemember" className="form-check-label">
                        Remember me
                    </label>
                </div>
                <div className="my-4">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;

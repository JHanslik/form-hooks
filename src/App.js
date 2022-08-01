import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isEmailValid = (email) => {
        return /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const handleEmailChange = (e) => {
        if (!isEmailValid(e.target.value)) {
            setEmailIsValid(false);
        } else {
            setEmail(e.target.value);
            setEmailIsValid(true);
        }
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setPasswordIsValid(false);
        } else {
            setPassword(e.target.value);
            setPasswordIsValid(true);
        }
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailIsValid && passwordIsValid) {
            setIsSubmitted(true);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Login</h1>
            {isSubmitted ? (
                <h2 className="bg-secondary d-flex justify-content-center align-items-center my-5">
                    Form submitted
                </h2>
            ) : (
                <Form
                    handleEmailChange={handleEmailChange}
                    emailIsValid={emailIsValid}
                    handleFirstNameChange={handleFirstNameChange}
                    firstNameLength={firstName.length}
                    handleLastNameChange={handleLastNameChange}
                    lastNameLength={lastName.length}
                    handlePasswordChange={handlePasswordChange}
                    passwordIsValid={passwordIsValid}
                    handleRememberMeChange={handleRememberMeChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

export default App;

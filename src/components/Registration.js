import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {setToLocalStorage, encodeToken} from "../helperMethods";



const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory()

    function handleRegistration(e) {
        e.preventDefault();

        let token = encodeToken(username,password);

        let user = {
            token: token,
            username: username,
            firstname: firstName,
            lastname: lastName,
            isLoggedIn: false
        }
        setToLocalStorage("user", user);

        redirectTo("/login");
    }

    function redirectTo(string) {
        history.push(string);
    }


    return (
        <div className="registration__form-container">

            <h2 className="registration__title">Registration</h2>

            <form onSubmit={handleRegistration} action="#" className="registration__form">
                <input
                    type="text"
                    className="registration__input"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    required title="This field is mandatory"
                />
                <input
                    type="text"
                    className="registration__input"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    required title="This field is mandatory"
                />
                <input
                    type="text"
                    className="registration__input"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    required title="This field is mandatory"
                />
                <input
                    type="password"
                    className="registration__input"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    pattern=".{6,}"
                    required title="Password must be minimum 6 character"
                />

                <button type="submit" className="registration__button">Sign up</button>
            </form>

        </div>
    )

};

export default Registration;
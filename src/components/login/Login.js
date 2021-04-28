import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import * as Actions from '../../store/actions';
import {setToLocalStorage, getFromLocalStorage, encodeToken} from "../../helperMethods";
import ReactSpeedometer from 'react-d3-speedometer';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(0)
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    if (user.data.isLoggedIn) {
        redirectTo("/profile");
    }


    const handleLogin = (e) => {
        e.preventDefault();
        const user = getFromLocalStorage("user");
        const token = encodeToken(username, password);

        if (user.token !== token) {
            let e = 0;
            e++;
            setErrors(e);
            return;
        }

        user.isLoggedIn = true;
        setToLocalStorage("user", user);
        dispatch(Actions.setUserinfo(user));
    }

    function redirectTo(string) {
        history.push(string);
    }


    return (
        <div className="login">

            <div className="login__form-container">
                <h2 className="login__title">Login</h2>

                <form onSubmit={e => handleLogin(e)} action='#' className="login__form" id="login-form">
                    <input
                        className="login__input"
                        placeholder="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required title="This field is mandatory"

                    />
                    <input
                        className="login__input"
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        pattern=".{6,}"
                        required title="Password must be 6 characters minimum"
                    />

                    {errors > 0 && (<div className="login__error-display">Username or password is invalid</div>)}

                    <button className="login__button" type="submit">Login</button>

                </form>
            </div>
            <div className="login__error-counter">
                <ReactSpeedometer
                    fluidWidth={true}
                    minValue={0}
                    maxValue={8}
                    value={errors}
                    segments={8}
                    startColor="#8A80E7"
                    endColor="#8A80E7"
                    needleColor="white"
                />
            </div>

        </div>
    );

};


export default Login;
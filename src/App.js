import './App.css';
import {
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from './store/actions/index';
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import News from "./components/news/News";
import Profile from "./components/profile/Profile";
import {setToLocalStorage, getFromLocalStorage} from "./helperMethods";
import EditUserInfo from "./components/profile/EditUserInfo";


function App() {
    const reduxUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        fetch('./news.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => dispatch(Actions.setNews(data)))
            .catch(e => dispatch(Actions.setErrors(e)));

        if (localStorage.length !== 0) {
            const localUser = getFromLocalStorage("user");
            if (localUser?.isLoggedIn) {
                dispatch(Actions.setUserinfo(localUser));
            }

        }

    }, [dispatch]);


    const redirectToLogin = () => {
        history.push("/login");
    }

    const handleProfileDisplay = ({isLoggedIn, firstname, lastname}) => {
        return (
            <div className="header__profile">
                {!isLoggedIn ? (
                    <Link className="link" to="/login">
                        <span className="header__profile-login">Log in</span>
                    </Link>
                ) : (
                    <>
                        <Link className="link" to="/profile">
                            <span className="header__profile-username">{`${firstname} ${lastname}`}</span>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="header__logout-button">Logout
                        </button>
                    </>
                )}
            </div>
        )
    }

    const handleLogout = () => {
        dispatch(Actions.setUserinfo({}));
        const localUser = getFromLocalStorage("user");
        localUser.isLoggedIn = false;
        setToLocalStorage("user", localUser);
        redirectToLogin();
    }

    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="header-container">

                        <Link className="link" to="/main">
                            <div className="logo">
                                <div className="logo__container">
                                    <span>S</span>
                                    <span>C</span>
                                </div>

                                <span className="logo__desc">Social Network</span>
                            </div>
                        </Link>

                        {handleProfileDisplay(reduxUser.data)}

                    </div>
                </div>

            </header>

            <div id="content">
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/login">
                            {!reduxUser.data.isLoggedIn ? <Login/> : <Redirect to="/profile"/>}
                        </Route>
                        <Route exact path={["/", "/main"]} render={props => <Main {...props}/>}/>
                        <Route exact path="/news" render={props => <News {...props}/>}/>
                        <Route exact path="/profile">
                            {!reduxUser.data.isLoggedIn ? <Redirect to="/login"/> : <Profile/>}
                        </Route>
                        <Route exact path="/profile/edit-user-info" render={props => <EditUserInfo user={reduxUser} {...props}/>}/>
                    </Switch>
                </div>
            </div>
        </>
    );
}


export default App;

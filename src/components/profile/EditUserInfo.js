import {useState} from 'react';
import {setToLocalStorage, getFromLocalStorage} from "../../helperMethods";
import * as Actions from '../../store/actions'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


const EditUserInfo = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [firstname, setFirstname] = useState(props.user.data.firstname);
    const [lastname, setLastname] = useState(props.user.data.lastname);
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState('');
    const [birthday, setBirthday] = useState('');
    const [about, setAbout] = useState('');

    const localUser = getFromLocalStorage("user");


    const submitInfoEdit = (e) => {
        e.preventDefault();
        localUser.lastname = lastname;
        localUser.firstname = firstname;
        localUser.city = city;
        localUser.gender = gender;
        localUser.languages = languages;
        localUser.birthday = birthday;
        localUser.about = about;
        setToLocalStorage("user",localUser);
        dispatch(Actions.setUserinfo(localUser));
        redirectToProfile();
    }

    const redirectToProfile = () => {
        history.push("/profile");
    }

    return (
        <div className="edit">
            <div onClick={redirectToProfile} className="edit__bg"> </div>
            <div className="edit__modal">
                <form onSubmit={e => submitInfoEdit(e)} action="#" className="edit__form">

                    <h1>Add information about you</h1>

                    <label className="edit__input-label" htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className="input edit__input"
                        name="firstname"
                        value={firstname}
                        placeholder="First Name"
                        onChange={e => setFirstname(e.target.value)}
                        required title="This field is mandatory"
                    />

                    <label className="edit__input-label" htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        className="input edit__input"
                        name="lastname"
                        value={lastname}
                        placeholder="Last Name"
                        onChange={e => setLastname(e.target.value)}
                        required title="This field is mandatory"
                    />

                    <label className="edit__input-label" htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        className="input edit__input"
                        name="birthday"
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />

                    <label className="edit__input-label" htmlFor="city">City</label>
                    <input
                        type="text"
                        className="input edit__input"
                        name="city"
                        value={city}
                        placeholder="City"
                        onChange={e => setCity(e.target.value)}
                    />

                    <label className="edit__input-label" htmlFor="languages">Languages</label>
                    <input
                        type="text"
                        className="input edit__input"
                        name="languages"
                        value={languages}
                        placeholder="English, Russian"
                        onChange={e => setLanguages(e.target.value)}
                    />

                    <label className="edit__input-label" htmlFor="about">About me</label>
                    <textarea className="input edit__textarea edit__input" name="about" id="about" cols="30" rows="10" value={about} onChange={e => setAbout(e.target.value)}/>

                    <label className="edit__input-label" htmlFor="radio">Gender</label>
                    <div className="edit__gender">

                        <label htmlFor="Male">Male</label>
                        <input

                            type="radio"
                            name="Male"
                            value={gender}
                            checked={gender === "Male"}
                            onChange={() => setGender("Male")}
                        />

                        <label htmlFor="Female">Female</label>
                        <input

                            type="radio"
                            name="Female"
                            value={gender}
                            checked={gender === "Female"}
                            onChange={() => setGender("Female")}
                        />
                    </div>

                    <button className="edit__form-submit-btn">Submit</button>
                </form>
            </div>

        </div>
    )

};

export default EditUserInfo;
import SideMenu from "../SideMenu";
import {useHistory} from "react-router-dom";
import {getFromLocalStorage} from "../../helperMethods";


const Profile = () => {
    const history = useHistory();

    const user = getFromLocalStorage("user");

    const redirectToEdit = () => {
        history.push("/profile/edit-user-info");
    }
    return(
        <div className="profile">
            <SideMenu/>
            <div className="profile__content">
                <div className="profile__user">
                    <div className="profile__photo-placeholder">
                    </div>
                    <div className="profile__user-info">
                        <button onClick={redirectToEdit} className="profile__edit-info-btn">Edit</button>
                        <div className="profile__user-info-top">
                           <div className="profile__name">{`${user.firstname} ${user.lastname}`}</div>
                            <div className="profile__online">{!user.isLoggedIn ? `offline` : `online`}</div>
                        </div>

                        <div className="profile__info-row">
                            <div className="profile__info-label">{`Birthday:`}</div> <div className="profile__info-labeled">{user.birthday}</div>
                        </div>

                        <div className="profile__info-row">
                            <div className="profile__info-label">{`City:`}</div> <div className="profile__info-labeled">{user.city}</div>
                        </div>

                        <div className="profile__info-row">
                            <div className="profile__info-label">{`Languages:`}</div> <div className="profile__info-labeled">{user.languages}</div>
                        </div>
                        <div className="profile__info-row">
                            <div className="profile__info-label">{`About me:`}</div> <div className="profile__info-labeled">{user.about}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

};

export default Profile;
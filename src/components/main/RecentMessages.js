import {useSelector} from "react-redux";

const RecentMessages = () => {
    const user = useSelector(state => state.user);


    return(
        <div className="recent-messages">
            <div className="recent-messages__user-info">
                <div className="recent-messages__user-avatar"> </div> <span className="recent-messages__user-name">{`${user.data.firstname} ${user.data.lastname}`}</span>
            </div>
            <div className="recent-messages__messages">
                <span>You have 0 messages.</span>
            </div>
        </div>
    )

};

export default RecentMessages;
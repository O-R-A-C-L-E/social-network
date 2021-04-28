import React from 'react';
import {useSelector} from "react-redux";
import Post from "../news/Post";
import Registration from "../Registration";
import SideMenu from "../SideMenu";
import RecentMessages from "./RecentMessages";

const Main = () => {
    const recentNews = useSelector(state => state.userNews.posts);
    const user = useSelector(state => state.user);

    const isUser = localStorage.length !== 0;

    return (
        <div className="main">

            {!user.data.isLoggedIn ? null : <SideMenu/>}

            <div className="main__recent-news">
                {!user.data.isLoggedIn ? null : <RecentMessages/>}
                {recentNews && recentNews.length > 0 && recentNews.slice(-4).map(post => {
                    return(
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            content={post.content}
                            dateStamp={post.date}
                            imgURL={post.imgURL}
                        />
                    )
                })}
            </div>

            {!isUser ?(<div className="main__registration">
                <Registration/>
            </div>) : null}
        </div>
    )

};

export default Main;
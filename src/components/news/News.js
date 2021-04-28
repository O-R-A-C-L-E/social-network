import SideMenu from "../SideMenu";
import {useSelector} from "react-redux";
import Post from "./Post";

const News = () => {
    const posts = useSelector(state => state.userNews.posts);

    return(
        <div className="news">
            <SideMenu/>
            <div className="news__container">
                {posts.map(post => <Post
                    key={post.id}
                    title={post.title}
                    imgURL={post.imgURL}
                    content={post.content}
                    author={post.author}
                    dateStamp={post.date}
                />)}
            </div>
        </div>
    )

};

export default News;
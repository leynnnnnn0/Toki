import PostBox from "../../components/postBox/PostBox"
import "./Feed.css"
import { userStore } from "../../store/userStore"
import { useState, useEffect } from "react"
import axios from 'axios';

const Feed = () => {
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([])
    const currentUser = userStore(state => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("http://localhost:8000/api/users/addpost", {username: currentUser, content: content});
        window.alert(result.data.message);
        
    }

    const getPosts = async () => {
        const result = await axios.get("http://localhost:8000/api/users/posts");
        setPosts(result.data);
    }

    useEffect(() => {
        getPosts();
        console.log(posts);
    },[])

    const handleChange = (e) => {
        setContent(e.target.value);
        }
  return (
    <div className="feed HW100">
        <div className="news-feed">
            <div className="what-is-new BORDER10">
                <p className="P2">{currentUser}</p>
                <input type="text" className="post-new" 
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="What's new?"/>    
                <button onClick={handleSubmit} className="post-new-btn BORDER20">Post</button>      
            </div>  
            {posts?.map(item => (
                    <PostBox key={item._id} username={item.author} body={item.content}/>
                ))}          
         </div>  
    </div>
  )
}

export default Feed
import PostBox from "../../components/postBox/PostBox"
import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed HW100">
        <div className="news-feed">
            <div className="what-is-new BORDER10">
                <p className="P2">Username</p>
                <input type="text" className="post-new" placeholder="What's new?"/>    
                <button className="post-new-btn BORDER20">Post</button>          
            </div>         
         </div>  
    </div>
  )
}

export default Feed
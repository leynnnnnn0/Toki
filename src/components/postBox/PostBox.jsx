import './PostBox.css'
import { CiHeart } from "react-icons/ci";

const PostBox = ({username, body, likes}) => {
  return (
    <div className='post-box BORDER10'>
        <p className='P2'>{username}</p>
        <p className='P1'>{body}</p>
        <div className="reactions">
            <CiHeart className='heart'/>
            <span className='num-of-likes'>{likes}</span>
        </div>
    </div>
  )
}

export default PostBox
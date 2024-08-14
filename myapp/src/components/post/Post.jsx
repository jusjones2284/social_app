import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/profiles/2.jpg" alt="" />
                    <span className="postUsername"></span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post!</span>
                <img src="assets/sports/1.png" alt=""  className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/heart1.png" alt="" />
                    <img className="likeIcon" src="assets/Like2.png" alt="" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
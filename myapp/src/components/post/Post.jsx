import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../data";
import { useState } from "react";

const Post = ({post}) => {

   
 const [like, setLike] = useState(post.like)
 const [comment, setComment] = useState(post.comment)
 const [isLiked, setIsLiked] = useState(false)


 const likeHandler = ()=>{
     setLike(isLiked ? like-1 : like +1)
     setIsLiked(!isLiked)

     

 }
 
    
  
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id == post.userId)[0].profilePicture} alt="" />
                    <span >{Users.filter((u) => u.id == post.userId)[0].username}</span>
                    <span className="postDate">  {post.date}</span>  
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post?.sports} alt=""  className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/heart1.png" alt="" onClick={likeHandler} />
                    <img className="likeIcon" src="assets/Like2.png" alt="" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
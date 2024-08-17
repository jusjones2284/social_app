

const Online = ({user, profilePicture}) => {

  return (
   <li className="rightbarFriend">
       <div className="rightbarProfileImgContainer">
           <img src={profilePicture} alt="" className="rightbarProfileImg"/>
           <span className="rightbarOnline"></span>
       </div>
       <span className="rightbarUsername">{user}</span>
   </li>
  )
}

export default Online
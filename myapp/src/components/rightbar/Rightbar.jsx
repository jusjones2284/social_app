import '/Users/justinjones/Desktop/Tech/Continious Learning/social_app/myapp/src/components/rightbar/rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'> 
       <div className="rightbarWrapper">
           <div className="birthdayContainer">
             <img src="/assets/bday3.png" className='birthdayImg' alt="" />
             <span className='birthdayText'>
               <b>Pola Foster</b> and <b>3 other friends</b>have a birthday today
             </span>
           </div>
           <img src='assets/nfl.jpeg' className='rightbarAd'/>
           <h4 className='rightbarTitle'>Online</h4>
           <ul className='rightbarFriendList'>
             <li className="rightBarFriend">
               <div className="rightbarProfileImgContainer">
                 <img src="assets/profiles/2.jpg" alt=""
                 className='rightbarProfileImg'
                 />
                 <span className='rightbarOnline'></span>
               </div>
             </li>
           </ul>
       </div>
    </div>
  )
}

export default Rightbar
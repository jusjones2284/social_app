import { Users } from '../../data'
import Online from '../online/online'
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
           {Users.map(u =>(<Online key={u.id} user={u.username} profilePicture={u.profilePicture}/>))}

       </div>
    </div>
  )
}

export default Rightbar
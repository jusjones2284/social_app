import '/Users/justinjones/Desktop/Tech/Continious Learning/social_app/myapp/src/components/topbar/topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';

const topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">Cinema Hub</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <input placeholder='Search for friend, post or video' className='searchInput' />
            <SearchIcon className='searchIcon'/>
          </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">3</span>
              </div>               
            </div>
            <img src="/assets/profiles/3.png" 
            className='topbarImg'
            alt=''
             />
        </div>
    </div>
    
  )
}

export default topbar


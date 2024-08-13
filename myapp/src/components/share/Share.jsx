import '/Users/justinjones/Desktop/Tech/Continious Learning/social_app/myapp/src/components/share/share.css'
import TheatersIcon from '@mui/icons-material/Theaters';
const Share = () => {

  return (
    <div>
        <div className="share">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/profiles/1.png" alt="" />
                <input placeholder='What movie would you like to review?' type="" className='shareInput' />
                <hr className='shareHr'/>
                <div  className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <TheatersIcon className='shreIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Share
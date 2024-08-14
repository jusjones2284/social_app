import '/Users/justinjones/Desktop/Tech/Continious Learning/social_app/myapp/src/components/share/share.css'
import TheatersIcon from '@mui/icons-material/Theaters';
const Share = () => {

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/profiles/1.png" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <TheatersIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <TheatersIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <TheatersIcon htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <TheatersIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share




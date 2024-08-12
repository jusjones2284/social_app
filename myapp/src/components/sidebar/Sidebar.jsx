import "/Users/justinjones/Desktop/Tech/Continious Learning/social_app/myapp/src/components/sidebar/sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import RssFeed from "@mui/icons-material/RssFeed";
import { Chat,  PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, School, Event} from "@mui/icons-material";
import TheatersIcon from '@mui/icons-material/Theaters';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper"></div>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Trailer</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Movie Set Openings</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Movie Premiers</span>
          </li>
          <li className="sidebarListItem">
            <TheatersIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Theaters</span>
          </li>
            </ul>
       sidebar
    </div>
  )
}

export default Sidebar
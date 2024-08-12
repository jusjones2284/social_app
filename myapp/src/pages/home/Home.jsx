import Topbar from "../../components/topbar/topbar"
import "./home.css"
// import Topbar from './pages/home/Home';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";




const Home = () => {
          return (
            <>
            <Topbar />
              <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
              </div>
            </>
          )
}

export default Home
import { Routes, Route } from "react-router-dom"
import Home from "../home/home"
import Trending from "../trending/trending"
import Subscription from "../subscription.jsx/subscription"
import Library from "../lirary/library.jsx"
import History from "../history/History"
import YourVideos from "../YourVideos/YourVideos"
import Watchlater from "../Watchlater/Watchlater"
import Likedvideos from "../Likedvideos/Likedvideos"
import Sidebar from "../sidebar/sidebar"
import Notfound from "../notfound/notfound"
import Topbar from "../topbar/topbar"
import VideoInfo from "../YourVideos/videoInfo/VideoInfo"

const RouteComponent = () => {
  return (
    <div className="grid grid-cols-[20%_minmax(80%,_1fr)] max-w-[1540px] mx-auto w-full">
        <Sidebar />
        <div className="w-[98%] mx-auto">
            <Topbar />
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/yourvideos" element={<YourVideos />} />
                    <Route path="/watchlater" element={<Watchlater />} />
                    <Route path="/likedvideos" element={<Likedvideos />} />
                    <Route path='/videos/:id' element={<VideoInfo />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
        
    </div>
  )
}

export default RouteComponent
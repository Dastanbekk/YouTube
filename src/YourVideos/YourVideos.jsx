import { useEffect, useState } from "react"
import { api } from "../server/data"
import { useNavigate } from "react-router-dom"




const YourVideos = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        api.get('/videos')
        .then((data)=>setData(data.data))
        // .catch((err)=>console.log(err, 'error api'))
    },[])
  return (
    <div className="grid grid-cols-4 gap-4 h-[90vh] video-container">
        {
            data.map((value)=>{
                return(
                    <div key={value.id} onClick={()=>navigate(`/videos/${value.id}`)} className="cursor-pointer">
                    <div className="w-full h-[70%]"><img className="w-full h-full" src={value.img} alt="photo" /></div>
                    <h3 className="font-bold">{value.title.slice(0,10)}</h3>
                    <p>{value.description.slice(0,60)}</p>
                </div>
                )
            })
        }
    </div>
  )
}

export default YourVideos
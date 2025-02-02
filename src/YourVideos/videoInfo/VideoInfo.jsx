import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../server/data"

const VideoInfo = () => {
  const {id} = useParams([])
  const [data, setData] = useState([])

  const [bigdata, setBigData] =useState([])
  useEffect(()=>{
    api.get(`/videos`)
    .then((data)=>setBigData(data.data))
    .catch((err)=>console.log(err, "error Big data"))
  },[])

  useEffect(()=>{
    api.get(`/videos/${id}`)
    .then((data)=>setData(data.data))
    .catch((err)=>console.log(err, "error"))
  },[])

  return (
    <div className="grid gap-2 grid-cols-[60%_minmax(30%,_1fr)]">
      <div>
        <img className="w-full" src={data.img} alt="photo"/>
        <h3 className="font-bold text-2xl mt-3">{data.title}</h3>
        <p>{data.description}</p>
      </div>
      <div className="flex flex-col h-[75vh] overflow-y-scroll ">
        {
          bigdata.map((value)=>(
            <div className="flex items-center cursor-pointer gap-3 p-3 hover:bg-indigo-200" key={value.id}>
              <img className="rounded-full w-[50px] h-[50px]" src={value.img} alt="" />
              <div className="flex flex-col ">
                <h3>{value.title.slice(0,40)}</h3>
                <p>{value.description.slice(0,40)}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VideoInfo
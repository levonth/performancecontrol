import RenderRecentsDetails from "./RenderRecentsDetails"
import dayjs from "dayjs"
import { useContextHook } from "../../hooks/contexts"
import RenderMonths from './RenderMonths'
import Banner from "../Banner"
import { useState, useEffect } from 'react'

const Details = () => {

  const [displayRecents, setDisplayRecents] = useState(false)
  const [displayMonths, setDisplayMonths] = useState(false)
  const {
    activities,
    setActivities,
  } = useContextHook()

  /* eslint-disable */
  useEffect(()=>{
    const jsonContent = `
    {
      "date": "${dayjs().format("YYYY-MM-DD")}", 
      "name": "exemplo", 
      "started": "${dayjs().format("HH:mm:ss")}",
       "finished": ${null}
    }`; 
    if(!activities) {
      localStorage.setItem("activities", `${jsonContent}`)
      setActivities(JSON.parse(`[${localStorage.getItem("activities")}]`))
      setDisplayRecents(true)
    }else{
      setDisplayRecents(true)
    }
  },[])  
  /* eslint-enable */


  
  return (
    <>
      <div className="w-full max-w-[800px] min-height flex flex-col justify-center items-center overflow-scroll">
        <div className="w-full min-height px-2">
            <div className="w-full pt-1 flex justify-evenly mb-5">
              <button className='text-xs rounded-full border border-white px-4 py-2' onClick={()=>{setDisplayRecents(true); setDisplayMonths(false)}}>Recentes</button>
              <button className='text-xs rounded-full border border-white px-4 py-2' onClick={()=>{setDisplayRecents(false);setDisplayMonths(true)}}>Mensal</button>
              <button className='text-xs rounded-full border border-white px-4 py-2'>Tudo</button>
            </div>
            <div className="w-full flex flex-row justify-between px-5 mb-4">
              <p className="w-1/2 text-base font-bold text-white">
                PERÍODO
              </p>
              <p className="text-base font-bold text-white">
                TEMPO
              </p>
            </div>
            <Banner />
            { displayRecents &&
              <RenderRecentsDetails />
            }
            { displayMonths &&
              <RenderMonths />
            }
        </div>
      </div> 
    </>
  )
}

export default Details
import dayjs from "dayjs"
import Banner from "../Banner";
import duration from "dayjs/plugin/duration";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../hooks/contexts";
import { useStopwatch } from 'react-timer-hook';
dayjs.extend(duration);

const Started = () => {
  const { 
    activities,
    setActivities,
  } = useContextHook()
  const navigate = useNavigate()

  const {
    seconds,
    minutes,
    hours,
    start,
    reset,
  } = useStopwatch({ autoStart: true });

  /* eslint-disable */
  useEffect(()=>{
    if(!activities){ navigate('/home')} else { start() }
  },[])
  

  /* eslint-enable */

  const handleFinish = () => {
    reset()
    if(activities){
      if(!activities[0].finished){
        let process = activities
        process[0].finished = dayjs().format("HH:mm:ss")
        setActivities(process)
        const tostr = JSON.stringify(process)
        const jsonContent = tostr.replace(/\[/g, "").replace(/\]/g, "")
        localStorage.setItem("activities", `${jsonContent}`)        
        navigate('/performance')
      }else{
        alert('Você não tem nenhuma atividade em andamento.')
        navigate('/home')
      }
    } else{
      navigate('/performance')
    }
  }
  return (
    <>
      <div className="w-full max-w-[800px] min-height ">
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Banner />
            <p className='text-xs text-white mt-10'>{ activities && activities[0].name }</p>
            <p className='text-5xl font-bold text-white my-5'>{hours + ' : ' + minutes + ' : ' + seconds}</p>
            {/* <p className='text-5xl font-bold text-white my-5'>{timer && timer}</p> */}
            <button className='border border-white rounded-full px-5 p-1 text-base text-white mb-36 mt-2' onClick={handleFinish}>Finalizar</button>
        </div> 
      </div> 
    </>
  )
}

export default Started
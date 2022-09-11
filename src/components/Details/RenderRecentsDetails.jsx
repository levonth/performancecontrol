import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useContextHook } from '../../hooks/contexts'


const RenderRecentsDetails = () => {

  const {
      activities,
      userImage
  } = useContextHook()


  
  const [today, setToday] = useState()
  const [referenceDate] = useState(dayjs().format("YYYY-MM-DD"))
  const [todayDetails] = useState(activities.filter(s => s.date.includes(referenceDate)) ? activities.filter(s => s.date.includes(referenceDate)) : null)
  const [displayTodayDetails, setDisplayTodayDetails] = useState(true)
  const [yesterday, setYesterday] = useState()
  const [yesterdayDate] = useState(dayjs(referenceDate).subtract(1, 'day').format("YYYY-MM-DD"))
  const [yesterdayDetails] = useState(activities.filter(s => s.date.includes(yesterdayDate)) ? activities.filter(s => s.date.includes(yesterdayDate)) : null)
  const [displayYesterdayDetails, setDisplayYesterdayDetails] = useState(false)
  const [twoDays, setTwoDays] = useState()
  const [twoDaysDate] = useState(dayjs(referenceDate).subtract(2, 'day').format("YYYY-MM-DD"))
  const [twoDaysDetails] = useState(activities.filter(s => s.date.includes(twoDaysDate)) ? activities.filter(s => s.date.includes(twoDaysDate)) : null)
  const [displayTwoDaysDetails, setDisplayTwoDaysDetails] = useState(false)
  const [threeDays, setThreeDays] = useState()
  const [threeDaysDate] = useState(dayjs(referenceDate).subtract(3, 'day').format("YYYY-MM-DD"))
  const [threeDaysDetails] = useState(activities.filter(s => s.date.includes(threeDaysDate)) ? activities.filter(s => s.date.includes(threeDaysDate)) : null)
  const [displayThreeDaysDetails, setDisplayThreeDaysDetails] = useState(false)
  const [fourDays, setFourDays] = useState()
  const [fourDaysDate] = useState(dayjs(referenceDate).subtract(4, 'day').format("YYYY-MM-DD"))
  const [fourDaysDetails] = useState(activities.filter(s => s.date.includes(fourDaysDate)) ? activities.filter(s => s.date.includes(fourDaysDate)) : null)
  const [displayFourDaysDetails, setDisplayFourDaysDetails] = useState(false)
  const [fiveDays, setFiveDays] = useState()
  const [fiveDaysDate] = useState(dayjs(referenceDate).subtract(5, 'day').format("YYYY-MM-DD"))
  const [fiveDaysDetails] = useState(activities.filter(s => s.date.includes(fiveDaysDate)) ? activities.filter(s => s.date.includes(fiveDaysDate)) : null)
  const [displayFiveDaysDetails, setDisplayFiveDaysDetails] = useState(false)
  const [sixDays, setSixDays] = useState()
  const [sixDaysDate] = useState(dayjs(referenceDate).subtract(6, 'day').format("YYYY-MM-DD"))
  const [sixDaysDetails] = useState(activities.filter(s => s.date.includes(sixDaysDate)) ? activities.filter(s => s.date.includes(sixDaysDate)) : null)
  const [displaySixDaysDetails, setDisplaySixDaysDetails] = useState(false)

  /* eslint-disable */
  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(referenceDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setToday(query)
    }
  },[referenceDate])

  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(yesterdayDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setYesterday(query)
    }
  },[yesterdayDate])
  
  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(twoDaysDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setTwoDays(query)
    }
  },[twoDaysDate])

  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(threeDaysDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setThreeDays(query)
    }
  },[threeDaysDate])

  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(fourDaysDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setFourDays(query)
    }
  },[fourDaysDate])

  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(fiveDaysDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setFiveDays(query)
    }
  },[fiveDaysDate])

  useEffect(()=>{
    if(activities){
        let query = activities.filter(s => s.date.includes(sixDaysDate))
        query.total = 0
        for(let i = 0; i < query.length; i++){
            let started = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].started}`)
            let finished = dayjs(`${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`)
            let d = finished.diff(started, 'milliseconds')
            query.total += d
        }
        query.today = dayjs.duration(query.total).format('HH[ H ]:[ ]mm[ M]')
        setSixDays(query)
    }
  },[sixDaysDate])
  
/* eslint-enable */

  return (
    <>
        <div 
          onClick={()=>{
            setDisplayTodayDetails(!displayTodayDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HOJE
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {today ? today.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          { displayTodayDetails &&
            <>
              {todayDetails.map((c, i)=>{
                  return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
              })}
            </>
          }
        </div>
        <div 
          onClick={()=>{
            setDisplayYesterdayDetails(!displayYesterdayDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              ONTEM
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {yesterday ? yesterday.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        {displayYesterdayDetails &&
          <>
            {yesterdayDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
        <div 
          onClick={()=>{
            setDisplayTwoDaysDetails(!displayTwoDaysDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HÁ 2 DIAS
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {twoDays ? twoDays.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        { displayTwoDaysDetails &&
          <>
            {twoDaysDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
        <div 
          onClick={()=>{
            setDisplayThreeDaysDetails(!displayThreeDaysDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HÁ 3 DIAS
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {threeDays ? threeDays.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        {displayThreeDaysDetails &&
          <>
            {threeDaysDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
        <div 
          onClick={()=>{
            setDisplayFourDaysDetails(!displayFourDaysDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HÁ 4 DIAS
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {fourDays ? fourDays.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        {displayFourDaysDetails &&
          <>
            {fourDaysDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
        <div 
          onClick={()=>{
            setDisplayFiveDaysDetails(!displayFiveDaysDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HÁ 5 DIAS
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {fiveDays ? fiveDays.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        {displayFiveDaysDetails &&
          <>
            {fiveDaysDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
        <div 
          onClick={()=>{
            setDisplaySixDaysDetails(!displaySixDaysDetails)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              HÁ 6 DIAS
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
            {sixDays ? sixDays.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        {displaySixDaysDetails &&
          <>
            {sixDaysDetails.map((c, i)=>{
                return <p key={i} className='text-sm flex ml-4'>{c.started} - {c.finished} | {c.name}</p>
            })}
          </>
        }
    </>
  )
}
export default RenderRecentsDetails
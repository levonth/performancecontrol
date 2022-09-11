import { useState, useEffect } from 'react'
import { useContextHook } from '../../hooks/contexts'
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(duration);
dayjs.extend(isBetween);



const RenderMonths = () => {
  const {
    activities,
    userImage
  } = useContextHook()

  const [january, setJanuary] = useState()
  const [february, setFebruary] = useState()
  const [march, setMarch] = useState()
  const [april, setApril] = useState()
  const [may, setMay] = useState()
  const [june, setJune] = useState()
  const [july, setJuly] = useState()
  const [august, setAugust] = useState()
  const [september, setSeptember] = useState()
  const [october, setOctober] = useState()
  const [november, setNovember] = useState()
  const [december, setDecember] = useState()

  const [displayJanuary, setDisplayJanuary] = useState(true)
  const [displayFebruary, setDisplayFebruary] = useState(false)
  const [displayMarch, setDisplayMarch] = useState(false)
  const [displayApril, setDisplayApril] = useState(false)
  const [displayMay, setDisplayMay] = useState(false)
  const [displayJune, setDisplayJune] = useState(false)
  const [displayJuly, setDisplayJuly] = useState(false)
  const [displayAugust, setDisplayAugust] = useState(false)
  const [displaySeptember, setDisplaySeptember] = useState(false)
  const [displayOctober, setDisplayOctober] = useState(false)
  const [displayNovember, setDisplayNovember] = useState(false)
  const [displayDecember, setDisplayDecember] = useState(false)

  /* eslint-disable */
  const processData = (value) => {
    if (activities) {
      let query = activities.filter(s => s.date.includes(value))
      query.total = 0;
      for (let i = 0; i < query.length; i++) {
        let started = dayjs(
          `${dayjs().format("YYYY-MM-DD")} ${query[i].started}`
        );
        let finished = dayjs(
          `${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`
        );
        let d = finished.diff(started, "milliseconds");
        query[i].milliseconds = d
        query.total += d;
      }
      query.today = dayjs.duration(query.total).format("HH[ H ]:[ ]mm[ M]");
      return query;
    }
  }

  useEffect(()=>{
    setJanuary(processData('2022-01'))
    setFebruary(processData('2022-02'))
    setMarch(processData('2022-03'))
    setApril(processData('2022-04'))
    setMay(processData('2022-05'))
    setJune(processData('2022-06'))
    setJuly(processData('2022-07'))
    setAugust(processData('2022-08'))
    setSeptember(processData('2022-09'))
    setOctober(processData('2022-10'))
    setNovember(processData('2022-11'))
    setDecember(processData('2022-12'))
  },[])
/* eslint-enable */

  return (
    <>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayJanuary(!displayJanuary)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              JANEIRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {january ? january.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayJanuary &&
            <>
              {january ? january.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayFebruary(!displayFebruary)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              FEVEREIRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {february ? february.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayFebruary &&
            <>
              {february ? february.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayMarch(!displayMarch)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              MARÇO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {march ? march.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayMarch &&
            <>
              {march ? march.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayApril(!displayApril)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              ABRIL
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {april ? april.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayApril &&
            <>
              {april ? april.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayMay(!displayMay)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              MAIO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {may ? may.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayMay &&
            <>
              {may ? may.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayJune(!displayJune)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              JUNHO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {june ? june.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayJune &&
            <>
              {june ? june.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayJuly(!displayJuly)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              JULHO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {july ? july.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayJuly &&
            <>
              {july ? july.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayAugust(!displayAugust)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              AGOSTO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {august ? august.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayAugust &&
            <>
              {august ? august.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplaySeptember(!displaySeptember)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              SETEMBRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {september ? september.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displaySeptember &&
            <>
              {september ? september.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayOctober(!displayOctober)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              OUTUBRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {october ? october.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayOctober &&
            <>
              {october ? october.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayNovember(!displayNovember)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              NOVEMBRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {november ? november.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayNovember &&
            <>
              {november ? november.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
        {/*  */}
        <div 
          onClick={()=>{
            setDisplayDecember(!displayDecember)
          }} 
          className="w-full h-16 flex justify-center items-center bg-white mt-3 mb-2 px-5 py-2 text-black cursor-pointer"
        >
          <div className="w-2/3 flex justify-start items-center">
            <div className="relative">
              <img referrerPolicy="no-referrer" src={userImage} className='rounded-full w-12 z-10' alt="" />
            </div>
            <p className="ml-5 text-sm">
              DEZEMBRO
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <p className='text-sm'>
              {december ? december.today : '00 H 00 M'}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          {displayDecember &&
            <>
              {december ? december.map((c,i)=><p key={i} className='text-sm flex ml-4'>[{c.date} / {c.started} - {c.finished}] {c.name}</p>) : null}
            </>
          }
        </div>
    </>
  )
}
export default RenderMonths
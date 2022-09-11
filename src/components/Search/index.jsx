import { useState } from "react";
import { useContextHook } from "../../hooks/contexts";
import RenderRecents from "./RenderRecents";
import RenderQueried from "./RenderQueried";
/* import Banner from "../Banner"; */

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {
    displayDropdown,
    setDisplayDropdown,
    activities,
    setActivities,
    setSearchQueried,
    setDisplayOverlay
  } = useContextHook();
  
  const [searchValue, setSearchValue] = useState();
  const navigate = useNavigate();
    
  const createActivity = () => {
    const jsonContent = `
      {
        "date": "${dayjs().format("YYYY-MM-DD")}", 
        "name": "${searchValue.toLowerCase()}", 
        "started": "${dayjs().format("HH:mm:ss")}",
         "finished": ${null}
      }`;
    let hasActivitiy = localStorage.getItem("activities");
    if (hasActivitiy) {
      localStorage.setItem("activities", `${jsonContent + "," + hasActivitiy}`);
      setActivities(JSON.parse(`[${localStorage.getItem("activities")}]`))
    } else {
      localStorage.setItem("activities", `${jsonContent}`);
      setActivities(JSON.parse(`[${localStorage.getItem("activities")}]`))
    }
    setDisplayOverlay('z-1')
    navigate("/started");
  };


  const updateDebounceText = debounce((text) => {});

  function debounce(cb, delay = 1000, value) {
    let timeout
    return (value) => {
      clearTimeout(timeout)
      timeout = setTimeout(()=>{
        let query = activities.filter(s => s.name.includes(searchValue));
        setSearchQueried(query)
      }, delay)
    }
  }

  return (
    <>
      <div className="w-full max-w-[800px] min-height">
        <div className="w-full h-full flex flex-col justify-center items-center overflow-scroll pb-16">
   {/*        <Banner /> */}
          <p className="mt-20 text-base font-bold text-white">
          OPA, O QUE VAMOS FAZER AGORA?
          </p>
          <div className="w-10/12 sm:w-full h-auto flex flex-col justify-center items-center relative">
            <input
              type="text"
              value={searchValue}
              onFocus={() => {
                setDisplayDropdown(true);
                setDisplayOverlay("z-10");
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
                updateDebounceText(e.target.value)
              }}
              placeholder="Iniciar : "
              className="mt-6 mb-2 w-full lg:w-2/3 rounded-full px-5 py-2 outline-0 text-black text-base z-10"
            />
            {displayDropdown && (
              <div className="mt-1 py-2 px-2 w-full lg:w-2/3 h-auto border border-white bg-white relative z-10">
                <div className="triangle-up absolute top-[-10px] right-1/2"></div>
                { !searchValue ? <RenderRecents /> : <RenderQueried /> }
              </div>
            )}
          </div>
          <button
            onClick={createActivity}
            className="border border-white rounded-full px-5 p-1 text-base text-white mb-20 mt-6 z-20"
          >
            Começar
          </button>
        </div> 
      </div> 
    </>
  )
}

export default Search
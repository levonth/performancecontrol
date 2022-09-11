import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../hooks/contexts";
import dayjs from "dayjs";


const RenderRecents  = () => {
  const dropdownActivitiesStyle =
    "text-black text-md py-1 pl-2 hover:bg-slate-200 cursor-pointer";
  const {
    activities,
    setActivities,
    setDisplayOverlay
  } = useContextHook();

  const navigate = useNavigate();
  
/* eslint-disable */
  useEffect(()=>{
    if(activities){
      if(!activities[0].finished){
        setDisplayOverlay('z-1')
        navigate('/started')
      }
    }
  },[])
  /* eslint-enable */

  function createActivity(value) {
    const jsonContent = `
      {
        "date": "${dayjs().format("YYYY-MM-DD")}", 
        "name": "${value.toLowerCase()}", 
        "started": "${dayjs().format("HH:mm:ss")}",
        "finished": ${null}
      }`;
    let hasActivitiy = localStorage.getItem("activities");
    if (hasActivitiy) {
      localStorage.setItem("activities", `${jsonContent + "," + hasActivitiy}`);
      setActivities(JSON.parse(`[${localStorage.getItem("activities")}]`));
    } else {
      localStorage.setItem("activities", `${jsonContent}`);
      setActivities(JSON.parse(`[${localStorage.getItem("activities")}]`));
    }
    setDisplayOverlay('z-1')
    navigate("/started");
  }

  return (
    /* eslint-disable */
    <>
      {activities &&
        activities.map((c, i) => {
          if (i < 3)
            return (
              <p
                key={i} 
                className={dropdownActivitiesStyle}
                onClick={() => {
                  createActivity(c.name);
                }}
              >
                {c.name}
              </p>
            )
        })}
      {!activities && (
        <>
          <p className="text-black px-5 text-md">
            Nenhuma atividade recente encontrada. Clique em começar.
          </p>
        </>
      )}
    </>
    /* eslint-enable */
  );
};

export default RenderRecents;

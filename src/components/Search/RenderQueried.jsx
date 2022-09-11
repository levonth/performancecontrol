import { useContextHook } from "../../hooks/contexts";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


const RenderQueried = () => {
  const dropdownActivitiesStyle =
    "text-black text-md py-1 pl-2 hover:bg-slate-200 cursor-pointer";
  const {
    setDisplayDropdown,
    searchQueried,
    setActivities,
    setDisplayOverlay
  } = useContextHook();
  const navigate = useNavigate();

  
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
      {searchQueried &&
        searchQueried.map((c, i) => {
          if (i < 3){
            return (
              <p
                key={i}
                className={dropdownActivitiesStyle}
                onClick={() => {
                  createActivity(c.name);
                  setDisplayDropdown(false);
                }}
              >
                {c.name}
              </p>
            )
          }
      })}
      {!searchQueried && (
        <>
          <p className="text-black px-5 text-md">
            Nenhuma atividade encontrada. Clique em começar.
          </p>
        </>
      )}
    </>
    /* eslint-enable */
  );
};

export default RenderQueried;

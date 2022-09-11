import { useState, useEffect, useRef, useLayoutEffect } from "react";
/* import Banner from "../Banner"; */
import { RiVipCrownFill } from "react-icons/ri";
import { RiFireFill } from "react-icons/ri";
import { useContextHook } from "../../hooks/contexts";
import Logo from "../../assets/logo.png";
import { Chart } from "react-google-charts";
import ProfilePNG from "../../assets/guest.png";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
import _ from 'lodash'
dayjs.extend(duration);
dayjs.extend(isBetween);


const Performance = () => {
  const { activities, userImage } = useContextHook();
  const [chartData, setChartData] = useState([]) 
  const [options] = useState({
    legend: {
      position: "labeled",
      textStyle: {
        color: "white",
      },
    },
    backgroundColor: {
      fill: "none",
    },
    width: "100%",
    height: "100%",
  });
  const [todayDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [firstDate, setFirstDate] = useState(todayDate);
  const [secondDate, setSecondDate] = useState(todayDate);
  const [firstComparationDate, setFirstComparationDate] = useState(
    dayjs(todayDate).subtract(1, "day").format("YYYY-MM-DD")
  );
  const [secondComparationDate, setSecondComparationDate] = useState(
    dayjs(todayDate).subtract(1, "day").format("YYYY-MM-DD")
  );
  const [performance, setPerformance] = useState();
  const [performanceDateUI, setPerformanceDateUI] = useState(
    dayjs().format("DD[ / ]MM[ / ]YYYY")
  );
  const [secondPerformanceDateUI, setSecondPerformanceDateUI] = useState(false);
  const [comparation, setComparation] = useState();
  const [comparationDateUI, setComparationDateUI] = useState(
    dayjs(firstComparationDate).format("DD[ / ]MM[ / ]YYYY")
  );
  const [secondComparationDateUI, setSecondComparationDateUI] = useState(false);
  const [difference, setDifference] = useState();
  const [displayInsertCustomDateModal, setDisplayInsertCustomDateModal] = useState(false);

  
  const loadData = (WithMilliseconds) =>  {
    const values = _.groupBy(WithMilliseconds, (value) => value.name)
    const result = _.map(values, (value, key) => [key,_.sumBy(values[key], (v)=>v.milliseconds)]
    )
    let toMinutes = result
    for(let i = 0; i < result.length; i++) {
      toMinutes[i][0] = result[i][0]
      const subt = `${dayjs.duration(result[i][1]).asMinutes()}`
      const slice = subt.slice(0, 4)
/*       const replace = slice.replace(/\./g, "") */
      toMinutes[i][1] = parseFloat(slice)
    }
    return [["Atividades", "Minutos"], ...toMinutes]
  }


  /* eslint-disable */
  useEffect(() => {
    if (activities) {
      let query = activities.filter((item) =>
        dayjs(item.date).isBetween(firstDate, secondDate, null, "[]")
      );
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
      let WithMilliseconds = query
      setPerformance(query);
      setChartData(loadData(WithMilliseconds))
    }
  }, [firstDate, secondDate]);

  useEffect(() => {
    if (activities) {
      let query = activities.filter((item) =>
        dayjs(item.date).isBetween(
          firstComparationDate,
          secondComparationDate,
          null,
          "[]"
        )
      );
      query.total = 0;
      for (let i = 0; i < query.length; i++) {
        let started = dayjs(
          `${dayjs().format("YYYY-MM-DD")} ${query[i].started}`
        );
        let finished = dayjs(
          `${dayjs().format("YYYY-MM-DD")} ${query[i].finished}`
        );
        let d = finished.diff(started, "milliseconds");
        query.total += d;
      }
      query.today = dayjs.duration(query.total).format("HH[ H ]:[ ]mm[ M]");
      setComparation(query);
    }
  }, [firstComparationDate, secondComparationDate]);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (performance.total < comparation.total) {
      const subt = `${dayjs
        .duration(comparation.total - performance.total)
        .asMinutes()}`;
      const slice = subt.slice(0, 4);
      setDifference(`-${slice}m`);
    } else {
      const subt = `${dayjs
        .duration(performance.total - comparation.total)
        .asMinutes()}`;
      const slice = subt.slice(0, 4);
      setDifference(`+${slice}m`);
    }
  }, [performance, comparation]);

  /* eslint-enable */

  return (
    <>
      <div className="relative w-full max-w-[800px] min-height flex flex-col justify-center items-center overflow-scroll">
        <div className="w-full h-full">
          <div className="w-full h-full flex-col justify-center items-center">
{/*             <Banner /> */}
            <div className="w-full h-auto flex justify-center items-center">
              <div className="relative w-[500px] h-[275px] sm:h-[200px] pl-3 flex flex-row justify-center items-center overflow-hidden mt-10">
                <div className="w-full absolute flex justify-center items-center">
                  <img
                    src={userImage ? userImage : ProfilePNG}
                    alt=""
                    className="rounded-full w-16 cursor-pointer z-10 border border-white border-2"
                  />
                </div>
                <Chart chartType="PieChart" data={chartData} options={options} />
              </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
              <button className="mt-[-2rem] sm:mt-[-1rem] border border-white rounded-full px-5 p-1 text-base text-white">
                PERFORMANCE CONTROL
              </button>
            </div>
            <div className="flex flex-row mb-5 mt-2 justify-center items-center">
              <p>0</p>
              <RiVipCrownFill className="ml-2" />
              <img src={Logo} alt="" className="w-6 mx-8" />
              <RiFireFill className="mr-2" />
              <p>0</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <p className="text-xs text-white mx-6">{performanceDateUI}{secondPerformanceDateUI ? ` - ${secondPerformanceDateUI}` : null}</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <p
                className="text-5xl font-bold text-white  mt-1 mb-2 cursor-pointer"
                onClick={() => {
                  setDisplayInsertCustomDateModal(true);
                }}
              >
                {performance ? performance.today : "00 H 00 M"}
              </p>
            </div>
            <p className="text-xs text-center">
              {comparationDateUI}{secondComparationDateUI ? ` - ${secondComparationDateUI}` : null}
            </p>
            <p className="text-xs text-center mt-1 mb-40">
              {difference && difference} 
            </p>
          </div> 
        </div>
        {displayInsertCustomDateModal && (
          <div className="absolute w-auto h-auto bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 backdrop-blur-sm text-black text-xl flex flex-col justify-center items-start p-8">
            <p className="mb-5 font-bold">Data de Referência</p>
            <div className="w-full flex flex-row justify-between">
              <input
                type="date"
                className="w-2/5"
                value={firstDate}
                onChange={(e) => {
                  setFirstDate(e.target.value);
                  setPerformanceDateUI(
                    dayjs(e.target.value).format("DD[ / ]MM[ / ]YYYY")
                  );
                }}
              />
              <input
                type="date"
                className="w-2/5"
                value={secondDate}
                min={firstDate}
                onChange={(e) => {
                  setSecondDate(e.target.value);
                  dayjs(e.target.value).format("DD[ / ]MM[ / ]YYYY");
                  setSecondPerformanceDateUI(
                    dayjs(e.target.value).format("DD[ / ]MM[ / ]YYYY")
                  );
                }}
              />
            </div>
            <p className="mb-5 mt-16 font-bold">Data de Comparação</p>
            <div className="w-full flex flex-row justify-between">
              <input
                type="date"
                name=""
                id=""
                className="w-2/5 "
                value={firstComparationDate}
                onChange={(e) => {
                  setFirstComparationDate(e.target.value);
                  setComparationDateUI(
                    dayjs(e.target.value).format("DD[ / ]MM[ / ]YYYY")
                  );
                }}
              />
              <input
                type="date"
                name=""
                id=""
                className="w-2/5"
                value={secondComparationDate}
                min={firstComparationDate}
                onChange={(e) => {
                  setSecondComparationDate(e.target.value);
                  setSecondComparationDateUI(
                    dayjs(e.target.value).format("DD[ / ]MM[ / ]YYYY")
                  );
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                className="mt-8 rounded-full bg-black text-white py-2 px-5 text-sm"
                onClick={() => {
                  setDisplayInsertCustomDateModal(false);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Performance;

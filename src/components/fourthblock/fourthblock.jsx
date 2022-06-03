import React, { useState, useEffect, useRef } from "react";
import RoadmapBox from "./roadmapbox";
import Wheel from "./scrollwheel";

export default function FourthBlock(props) {
  const margin = useRef(0);
  const [roadmapData,setRoadmapData] = useState(["Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac",
  "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac",
"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac",
"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac"])
  const [top, setTop] = useState({});

  function handleScroll(e) {
    const y = window.pageYOffset;
    const x = window.innerWidth / 2;

    margin.current = x;
    console.log(x + " " + y);
    setTop({ x: x, y: y });

  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.removeEventListener("scroll", () => {});
  }, [margin.current]);

  return (
    <div className="fourth-block">
      <div className="fourth-block-inner">
        <div className="line">
          <Wheel y={1800}/>
          <Wheel y={2000}/>
          <Wheel y={2300}/>
          <Wheel y={2500}/>
        </div>
        <div className="roadmap-box-wrapper">
            {roadmapData.map(item => {
                return <RoadmapBox content={item}/>
            })}
        </div>
        
      </div>
    </div>
  );
}

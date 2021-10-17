import React, { useState, useEffect } from "react";
import "./journey.css";
import "react-vertical-timeline-component/style.min.css";
import elements from "./Elements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Journey = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [big, setBig] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (size > 1600) {
      setBig(true);
    } else {
      setBig(false);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <div className="Journey-page">
        <div className="heading">
          <h1 className="title">Journey</h1>
        </div>
        {!big && (
          <VerticalTimeline layout="1-column-left" className="journey-timeline">
            {elements.map((element) => {
              return (
                <VerticalTimelineElement
                  className="journey-content-main"
                  contentStyle={{ background: "#000", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "0px",
                  }}
                  iconClassName="journey-icon"
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                >
                  <div className="journey-content">
                    <div className="text-content">
                      <h3 className="vertical-timeline-element-title title">
                        {element.title}
                      </h3>
                    </div>

                    <p id="description">{element.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
        {big && (
          <VerticalTimeline layout="2-columns">
            {elements.map((element) => {
              return (
                <VerticalTimelineElement
                  className="journey-content-main"
                  contentStyle={{ background: "#000", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "0px",
                  }}
                  iconStyle={{ background: "#2A0944", color: "#fff" }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                >
                  <div className="journey-content">
                    <div className="text-content">
                      <h3 className="vertical-timeline-element-title title">
                        {element.title}
                      </h3>
                    </div>

                    <p id="description">{element.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default Journey;

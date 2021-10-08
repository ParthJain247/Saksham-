import React from "react";
import "./journey.css";
import "react-vertical-timeline-component/style.min.css";
import elements from "./Elements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Journey = () => {
  return (
    <>
      <div className="Journey-page">
        <div className="heading">
          <h1 className="title">JOURNEY</h1>
        </div>
        <VerticalTimeline>
          {elements.map((element) => {
            return (
              <VerticalTimelineElement
                className="journey-timeline"
                contentStyle={{ background: "#ff6347", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid #ff6347 ",
                }}
                iconStyle={{ background: "yellow", color: "#fff" }}
                key={element.id}
                date={element.date}
                dateClassName="date"
              >
                <div className="journey-content">
                  <div className="text-content">
                    <img src={element.icon} alt="icon" className="image"></img>

                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                  </div>

                  <p id="description">{element.description}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Journey;

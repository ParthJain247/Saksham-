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
          <h1 className="title">Journey</h1>
        </div>
        <VerticalTimeline layout="1-column-left" className="journey-timeline">
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
      </div>
    </>
  );
};

export default Journey;

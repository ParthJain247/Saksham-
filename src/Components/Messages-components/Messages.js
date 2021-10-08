import React from "react";
import "./messages.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Messages = (props) => {
  const { imageUrl, content, user } = props;
  return (
    <>
      <div className="container-messages">
        <div className="item-messages">
          <div
            className="item-pic"
            style={{
              backgroundImage: `url(${user})`,
            }}
          ></div>
          <div
            className="bg-picture"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="msg">
            <div className="content">{content}</div>
            <div className="buttons">
              <button className="btn">FOLLOW</button>
              <button className="btn">MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;

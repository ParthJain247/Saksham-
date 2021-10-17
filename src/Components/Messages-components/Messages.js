import React from "react";
import "./messages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

const Messages = (props) => {
  const { imageUrl, content, user } = props;
  return (
    <>
      <Container className="msg-container">
        <div className="msg-text">
          <div className="msg-header">hye</div>
          <div className="msg-context">{content}</div>
        </div>
        <div
          className="msg-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderTopRightRadius: "240px",
          }}
        >
          <div className="msg-buttons">
            <Button className=" msg-follow">Follow</Button>
            <Button className=" msg-more">More Info</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Messages;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Modal, Container, Button } from "react-bootstrap";
import "./followSocials.css";
const FollowSocials = (props) => {
  return (
    <>
      <Container fluid>
        <Modal
          {...props}
          className="socialsCard"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="socialHeader" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Follow Us!{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="socialBody">
            <Row xs={4} className="Socialrow">
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.instagram.com/saksham_a_helping_hand/?utm_medium=copy_link"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="5x"
                    style={{
                      width: "100px",
                      height: "100px",
                      color: "white",
                      borderRadius: "1rem",
                      background:
                        "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                    }}
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.facebook.com/Our.Saksham/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="5x"
                    style={{ width: "100px", color: "#4267b3" }}
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.linkedin.com/company/74990312/admin/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="5x"
                    style={{
                      color: "#215492",
                      width: "100px",
                    }}
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://twitter.com/sakshamhand"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="5x"
                    style={{ color: "#1da1f2", width: "100px" }}
                  />
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default FollowSocials;

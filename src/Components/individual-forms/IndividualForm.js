import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Form, Button } from "react-bootstrap";
// import indiLayout from "./indi.png";
const IndividualForm = () => {
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isNotDigits, setIsNotDigits] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foodDonationList, setFoodDonationList] = useState([]);
  const [foodDonationForm, setFoodDonationForm] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
  });
  const showTextArea = (e) => {
    let value = e.target.value;
    if (foodDonationList.includes(value)) {
      console.log("value");
    } else {
      setFoodDonationList([...foodDonationList, value]);
    }
  };

  const handleFoodForm = (e) => {
    if (
      !foodDonationForm.fName ||
      !foodDonationForm.lName ||
      !foodDonationForm.phoneNumber ||
      !foodDonationList.length
    ) {
      setIsError(true);
    } else {
      setIsError(false);
      if (
        foodDonationForm.phoneNumber.length < 10 ||
        foodDonationForm.phoneNumber.length > 10
      ) {
        setIsIncorrect(true);
      } else {
        setIsIncorrect(false);
        if (!/^\d+$/.test(foodDonationForm.phoneNumber)) {
          setIsNotDigits(true);
        } else {
          setIsNotDigits(false);
        }
      }
    }
  };

  const showDonationType = () => {
    const donationType = document.getElementsByClassName(
      "individual-donation-button"
    );
    const foodSub = document.getElementsByClassName("food-submenu");
    const eduSub = document.getElementsByClassName("edu-submenu");
    const followSub = document.getElementsByClassName("follow-submenu");
    for (let i = 0; i < foodSub.length; i++) {
      if (foodSub[i].style.display === "block") {
        foodSub[i].style.display = "none";
      }
      foodSub[i].style.display = "block";
      foodSub[i].classList.add("food-slide-out");
    }

    for (let i = 0; i < eduSub.length; i++) {
      if (foodSub[i].style.display === "block") {
        eduSub[i].style.display = "none";
      }
      eduSub[i].style.display = "block";
      eduSub[i].classList.add("edu-slide-out");
    }

    for (let i = 0; i < followSub.length; i++) {
      if (followSub[i].style.display === "block") {
        followSub[i].style.display = "none";
      }
      followSub[i].style.display = "block";
      followSub[i].classList.add("follow-slide-out");
    }
    for (let i = 0; i < donationType.length; i++) {
      donationType[i].style.display = "block";
      donationType[i].classList.toggle("individual-slide-out");
      donationType[i].classList.toggle("individual-slide-in");
    }
  };

  const foodSubmenu = () => {
    const foodSub = document.getElementsByClassName("food-submenu");

    for (let i = 0; i < foodSub.length; i++) {
      if (foodSub[i].style.display === "block") {
        foodSub[i].style.display = "none";
      } else {
        foodSub[i].style.display = "block";
      }
      foodSub[i].style.display = "block";
      foodSub[i].classList.toggle("food-slide-out");
      foodSub[i].classList.toggle("food-slide-in");
    }
  };

  const eduSubmenu = () => {
    const eduSub = document.getElementsByClassName("edu-submenu");
    for (let i = 0; i < eduSub.length; i++) {
      if (eduSub[i].style.display === "block") {
        eduSub[i].style.display = "none";
      } else {
        eduSub[i].style.display = "block";
      }
      eduSub[i].style.display = "block";
      eduSub[i].classList.toggle("edu-slide-out");
      eduSub[i].classList.toggle("edu-slide-in");
    }
  };
  const followSubmenu = () => {
    const followSub = document.getElementsByClassName("follow-submenu");
    for (let i = 0; i < followSub.length; i++) {
      if (followSub[i].style.display === "block") {
        followSub[i].style.display = "none";
      } else {
        followSub[i].style.display = "block";
      }
      followSub[i].style.display = "block";
      followSub[i].classList.toggle("follow-slide-out");
      followSub[i].classList.toggle("follow-slide-in");
    }
  };
  return (
    <div className="individual-form-page">
      <div className="individual-intro">
        <h2>Individual's Donation</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          quasi doloribus delectus necessitatibus eum error. Labore earum quos
          aperiam velit expedita architecto, iure corporis praesentium excepturi
          voluptatem, consectetur corrupti illo.
        </p>
      </div>
      <div className="individual-form">
        <h1>Individual</h1>
        <div className="form">
          <Form>
            <Row xs={8} className="donationRow">
              <Form.Group className="basicInput">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="donationFields basicInputControl"
                  onChange={(e) => {
                    setFoodDonationForm({
                      ...foodDonationForm,
                      fName: e.target.value,
                    });
                  }}
                />
                <Form.Text id="errorField" muted>
                  {isError && !foodDonationForm.fName && "Field is Required"}
                </Form.Text>
              </Form.Group>
            </Row>
            <Row xs="lg" className="donationRow">
              <Form.Group className="basicInput">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="donationFields basicInputControl"
                  onChange={(e) => {
                    setFoodDonationForm({
                      ...foodDonationForm,
                      lName: e.target.value,
                    });
                  }}
                />
                <Form.Text id="errorFieldName" muted>
                  {isError && !foodDonationForm.lName && "Field is Required"}
                </Form.Text>
              </Form.Group>
            </Row>
            <Row xs="lg" className="donationRow">
              <Form.Group className="basicInput">
                <Form.Control
                  type="text"
                  placeholder="Contact"
                  className="donationFields basicInputControl"
                  onChange={(e) => {
                    setFoodDonationForm({
                      ...foodDonationForm,
                      phoneNumber: e.target.value,
                    });
                  }}
                />
                <Form.Text id="errorField" muted>
                  {isError &&
                    !foodDonationForm.phoneNumber &&
                    "Field is Required"}
                  {isIncorrect && "Phone Number must be 10 digits"}
                  {isNotDigits && "Phone Number must be digits only"}
                </Form.Text>
              </Form.Group>
            </Row>
            <h3 className="individual-heading">Donation To Give</h3>
            <div className="donationRow donationLinks">
              <div className="main-donations">
                <Button
                  onClick={showDonationType}
                  className="donationFields individual-collection-button"
                >
                  Donate
                </Button>
                <Button
                  onClick={foodSubmenu}
                  className="individual-donation-button food-donation donationFields individual-slide-out donate-slide-opp"
                >
                  Food
                </Button>

                <Button
                  onClick={eduSubmenu}
                  className="individual-donation-button edu-donation donationFields individual-slide-out donate-slide-opp"
                >
                  Education
                </Button>

                <Button
                  onClick={followSubmenu}
                  className="individual-donation-button follow-donation donationFields individual-slide-out"
                >
                  Follow
                </Button>
                <Button
                  className="edu-submenu electronics donationFields edu-slide-out"
                  value="Electronics"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Electronics
                </Button>
                <Button
                  className="edu-submenu donationFields edu-slide-out"
                  value="Books"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Books
                </Button>
                <Button
                  className="edu-submenu donationFields edu-slide-out"
                  value="Stationary"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Stationary
                </Button>
                <Button
                  className="food-submenu money donationFields food-slide-out"
                  value="Money"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Money
                </Button>
                <Button
                  className="food-submenu donationFields food-slide-out"
                  value="Food"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Food
                </Button>
                <Button
                  className="food-submenu donationFields food-slide-out"
                  value="Clothes"
                  onClick={(e) => {
                    showTextArea(e);
                  }}
                >
                  Clothes
                </Button>
                <Button
                  className="follow-submenu insta donationFields follow-slide-out"
                  target="_blank"
                  href="https://www.instagram.com/saksham_a_helping_hand/?utm_medium=copy_link"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{
                      color: "white",
                      borderRadius: "1rem",
                      background:
                        "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                    }}
                  />
                </Button>
                <Button
                  className="follow-submenu donationFields follow-slide-out"
                  target="_blank"
                  href="https://www.facebook.com/Our.Saksham/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "#4267b3" }}
                  />
                </Button>
                <Button
                  className="follow-submenu donationFields follow-slide-out"
                  target="_blank"
                  href="https://www.linkedin.com/company/74990312/admin/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    style={{
                      color: "#215492",
                    }}
                  />
                </Button>
                <Button
                  className="follow-submenu donationFields follow-slide-out"
                  target="_blank"
                  href="https://twitter.com/sakshamhand"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ color: "#1da1f2" }}
                  />
                </Button>
              </div>
              <div className="donation-list">
                <Form.Control
                  className="donationFields"
                  as="textarea"
                  value={foodDonationList.join("\n")}
                  style={{
                    height: "170px",
                    width: "200px",
                    padding: "1em",
                  }}
                  readOnly
                />
                <Form.Text id="errorField" muted>
                  {isError && !foodDonationList.length && "Field is Required"}
                </Form.Text>
              </div>
            </div>
          </Form>
          <Button
            onClick={(e) => {
              handleFoodForm(e);
            }}
            className="donationFields donation-form-button"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndividualForm;

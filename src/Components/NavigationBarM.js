import "./MobileNavigationBarM.css";
import { useEffect } from "react";
import menu from "./static/images/menu.png";
import alt from "./static/images/menu-alt.png";
import logo from "./static/images/navbar-logo.png";
import { Link } from "react-router-dom";
export default function App() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = document.querySelector(".mobile-bar");
      console.log(e);
    });
  }, []);
  function handleClick(e) {
    for (let i = 0; i < 4; i++) {
      const all = document.querySelectorAll(".m-dropdown-content");
      all[i].classList.add("hidden");
    }
    const condition = e.target.innerHTML;
    if (condition === "About Us") {
      const target = document.getElementById("a");
      target.classList.remove("hidden");
    } else if (condition === "Works") {
      const target = document.getElementById("b");
      target.classList.remove("hidden");
    } else if (condition === "Campaigns") {
      const target = document.getElementById("c");
      target.classList.remove("hidden");
    } else if (condition === "Join Up") {
      const target = document.getElementById("d");
      target.classList.remove("hidden");
    } else {
    }
  }
  function click() {
    const target = document.querySelector(".mobile-bar");
    const menu = document.querySelector(".menuu");
    const menuu = document.querySelector(".menuuu");
    if (target.classList[1] === "hidden") {
      target.classList.remove("hidden");
      menu.classList.add("hidden");
      menuu.classList.remove("hidden");
    } else {
      target.classList.add("hidden");
      menu.classList.remove("hidden");
      menuu.classList.add("hidden");
    }
  }
  function sideClick(e) {
    const targets = document.querySelectorAll(".some");
    for (let i = 0; i < 13; i++) {
      targets[i].classList.remove("change");
    }
    e.target.classList.add("change");
  }
  return (
    <div>
      <img onClick={click} className="menuu" src={menu} alt="menu" />
      <img onClick={click} className="menuuu hidden" src={alt} alt="cross" />
      <div className="mobile-bar hidden">
        <div className="m-navbar">
          <div className="m-content">
            <img className="nav-up" src={logo} alt="Logo" />
            <div className="up-content">
              <div className="m-bar">
                <Link style={{ textDecoration: "none" }} to="/">
                  <h6 onClick={handleClick}>Home</h6>
                </Link>
                <div onClick={handleClick} className="m-dropdown ">
                  <Link style={{ textDecoration: "none" }} to="/WhySaksham">
                    <h6 href="">About Us</h6>
                  </Link>
                </div>

                <div onClick={handleClick} className="m-dropdown  ">
                  <Link style={{ textDecoration: "none" }} to="/Hunger">
                    <h6 href="">Works</h6>
                  </Link>
                </div>
                <div onClick={handleClick} className="m-dropdown ">
                  <Link style={{ textDecoration: "none" }} to="/Campaign1">
                    <h6 href="">Campaigns</h6>
                  </Link>
                </div>

                <h6 onClick={handleClick} href="">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Happenings"
                  >
                    Happenings
                  </Link>
                </h6>

                <h6 onClick={handleClick} href="">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Gallary"
                  >
                    Gallery
                  </Link>
                </h6>

                <div onClick={handleClick} className="m-dropdown ">
                  <Link style={{ textDecoration: "none" }} to="/Individual">
                    <h6 href="">Join Up</h6>
                  </Link>
                </div>

                <h6 onClick={handleClick} href="">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="side-bar ">
          <div id="a" className="m-dropdown-content  hidden">
            <Link
              style={{
                textDecoration: "none",
                width: "35%",
                marginTop: "-0.75%",
                marginLeft: "2%",
              }}
              to="/WhySaksham"
            >
              <h6 onClick={sideClick} className="some" href="">
                Why Saksham
              </h6>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Journey">
              <h6 onClick={sideClick} className="some" href="">
                Journey
              </h6>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Messages">
              <h6 onClick={sideClick} className="some" href="">
                Messages
              </h6>
            </Link>
            <Link
              style={{ textDecoration: "none", marginTop: "0.5%" }}
              to="/Team"
            >
              <h6 onClick={sideClick} className="some" href="">
                Team
              </h6>
            </Link>
          </div>
          <div id="b" className="m-dropdown-content  hidden ">
            <Link style={{ textDecoration: "none" }} to="/Hunger">
              <h6 onClick={sideClick} className="some" href="">
                Hunger
              </h6>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Poverty">
              <h6 onClick={sideClick} className="some" href="">
                Poverty
              </h6>
            </Link>
            <Link
              style={{ textDecoration: "none", display: "block" }}
              to="/Health"
            >
              <h6 onClick={sideClick} className="some" href="">
                Health
              </h6>
            </Link>
            <Link
              style={{ textDecoration: "none", marginTop: "-0.5%" }}
              to="/Education"
            >
              <h6 onClick={sideClick} className="some" href="">
                Education
              </h6>
            </Link>
          </div>
          <div id="c" className="m-dropdown-content hidden ">
            <Link
              style={{ textDecoration: "none", width: "30%" }}
              to="/Campaign1"
            >
              <h6 onClick={sideClick} className="some" href="">
                Campaign 1
              </h6>
            </Link>
            <Link
              style={{ textDecoration: "none", width: "30%" }}
              to="/Campaign2"
            >
              <h6 onClick={sideClick} className="some" href="">
                Campaign 2
              </h6>
            </Link>
            <Link
              style={{ textDecoration: "none", width: "30%" }}
              to="/Campaign3"
            >
              <h6 onClick={sideClick} className="some" href="">
                Campaign 3
              </h6>
            </Link>
          </div>
          <div id="d" className="m-dropdown-content hidden ">
            <Link style={{ textDecoration: "none" }} to="/Individual">
              <h6 onClick={sideClick} className="some" href="">
                Individual
              </h6>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/School">
              <h6 onClick={sideClick} className="some" href="">
                School
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

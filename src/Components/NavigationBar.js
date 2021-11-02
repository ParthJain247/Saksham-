import React from "react";
import "./NavigationBar.css";
import menu from "./static/images/menu.png";
import { Link } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
// import { FaUserAlt } from "react-icons/fa";
// import { SiHackhands } from "react-icons/si";
// import { SiCampaignmonitor } from "react-icons/si";
// import { RiTeamFill } from "react-icons/ri";
// import { RiContactsFill } from "react-icons/ri";
// import { BiNews } from "react-icons/bi";
// import { BsCardImage } from "react-icons/bs";
// import Sidebar from "./Nav/Nav";
import { useHistory } from "react-router-dom";
import logo from "./static/images/navbar-logo.png";

function NavigationBar() {
  const history = useHistory();
  function onClick(e, item) {
    history.push("/" + item.name);
  }

  const items = [
    {
      name: "",
      label: "Home",
      //  Icon: AiFillHome,
      onClick,
    },
    "divider",
    {
      name: "About-us",
      label: "About Us",
      // Icon: FaUserAlt,
      items: [
        { name: "WhySaksham", label: "Why Saksham", onClick },
        { name: "Journey", label: "Journey", onClick },
        { name: "Messages", label: "Messages", onClick },
      ],
    },
    "divider",
    {
      name: "Our-works",
      label: "Works",
      //   Icon: SiHackhands,
      items: [
        { name: "Hunger", label: "Hunger", onClick },
        { name: "Poverty", label: "Poverty", onClick },
        { name: "Health", label: "Health", onClick },
        { name: "Education", label: "Education", onClick },
        { name: "WomenEmpowerment", label: "Women Empowerment", onClick },
      ],
    },
    "divider",
    {
      name: "Campaigns",
      label: "Campaigns",
      //   Icon: SiCampaignmonitor,
      items: [
        { name: "Campaign1", label: "Campaign1", onClick },
        { name: "Campaign2", label: "Campaign2", onClick },
        { name: "Campaign3", label: "Campaign3", onClick },
      ],
    },
    "divider",
    {
      name: "Happenings",
      label: "Happenings",
      //  Icon: BiNews,
      onClick,
    },
    "divider",
    {
      name: "Gallary",
      label: "Gallery",
      //  Icon: BsCardImage,
      onClick,
    },
    "divider",
    {
      name: "Join-us",
      label: "Join Up",
      //   Icon: RiTeamFill,
      items: [
        { name: "Individual", label: "Individual", onClick },
        { name: "Corporate", label: "Corporate Partnership", onClick },
        { name: "School", label: "School", onClick },
      ],
    },
    "divider",
    {
      name: "Contact",
      label: "Contact Us",
      //  Icon: RiContactsFill,
      onClick,
    },
    "divider",
  ];

  return (
    <div className="NavigationBar">
      <div className="menu">
        <img src={menu} />
      </div>
      <div className="mobile-content">
        <img className="nav-up" src={logo} alt="Logo" />
        <div className="dropup-content">
          <div class="navbar">
            <Link style={{ textDecoration: "none" }} to="/">
              <h6>Home</h6>
            </Link>
            <div class="dropdown">
              <Link style={{ textDecoration: "none" }} to="/WhySaksham">
                <h6 href="">About Us</h6>
              </Link>
              <div class="dropdown-content a">
                <Link to="/WhySaksham">
                  <h6 href="">Why Saksham</h6>
                </Link>
                {/* <br /> */}
                <br />
                <Link to="/Journey">
                  <h6 href="">Journey</h6>
                </Link>
                <br />
                {/* <br /> */}
                <Link to="/Messages">
                  <h6 href="">Messages</h6>
                </Link>
                <br />
                <Link to="/Team">
                  <h6 href="">Team</h6>
                </Link>
              </div>
            </div>

            <div class="dropdown">
              <Link style={{ textDecoration: "none" }} to="/Hunger">
                <h6 href="">Works</h6>
              </Link>
              <div class="dropdown-content b">
                <Link to="/Hunger">
                  <h6 href="">Hunger</h6>
                </Link>
                <br />
                {/* <br /> */}
                <Link to="/Poverty">
                  <h6 href="">Poverty</h6>
                </Link>
                <br />
                {/* <br /> */}
                <Link to="/Health">
                  <h6 href="">Health</h6>
                </Link>
                <br />
                {/* <br /> */}
                <Link to="/Education">
                  <h6 href="">Education</h6>
                </Link>
              </div>
            </div>
            <div class="dropdown">
              <Link style={{ textDecoration: "none" }} to="/Campaign1">
                <h6 href="">Campaigns</h6>
              </Link>
              <div class="dropdown-content c">
                <Link to="/Campaign1">
                  <h6 href="">Campaign 1</h6>
                </Link>
                <br />
                <Link to="/Campaign2">
                  <h6 href="">Campaign 2</h6>
                </Link>
                <br />
                <Link to="/Campaign3">
                  <h6 href="">Campaign 3</h6>
                </Link>
              </div>
            </div>
            <Link style={{ textDecoration: "none" }} to="/Happenings">
              <h6 href="">Happenings</h6>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Gallary">
              <h6 href="">Gallery</h6>
            </Link>
            <div class="dropdown">
              <Link style={{ textDecoration: "none" }} to="/Individual">
                <h6 href="">Join Up</h6>
              </Link>
              <div class="dropdown-content d">
                <Link to="/Individual">
                  <h6 href="">Individual</h6>
                </Link>
                <br />
                {/* <br /> */}
                {/* <h6 href="">Corporate Partnership</h6> */}
                {/* <br /> */}
                {/* <br /> */}
                <Link to="/School">
                  <h6 href="">School</h6>
                </Link>
              </div>
            </div>
            <Link style={{ textDecoration: "none" }} to="/Contact">
              <h6 href="">Contact Us</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
    //  {/* <div className="list-links">
    //     <Sidebar items={items} />
    //   </div> */}
  );
}

export default NavigationBar;

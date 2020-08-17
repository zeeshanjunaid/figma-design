import React, { useState } from "react";
import {
  HeaderArea,
  HeaderMenuLeft,
  HeaderMenuCenter,
  HeaderMenuRight,
} from "../styles/headerStyle";
import uuid from "react-uuid";
import {
  MenuIcon,
  FlyButton,
  Chevron,
  Pen,
  Toolbar,
  Hand,
  Location,
  Play,
  ArrowRight,
} from "./icons";

const menuRightData = [
  {
    id: 11,
    icon: <Play />,
    hasDropDown: false,
    dropDownContent: "",
  },
  {
    id: 12,
    icon: "22%",
    hasDropDown: true,
    dropDownContent: "content",
  },
];
const Header = () => {
  const dropDownContent = (
    <div className="dropdown-content">
      <p className="btf">Back to Files</p>
      <div className="input-container">
        <input type="text" placeholder="search" />
      </div>
      <ul>
        <li>
          File
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Edit
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          View
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Object
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Vector
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Text
          <span>
            <ArrowRight />
          </span>
        </li>
      </ul>
      <ul>
        <li>
          Plugins
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Integrations
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Preferences
          <span>
            <ArrowRight />
          </span>
        </li>
        <li>
          Libraries
          <span>
            <ArrowRight />
          </span>
        </li>
      </ul>
      <ul>
        <li>Get Desktop App</li>
        <li>
          Help and Account
          <span>
            <ArrowRight />
          </span>
        </li>
      </ul>
    </div>
  );
  const [active, setActive] = useState("");
  const handleClick = (item) => {
    if (active === item.id) {
      setActive("");
    } else {
      setActive(item.id);
    }
  };
  const menuLeftData = [
    {
      id: 1,
      icon: <MenuIcon />,
      hasDropDown: false,
      dropDownContent: dropDownContent,
    },
    {
      id: 2,
      icon: <FlyButton />,
      hasDropDown: true,
      dropDownContent: "content",
    },
    {
      id: 3,
      icon: <Pen />,
      hasDropDown: true,
      dropDownContent: "content",
    },
    {
      id: 4,
      icon: <Toolbar />,
      hasDropDown: false,
      dropDownContent: "",
    },
    {
      id: 5,
      icon: <Location />,
      hasDropDown: false,
      dropDownContent: "",
    },
    {
      id: 6,
      icon: <Hand />,
      hasDropDown: false,
      dropDownContent: "",
    },
  ];
  return (
    <HeaderArea>
      <HeaderMenuLeft>
        {menuLeftData.map((item) => (
          <li
            key={uuid()}
            className={
              item.id === active &&
              "activeClass " +
                (active === item.id &&
                  item.dropDownContent !== "" &&
                  "hasDropDown")
            }
            onClick={() => handleClick(item)}
          >
            {item.icon}
            {item.hasDropDown && (
              <span className="move-icon">
                <Chevron />
              </span>
            )}
            {active === item.id && item.dropDownContent !== "" && (
              <div className="dropdown">{item.dropDownContent}</div>
            )}
          </li>
        ))}
      </HeaderMenuLeft>
      <HeaderMenuCenter>
        <a href="#">Drafts</a>
        <span className="dash-mark">/</span>
        <a href="#">
          Untitled
          <span>
            <Chevron />
          </span>
        </a>
      </HeaderMenuCenter>
      <HeaderMenuRight>
        <a className="dpIcon" href="#">
          Z
        </a>
        <button>Share</button>
        {menuRightData.map((item) => (
          <li
            key={uuid()}
            className={
              item.id === active &&
              "activeClass " +
                (active === item.id &&
                  item.dropDownContent !== "" &&
                  "hasDropDown")
            }
            onClick={() => handleClick(item)}
          >
            {item.icon}
            {item.hasDropDown && (
              <span>
                <Chevron />
              </span>
            )}
            {active === item.id && item.dropDownContent !== "" && (
              <div className="dropdown">{item.dropDownContent}</div>
            )}
          </li>
        ))}
      </HeaderMenuRight>
    </HeaderArea>
  );
};

export default Header;

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
} from "./icons";
const menuLeftData = [
  {
    id: 1,
    icon: <MenuIcon />,
    hasDropDown: false,
    dropDownContent: "",
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
  const [active, setActive] = useState("");
  const handleClick = (item) => {
    if (active === item.id) {
      setActive("");
    } else {
      setActive(item.id);
    }
  };
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
              <span>
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
        <a className="dpIcon" href="#">Z</a>
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

import React, { useState } from "react";
import {
  HeaderArea,
  HeaderMenuLeft,
  HeaderMenuCenter,
  HeaderMenuRight,
} from "../styles/headerStyle";
import uuid from "react-uuid";
import { MenuIcon, FlyButton, Chevron, Pen } from "./icons";
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
];
const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = (item) => {
    if (active === item.id) {
      setActive(false);
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
              <div class="dropdown">{item.dropDownContent}</div>
            )}
          </li>
        ))}
      </HeaderMenuLeft>
      <HeaderMenuCenter>header center</HeaderMenuCenter>
      <HeaderMenuRight>header right</HeaderMenuRight>
    </HeaderArea>
  );
};

export default Header;

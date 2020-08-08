import React, { useState } from "react";
import {
  HeaderTop,
  LeftBarHeader,
  LeftBarContent,
} from "../styles/leftbarStyles";
import { LeftSideBar } from "../styles/globalStyles";
import {
  Chevron,
  Plus,
  Check,
  Vector,
  Rectangle,
  Visible,
  Unvisible,
  Lock,
  Unlock,
} from "./icons";

const dataContent = [
  {
    id: 1,
    name: "Vector 1",
    icon: <Vector />,
  },
  {
    id: 2,
    name: "Rectangle 1",
    icon: <Rectangle />,
  },
];

const LeftBar = () => {
  const [leftbarHeader, setLeftbarHeader] = useState(true);
  const [visible, setVisible] = useState(true);
  const [lock, setLock] = useState(false);
  return (
    <LeftSideBar>
      <HeaderTop>
        <a>Layers</a>
        <a>Assets</a>
        <a
          onClick={() => {
            setLeftbarHeader(!leftbarHeader);
          }}
        >
          Page 1
          <span className={leftbarHeader ? "rotateIcon" : null}>
            <Chevron />
          </span>
        </a>
      </HeaderTop>
      {leftbarHeader && (
        <LeftBarHeader>
          <li className="top">
            Pages
            <span>
              <Plus />
            </span>
          </li>
          <li className="bottom">
            <span>
              <Check />
            </span>
            Page 1
          </li>
        </LeftBarHeader>
      )}
      <LeftBarContent>
        {dataContent.map((data, index) => (
          <li key={index} className={!visible ? "unvisibleItem" : null}>
            <span className="icon-left">{data.icon}</span>
            {data.name}
            <div className="right-icons">
              <span
                onClick={() => {
                  setLock(!lock);
                }}
              >
                {lock ? <Unlock /> : <Lock clasName="unlock" />}
              </span>
              <span
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? <Visible /> : <Unvisible clasName="unvisible" />}
              </span>
            </div>
          </li>
        ))}
      </LeftBarContent>
    </LeftSideBar>
  );
};

export default LeftBar;

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

const LeftBar = () => {
  const [leftbarHeader, setLeftbarHeader] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [lock1, setLock1] = useState(true);
  const [lock2, setLock2] = useState(true);

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
        <li className={!visible1 ? "unvisibleItem" : null}>
          <span className="icon-left">
            <Vector />
          </span>
          Vector 1
          <div className="right-icons">
            <span
              onClick={() => {
                setLock1(!lock1);
              }}
            >
              {lock1 ? <Unlock /> : <Lock clasName="unlock" />}
            </span>
            <span
              onClick={() => {
                setVisible1(!visible1);
              }}
            >
              {visible1 ? <Visible /> : <Unvisible clasName="unvisible" />}
            </span>
          </div>
        </li>
        <li className={!visible2 ? "unvisibleItem" : null}>
          <span className="icon-left">
            <Rectangle />
          </span>
          Rectangle 1
          <div className="right-icons">
            <span
              onClick={() => {
                setLock2(!lock2);
              }}
            >
              {lock2 ? <Unlock /> : <Lock clasName="unlock" />}
            </span>
            <span
              onClick={() => {
                setVisible2(!visible2);
              }}
            >
              {visible2 ? <Visible /> : <Unvisible clasName="unvisible" />}
            </span>
          </div>
        </li>
      </LeftBarContent>
    </LeftSideBar>
  );
};

export default LeftBar;

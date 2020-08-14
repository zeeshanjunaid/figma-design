import React, { useState } from "react";
import { HeaderTop, RightBarHeader } from "../styles/righttbarStyles";
import { RightSideBar } from "../styles/globalStyles";
import { Plus, Visible, Unvisible, Play } from "./icons";

const RightBar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <RightSideBar>
      <HeaderTop>
        <a>Design</a>
        <a>Prototype</a>
        <a>Code</a>
      </HeaderTop>
      <RightBarHeader>
        <li className="bg">
          Background
          <div className="inner">
            <div>
              <span></span>ESESES
            </div>
            <div>100%</div>
            <span
              className="eyeIcon"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible ? <Visible /> : <Unvisible clasName="unvisible" />}
            </span>
          </div>
        </li>
        <li className="top">
          Export
          <span>
            <Plus />
          </span>
        </li>
        <li className="pt">
          Running Your Prototype
          <div className="inner">
            <span>
              <Play />
            </span>
            <div>
              Use the play button in the toolbar to play your prototype. If
              there are no connections, the play button can be used to play a
              presentation of your frames.
            </div>
          </div>
        </li>
      </RightBarHeader>
    </RightSideBar>
  );
};

export default RightBar;

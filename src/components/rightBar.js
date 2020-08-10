import React, { useState } from "react";
import { HeaderTop, RightBarHeader } from "../styles/righttbarStyles";
import { RightSideBar } from "../styles/globalStyles";
import { Plus, Visible, Unvisible } from "./icons";

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
      </RightBarHeader>
    </RightSideBar>
  );
};

export default RightBar;

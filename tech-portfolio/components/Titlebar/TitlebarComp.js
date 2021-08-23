import React from "react";
import styled from "styled-components";
import TitleBarLeftTabs from "../Titlebar/TitleBarLeft";
import TitleBarTitle from "./TitleBarTitle";
import TitleBarWindowsButton from "./TitlebarWindowsButton";

const TitlebarComp = () => {
  return (
    <TitleBarMenu>
      <TitleBarLeftTabs />
      <TitleBarTitle />
      <TitleBarWindowsButton />
    </TitleBarMenu>
  );
};

export default TitlebarComp;

//styled components for the SIDEBARMENU.

const TitleBarMenu = styled.div`
  width: cal(100vw - 0.1rem);
  background: #3f3f3f;
  min-height: 1.875rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.85rem;
`;

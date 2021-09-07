import styled from "styled-components";
import { mediaQueries } from "../common/breakpoints";

const TitleBarTitle = () => {
  return (
    <TitleBarCenter>
      <TitleBarText>Visual Studio Code</TitleBarText>
    </TitleBarCenter>
  );
};

export default TitleBarTitle;

//styled-components for TITLEBARTITLE
const TitleBarCenter = styled.div`
  /* flex: 1; */
  text-align: center;
`;

const TitleBarText = styled.p`
  font-size: 0.8rem;

  ${mediaQueries("tablet")`
      font-size: 0.7rem;
  `}
`;

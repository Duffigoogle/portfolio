import Image from "next/image";
import styled from "styled-components";

const TitleBarLeftTabs = () => {
  return (
    <TitleBarLeft>
      <TitleLogo>
        <Image
          src="/vscode_icon.svg"
          alt="vs code icon"
          width={18}
          height={18}
        />
      </TitleLogo>
      <TitleTabs>
        <TitleTab>
          <TitleP>File</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Edit</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Selection</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>View</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Go</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Run</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Terminal</TitleP>
        </TitleTab>
        <TitleTab>
          <TitleP>Help</TitleP>
        </TitleTab>
      </TitleTabs>
    </TitleBarLeft>
  );
};

export default TitleBarLeftTabs;

const TitleBarLeft = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;

const TitleLogo = styled.div`
  margin-right: 0.38rem;
  padding-top: 0.3rem;
`;

const TitleTabs = styled.div`
  display: flex;
  cursor: pointer;
`;

const TitleTab = styled.div`
  /* background-color: #453434; */
  height: 30px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #999999;
  }
`;

const TitleP = styled.p`
  font-size: 0.82rem;
  margin: 0 0.45rem;
`;

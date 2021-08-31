import styled from "styled-components";

const ToolTipsComp = ({ tooltipstext, top, left }) => {
  return (
    <>
      <ToolTipSpan top={top} left={left} text={tooltipstext} />
    </>
  );
};

export default ToolTipsComp;

const ToolTipSpan = styled.span`
  color: transparent;
`;

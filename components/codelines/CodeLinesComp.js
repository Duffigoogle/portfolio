import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CalculateHeightContext } from "../../context/index";
import { mediaQueries } from "../common/breakpoints";

const CodeLinesComp = () => {
  const pageHeight = useContext(CalculateHeightContext);

  // const [codeLine, setCodeLine] = useState(pageHeight);

  // const pageHeightValue = pageHeight.pageHeight;
  const pageHeightValue = pageHeight.pageHeight;
  console.log(pageHeightValue);

  const pageHeightPx = pageHeightValue + "px";
  console.log(pageHeightPx);

  const gh = typeof pageHeightPx;
  console.log(gh);

  // const pageLineHeight = parseInt(pageHeightValue / 19.2, 10);
  const pageLineHeight = Math.round(pageHeightValue / 19.2) + 1;
  console.log(pageLineHeight);

  // const pageLineHeight = (pageHeightValue) => {
  //   Math.round(pageHeightValue / 19.2) + 2;
  // };
  // console.log(pageLineHeight);

  // rendered number range
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  const numbers = range(1, pageLineHeight);

  return (
    <>
      <CodeLinesContainer pageHeightValue={pageHeightValue}>
        <TabShowcaseUl>
          {numbers.map((number, index) => (
            // <li key={index}> {number} </li>
            <ListItem key={number.toString()} value={number}>
              {" "}
            </ListItem>
          ))}
        </TabShowcaseUl>
      </CodeLinesContainer>
    </>
  );
};

export default CodeLinesComp;

// ListItem(li) component
function ListItem(props) {
  return <li> {props.value} </li>;
}

const CodeLinesContainer = styled.aside`
  /* border: 2px solid purple; */
  background-color: #757575;
  min-width: 3.44rem;
  /* min-width: 3.44rem; */
  /* height: 100%; */
  height: ${({ pageHeightValue }) => pageHeightValue};

  ${mediaQueries("tabletMax")`
        min-width: 2.9rem;
  `}
  ${mediaQueries("mobileLXX")`
     min-width: 2.3rem;
  `}
  ${mediaQueries("mobileM")`
     min-width: 2rem;
  `}
`;

const TabShowcaseUl = styled.ul`
  text-align: center;
  color: #e0e0e0;

  li {
    padding: 0;
    margin: 0;
    line-height: 1.2rem;
    font-size: 0.7rem;

    ${mediaQueries("mobileM")`
      line-height: 1.2rem;
      font-size: 0.6rem;
    `}
  }
`;

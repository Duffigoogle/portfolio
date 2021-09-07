import styled from "styled-components";
import { useContext } from "react";
import { CalculateHeightContext } from "../../context/index";
import { mediaQueries } from "../common/breakpoints";

const CodeLinesComp = () => {
  const pageHeight = useContext(CalculateHeightContext);

  // const pageHeightValue = pageHeight.pageHeight;
  const pageHeightValue = pageHeight.pageHeight;
  console.log(pageHeightValue);

  // const pageLineHeight = parseInt(pageHeightValue / 19.2, 10);
  const pageLineHeight = Math.round(pageHeightValue / 19.2) + 2;
  console.log(pageLineHeight);

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  // const b = 29;
  const numbers = range(1, pageLineHeight);

  // const pageContainerHeight = calc((window.document.innerHeight) - 60px)
  // const pageHeight = parse.int(pageContainerHeight)

  return (
    <>
      <CodeLinesContainer>
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
  width: 3.44rem;
  min-width: 3.44rem;
  /* min-height: 55rem; */
  /* height: 100%; */
  height: ${({ pageHeightValue }) => pageHeightValue};

  ${mediaQueries("mobileM")`
     min-width: 1.8rem;
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
  }
`;

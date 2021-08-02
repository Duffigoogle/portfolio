import styled from "styled-components";

const CodeLinesComp = () => {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  const numbers = range(1, 40);

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
  min-height: 55rem;
  height: 100%;
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

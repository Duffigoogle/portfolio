import styled from 'styled-components';

const CodeLinesComp = () => {

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const numbers = range(1, 39);

    return (
        <>
            <CodeLinesContainer>
                    <TabShowcaseUl>
                        {numbers.map((number, index) => (
                        // <li key={index}> {number} </li>
                        <ListItem key={number.toString()} value={number}> </ListItem>
                        ))}
                    </TabShowcaseUl> 
            </CodeLinesContainer>
               
        </>
    )
}

export default CodeLinesComp;


// ListItem(li) component

function ListItem(props) {
    return (
      <li> {props.value}  </li>
    );
};





const CodeLinesContainer = styled.aside`
    /* border: 2px solid purple; */
    background-color: #757575;
    width: 3.44rem;
    /* height: 80.3vh; */
    height: 100%;
`

const TabShowcaseUl = styled.ul`
    text-align: center;
    color: #e0e0e0;

    li {
         padding: 0;
         margin: 0;
         line-height: 1.2rem;
    }
    
`


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
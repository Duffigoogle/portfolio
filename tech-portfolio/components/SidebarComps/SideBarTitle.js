import styled from 'styled-components';

const StyledTitle = styled.p`
    color: whitesmoke;
    font-size: 0.7rem;
    margin-left: 0.94rem;
    padding: 0.6rem 0.43rem;
`;

const StyledBox = styled.div`
    background-color: #616161;
`


const SideBarTitleComp = ({text}) => {
return (
    <StyledBox>
        <StyledTitle>{text}</StyledTitle>
    </StyledBox>
)
}

export default SideBarTitleComp;
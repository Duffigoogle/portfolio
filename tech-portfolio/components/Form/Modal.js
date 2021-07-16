import Icon from '../common/icons/icons';
import styled from 'styled-components';

const ModalComp = ({isModalPopUp}) => {

    // const [isModaiPopUp, setIsModalPopUp] = useState(false);

    // const toggleModal = () => {
    //     setIsModalPopUp(true)
    // }
    
    return (
        <StyledModal visibility={isModalPopUp ? false : undefined}>
            <StyledModalContent>
              <p> Duffigoogle (Github)</p>
              {/* ArrowRight */}
              <Icon name='ArrowRight' size={20} color='#fff' />
            </StyledModalContent>
            <StyledModalContent>
                <p>Turn on Settings Sync...</p> 
            </StyledModalContent>
        </StyledModal>
    )
}

export default ModalComp;


// styled components for AsideComp;

const StyledModal = styled.div`
    display: ${props => props.visibility ? 'none' : 'block'};
    position: fixed; 
    z-index: 5; 
    /* left: 5; */
    /* top: 0; */
    bottom: 0;
    right: 2;
    width: 15%; 
    height: 10%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
`

const StyledModalContent = styled.div`
    background-color: #fefefe;
    margin: 0 auto; 
    padding: 5px;
    border: 1px solid #888;
    width: 97%;

    p {
        font-size: 0.8rem;
    }
`
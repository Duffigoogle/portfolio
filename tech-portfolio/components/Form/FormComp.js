import {useState} from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
    border: 1px solid #5d5d5d; 
    padding: 0.45rem; 
    margin-bottom: 0.5rem;
    width: 100%; 
    outline: none;
`; 

const StyledForm = styled.form`
    width: 20vw;
    margin: 4rem auto;
    
    & ${StyledInput}:invalid {
    border-color: ${props => {
    	console.log(props.error)
    	return props.error ? "red" : "none"
    }};
  }

`;

const StyledLabel = styled.label`
    display: block;
    color: orange;
    padding-left: 0.25rem; 
`;

const StyledTextArea = styled.textarea`
    border: 1px solid #5d5d5d; 
    padding: 0.2rem; 
    width: 100%; 
    overflow: hidden;
    /* resize: none; */
    outline: none;
`; 

const StyledButton = styled.button`
    background: orange;
    border: 0; 
    color: #fff; 
    padding: 0.5rem;
    margin-top: 0.8rem; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: #B8161F;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
    
`;

const FormComp = () => {
	const [error, setError] = useState(false);

  const handleSubmit = ((evt) => {
    evt.preventDefault()
	if (!evt.target.checkValidity()) {
      setError(true);
      return;
    }
    
	setError(false)
     console.log('Do something')
  }, [error, setError])


	return(
  	<div>
        <StyledForm 
                    onSubmit={handleSubmit}
                    noValidate
                    error={error}
                    action=""
                    >
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput placeholder='Your Name' required></StyledInput>

                    <StyledLabel>Country</StyledLabel>
                    <StyledInput placeholder='Your Country'required></StyledInput>

                    <StyledLabel>Email</StyledLabel>
                    <StyledInput placeholder='Enter Email' required></StyledInput>

                    <StyledLabel>Subject</StyledLabel>
                    <StyledTextArea placeholder='type your message' required> </StyledTextArea>

                    <StyledButton type='submit'>Send!</StyledButton>

                    {/* <input type="submit" value="Submit!"></input> */}
        </StyledForm>
  	</div>
  )
}

export default FormComp;



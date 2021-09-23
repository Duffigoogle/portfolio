import { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../common/breakpoints";

const StyledInput = styled.input`
  /* border: 1px solid #5d5d5d;  */
  padding: 0.45rem;
  margin-top: 0.15rem;
  margin-bottom: 0.85rem;
  width: 100%;
  outline: none;

  ::placeholder {
    font-size: 0.8rem;
  }

  ${mediaQueries("mobileM")`
    padding: 0.30rem;
    margin-bottom: 0.60rem;
  `}
`;

const StyledForm = styled.form`
  width: 20vw;
  margin: 2rem auto;

  & ${StyledInput}:invalid {
    border-color: ${(props) => {
      console.log(props.error);
      return props.error ? "red" : "none";
    }};
  }

  ${mediaQueries("tablet")`
        width: 13rem;
        margin: 0.5rem auto;
  `}
  ${mediaQueries("mobileLXX")`
        width: 17rem;
        margin: 0.7rem auto;
  `}
  ${mediaQueries("mobileM")`
        width: 15rem;
  `}
  ${mediaQueries("mobileS")`
        width: 14rem;
  `}
`;

const StyledLabel = styled.label`
  display: block;
  color: #e0e0e0;
  font-weight: bold;
  padding-left: 0.25rem;
  letter-spacing: 1px;

  ${mediaQueries("mobileLX")`
    padding-left: 0.45rem;
    font-size: 0.95rem;
  `}
  ${mediaQueries("mobileM")`
    padding-left: 0.35rem;
  `}
  ${mediaQueries("mobileS")`
    font-size: 0.87rem;
  `}
`;

const StyledTextArea = styled.textarea`
  padding: 0.2rem;
  width: 100%;
  overflow: hidden;
  outline: none;
`;

const StyledButton = styled.button`
  background: orange;
  border: 0;
  color: #222021;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 0.5rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  width: 100%;
  border-radius: 8px;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

const FormComp = () => {
  const [error, setError] = useState(false);

  const handleSubmit =
    ((evt) => {
      evt.preventDefault();
      if (!evt.target.checkValidity()) {
        setError(true);
        return;
      }

      setError(false);
      console.log("Do something");
    },
    [error, setError]);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit} noValidate error={error} action="">
        <StyledLabel>Name</StyledLabel>
        <StyledInput placeholder="Your Name" required></StyledInput>

        <StyledLabel>Country</StyledLabel>
        <StyledInput placeholder="Your Country" required></StyledInput>

        <StyledLabel>Email</StyledLabel>
        <StyledInput placeholder="Enter Email" required></StyledInput>

        <StyledLabel>Subject</StyledLabel>
        <StyledTextArea placeholder="type your message" required>
          {" "}
        </StyledTextArea>

        <StyledButton type="submit">Send</StyledButton>

        {/* <input type="submit" value="Submit!"></input> */}
      </StyledForm>
    </div>
  );
};

export default FormComp;

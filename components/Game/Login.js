import React from "react";
import styled from "styled-components";
import { Button } from "./GameComp";
import { mediaQueries } from "../common/breakpoints";

const LoginGame = ({ handleChange, handleClick, name }) => {
  return (
    <Wrapper>
      <Login>
        <form>
          <div>
            <label>Hello player!</label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="type your name"
              maxLength={20}
              required
            />
            <small>This is a FlipCard Frontend Memory Game</small>
          </div>
          <Button onClick={handleClick}>Submit!</Button>
        </form>
      </Login>
    </Wrapper>
  );
};

export default LoginGame;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  /* width: 78%; */
  width: 100%;

  ${mediaQueries("tablet")`
    max-width: calc(766px - 5rem);

  `}

  ${mediaQueries("mobileLXX")`
     width: 100%;
  `}

 ${mediaQueries("mobileLXL")`
    max-width: calc(37.5rem - 5rem);
  `}

  ${mediaQueries("mobileM")`
     width: calc(23.4375rem - 2.5rem - 2rem);
     height: 100vh;
  `}
  ${mediaQueries("mobileS")`
     width: calc(320px - 4.7rem);
  `}
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  height: 60vh;
  width: 23rem;
  box-shadow: 6px 6px 6px gray;
  text-align: center;
  background: #fff;
  color: #000;

  ${mediaQueries("tabletMax")`
      width: 18rem;
      height: 50vh;
      // margin-top: 5rem;
      // margin-left: 3rem;
  `}

  ${mediaQueries("mobileLXX")`
      width: 19rem;
      height: 50vh;
      margin-top: 5rem;
      margin: 0 auto;
  `}

${mediaQueries("mobileLXL")`
      width: 14rem;
      height: 50vh;
  `}

  ${mediaQueries("mobileM")`
      width: 15.6rem;
      height: 15.6rem;
  `}
  ${mediaQueries("mobileS")`
     width: calc(320px - 7rem);
      height: 15.6rem;
      
  `}

  div {
    display: flex;
    flex-direction: column;

    ${mediaQueries("mobileM")`
            width: 14rem;
    `}

    ${mediaQueries("mobileS")`
            width: 12rem;
    `}

    label {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 7px 0;

      ${mediaQueries("mobileM")`
        font-size: 0.9rem;
     `}
    }

    input {
      border: 1px solid #00a68c;
      outline: none;
      width: 90%;
      margin: 0 auto;

      &::placeholder {
        font-size: 0.8rem;
      }
    }

    small {
      margin: 15px 0;
      font-style: italic;
    }
  }
`;

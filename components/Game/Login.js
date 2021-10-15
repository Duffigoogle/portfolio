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
  width: 100%;
  /* height: 100vh;
  width: 100vw; */

  ${mediaQueries("mobileLXX")`
     width: 100%;
  `}
  /* border: 1px solid yellow; */
  ${mediaQueries("mobileM")`
      width: 100%;
  `}
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 40vw;
  box-shadow: 6px 6px 6px gray;
  text-align: center;
  background: #fff;
  color: #000;

  ${mediaQueries("mobileLXX")`
      width: 60vw;
      height: 50vh;
  `}

  ${mediaQueries("mobileM")`
      width: 70vw;
      height: 50vh;
  `}

  div {
    display: flex;
    flex-direction: column;

    ${mediaQueries("mobileM")`
            width: 65vw;
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

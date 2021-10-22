import React from "react";
import { messages } from "./cardData";
import styled from "styled-components";
import { Button } from "./GameComp";
import { mediaQueries } from "../common/breakpoints";

const EndGame = ({ name, setShowEndGame }) => {
  const handleClick = () => {
    setShowEndGame(false);
  };

  const shuffleMessages = messages.sort(() => Math.random() - 0.5);
  console.log(shuffleMessages);

  return (
    <>
      <EndGameCont>
        <MessageBox>
          <h2>
            {" "}
            <span> Hi {name},</span> <br />
            {messages[0].title}
          </h2>
          <p>{messages[0].message}</p>
          <Button onClick={handleClick}> Go Again!</Button>
        </MessageBox>
      </EndGameCont>
    </>
  );
};

export default EndGame;

const EndGameCont = styled.div`
  position: absolute;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  background: rgba(0, 0, 0, 0.8);
  /* border: 1px solid red; */

  ${mediaQueries("laptop")`
      width: 90%;
  `}
  ${mediaQueries("tabletMax")`
  `}

  ${mediaQueries("mobileLXX")`
    width: 86%;
  `}
  ${mediaQueries("mobileLXL")`
    width: 80%;
  `}
  ${mediaQueries("mobileLX")`
    width: 75%;
  `}
  ${mediaQueries("mobileL")`
    width: 65%;
  `} 
  ${mediaQueries("mobileM")`

  `}
  ${mediaQueries("mobileS")`
  `}
`;

const MessageBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 40%;
  background: #fff;
  box-shadow: 12px 12px 10px gray;
  color: #000;
  text-align: center;
  top: 20%;
  left: 20%;

  span {
    color: #bfd833;
    font-weight: 800;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 20px;
  }
  ${mediaQueries("laptop")`
    max-width: calc(1024px - 20.5rem);
  `}
  ${mediaQueries("tabletMax")`
    max-width: calc(991px - 20.5rem);
  `}

  ${mediaQueries("mobileLXX")`
    max-width: calc(766px - 16rem);
  `}
  ${mediaQueries("mobileLXL")`
    max-width: calc(600px - 13rem);
  `}
  ${mediaQueries("mobileLX")`
    max-width: calc(480px - 9rem);
  `}
  ${mediaQueries("mobileL")`
    max-width: calc(425px - 9rem);
  `}
  ${mediaQueries("mobileM")`
    max-width: calc(375px - 9rem);

  `}
  ${mediaQueries("mobileS")`
    left: 9%;
    width: 80%;
    box-shadow: 5px 5px 5px gray;
  `}
`;

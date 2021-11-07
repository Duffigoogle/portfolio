import React, { useState, useEffect } from "react";
import { messages } from "./cardData";
import styled from "styled-components";
import { Button } from "./GameComp";
import { mediaQueries } from "../common/breakpoints";

const EndGame = ({ name, setShowEndGame }) => {
  const handleClick = () => {
    setShowEndGame(false);
  };

  // const handleGameExit = () => {
  //   setEndGameFirstModalDisplay(!EndGameFirstModalDisplay);
  //   setTimeout(() => {
  //     setEndGameDisplay(!EndGameDisplay);
  //     console.log("fish!");
  //   }, 400);
  // };

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
          {/* <Button onClick={handleGameExit}> Exit</Button> */}
        </MessageBox>
      </EndGameCont>
      {/* {
        EndGameDisplay ? (
          <EndGameCont>
            <DivBox>
              <p>
                Thank you <span>{name}</span>! for playing.{" "}
              </p>
            </DivBox>
          </EndGameCont>
        ) : null
        // router.push("/game")
        // <LoginGame />
        // <GameComp />
      } */}
    </>
  );
};

export default EndGame;

const EndGameCont = styled.div`
  /* position: absolute; */
  position: fixed;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82%;
  width: 69%;
  background: rgba(0, 0, 0, 0.8);
  top: 14%;
  left: 22%;

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
    top: 16%;
    height: 77%;
  `}
  ${mediaQueries("mobileLX")`
    width: 75%;
  `}
  ${mediaQueries("mobileL")`
    width: 65%;
  `} 
  ${mediaQueries("mobileM")`
    width: 80%;
    top: 18%;
  `}
  ${mediaQueries("mobileS")`
          width: 75%;
  `}
`;

const MessageBox = styled.div`
  position: absolute;
  /* display: flex; */
  display: ${({ EndGameFirstModalDisplay }) =>
    EndGameFirstModalDisplay ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 40%;
  background: #fff;
  box-shadow: 12px 12px 10px gray;
  color: #000;
  text-align: center;
  top: 20%;
  left: 20%;

  span {
    color: #f59e8b;
    font-weight: 800;
    font-size: 1.2rem;
    border-bottom: 1px solid #000;
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

    h2 {
      font-size: 0.7rem;
    };

    p {
      font-size: 0.5rem;
    };
  `}
  ${mediaQueries("mobileS")`
    left: 9%;
    width: 80%;
    box-shadow: 5px 5px 5px gray;
  `}
`;

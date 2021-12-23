import React, { useState, useEffect } from "react";
import { messages } from "./cardData";
import styled from "styled-components";
import { Button } from "./GameComp";
import { mediaQueries } from "../common/breakpoints";
import Image from "next/image";
import wavinghand from '../../public/img/waving-hand.gif';
import { useRouter } from "next/router";


const EndGame = ({ name, setShowEndGame }) => {

  const [EndGameDisplay, setEndGameDisplay] = useState(false);
  const [EndGameFirstModalDisplay, setEndGameFirstModalDisplay] = useState(true);

  const handleClick = () => {
    setShowEndGame(false);
  };

  const router = useRouter();
  const forceReload = () => {
    router.reload()
  }
  const handleGameExit = () => {
    setEndGameFirstModalDisplay(!EndGameFirstModalDisplay);
    setEndGameDisplay(!EndGameDisplay);
    const timer = setTimeout(() => {
      console.log("fish!");
      forceReload();
    }, 1000);
    return () => clearTimeout(timer) 
    // setEndGameDisplay(!EndGameDisplay);
  };

  const shuffleMessages = messages.sort(() => Math.random() - 0.5);
  // console.log(shuffleMessages);

  return (
    <>
      <EndGameCont>
        {EndGameFirstModalDisplay ? 
        <MessageBox>
          <h2>
            {" "}
            <span> Hi {name},</span> <br />
            {messages[0].title}
          </h2>
          <br />
          <p>{messages[0].message}</p>
          <Button onClick={handleClick}> Go Again!</Button>
          <br />
          <Button onClick={handleGameExit}> Exit</Button>
        </MessageBox>
        : null }
      </EndGameCont>
      {
        EndGameDisplay ? (
          <EndGameCont>
            <DivBox>
              <Image src={wavinghand} alt='waving hands' width={120} height={120}/>
              <p>
                Thank you <span>{name}</span>! for playing...{" "}
              </p>
            </DivBox>
          </EndGameCont>
        ) : null
        // router.push("/game")
        // <LoginGame />
        // <GameComp />
      }
    </>
  );
};

export default EndGame;

const EndGameCont = styled.div`
  // position: absolute;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
`;

const MessageBox = styled.div`
  // position: absolute;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 70%;
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
    width: 50%;
  `}

  ${mediaQueries("mobileL")`
    width: 70%;
    height: 80%;
  `}
  ${mediaQueries("mobileM")`

    h2 {
      font-size: 0.7rem;
    };

    p {
      font-size: 0.5rem;
    };
  `}
  ${mediaQueries("mobileS")`
    // left: 9%;
    width: 95%;
    box-shadow: 5px 5px 5px gray;
  `}
`;

const DivBox = styled.div`
width: 200px;
margin: 0 auto;
text-align: center;

    span {
      color: red;
    }
`

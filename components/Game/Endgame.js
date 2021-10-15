import React from "react";
import { messages } from "./cardData";
import styled from "styled-components";
import { Button } from "./GameComp";


const EndGame = ({ name, setShowEndGame }) => {
  const handleClick = () => {
    setShowEndGame(false);
  };

  const shuffleMessages =  messages.sort(() => Math.random() - 0.5);
  console.log(shuffleMessages);

  return (
    <div>
    <EndGameCont>
      <MessageBox>
        <h2>
          {messages[0].title}
         {" "} <span>{name},</span>
        </h2>
        <p>{messages[0].message}</p>
        <Button onClick={handleClick}> Go Again!</Button>
      </MessageBox>
    </EndGameCont>
    </div>
  );
};

export default EndGame;

const EndGameCont = styled.div`
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 78%;
  background: rgba(0, 0, 0, 0.8);
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 40vw;
  background: #fff;
  box-shadow: 12px 12px 10px gray;

  span {
    color: #bfd833;
    font-weight: 800;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 20px;
  }
`;

import React, { useState, useEffect, useRef } from "react";
import { useSpring, to, animated as ani } from "react-spring";
import styled from "styled-components";
import Image from "next/image";
import Icon from "../common/icons/icons";
import LoginGame from "./Login";
import EndGame from "./Endgame";
import { mediaQueries } from "../common/breakpoints";

export default function GameApp() {
  const [options, setOptions] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [name, setName] = useState(""); // LoginGame input states
  const [displayGame, setDisplayGame] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showEndGame, setShowEndGame] = useState(false);
  const [score, setScore] = useState(0);
  const [flippedCount, setFlippedCount] = useState(0);

  //LoginGame Form handleChange
  const handleChange = (e) => {
    setName(e.target.value.trim());
  };

  //LoginGame Form handleClick
  const handleClick = (e) => {
    e.preventDefault();
    setName(name);
    setShowLogin(!showLogin);
    setDisplayGame(true);
  };

  const handleEndGame = (boolean) => {
    if (boolean) {
      setShowEndGame({ showEndGame: boolean }), setScore(score + 1);
    } else {
      setShowEndGame({ showEndGame: boolean });
    }
  };

  useEffect(() => {
    //Loads when the Game starts
    const json = localStorage.getItem("memorygamehighscore");
    const savedScore = JSON.parse(json);
    if (savedScore) {
      setHighScore(savedScore);
    }
  }, []);

  return (
    <MainGameContainer>
      {showLogin ? (
        <LoginGame
          handleChange={handleChange}
          handleClick={handleClick}
          name={name}
        />
      ) : null}
      {showEndGame ? (
        <EndGame
          newGame={handleEndGame}
          name={name}
          setShowEndGame={setShowEndGame}
        />
      ) : null}
      <GameBox displayGame={displayGame}>
        <GameHeaderContent>
          <GameHeader>
            <p>Hello {name}!</p>
            <h1>Welcome to the FlipCard </h1>
            <h1>Frontend Memory Game</h1>
          </GameHeader>
          <GameButtonsSection>
            {options === null ? (
              <>
                <Button onClick={() => setOptions(12)}> Easy</Button>
                <Button onClick={() => setOptions(18)}> Medium</Button>
                <Button onClick={() => setOptions(24)}> Hard</Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    const prevOptions = options;
                    setOptions(null);
                    setFlippedCount(0);
                    localStorage.clear();
                    setTimeout(() => {
                      setScore(0), setOptions(prevOptions);
                    }, 5);
                  }}
                >
                  Start Over!
                </Button>
                <Button onClick={() => setOptions(null)}> Main Menu</Button>
              </>
            )}
          </GameButtonsSection>
          <GameScoreBoard>
            {" "}
            <div>
              Score: <span>{score}</span>
            </div>
            <div>
              Moves: <span>{flippedCount}</span>
            </div>
            <div>
              High Score: <span>{highScore}</span>
            </div>
          </GameScoreBoard>
        </GameHeaderContent>

        {options ? (
          <GameBoard>
            <span>Hint</span>: Select two cards with same content consequently,
            to match them.
            <MemoryGame
              options={options}
              name={name}
              score={score}
              setScore={setScore}
              setOptions={setOptions}
              highScore={highScore}
              setHighScore={setHighScore}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              showEndGame={showEndGame}
              setShowEndGame={setShowEndGame}
              endGame={handleEndGame}
            />
          </GameBoard>
        ) : (
          <h2>
            {" "}
            Hey EggHead, <br />
            <br /> Choose a level of difficulty to begin
          </h2>
        )}
      </GameBox>
    </MainGameContainer>
  );
}

const MainGameContainer = styled.main`
  position: relative;
`
const GameBox = styled.section`
  display: ${({ displayGame }) => (displayGame ? "block" : "none")};
  width: 65rem;
  height: 200vh;
  margin: 0 auto;
  /* border: 1px solid yellow; */

  h2 {
    font-size: 1.1rem;
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
      font-size: 0.8rem;
    }
  `}
  ${mediaQueries("mobileS")`
    max-width: calc(320px - 5rem);
  `}
`;

const GameHeaderContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 19px auto;
  /* border: 1px solid green; */

  ${mediaQueries("tabletMax")`
      width: 34rem;
  `}

  ${mediaQueries("mobileLXX")`
      width: 28rem;    
  `}
 
  ${mediaQueries("mobileLXL")`
      width: 24rem;
      
  `}
  ${mediaQueries("mobileLX")`
      width: 20rem;
      
  `}

  ${mediaQueries("mobileL")`
      width: 17rem;
  `}

  ${mediaQueries("mobileM")`
      width: 14rem;
      margin-bottom: 8px;

  `}

  ${mediaQueries("mobileS")`
      max-width: 230px;
      margin: 10px auto;
    
  `}
`;

const GameHeader = styled.section`
  width: 34rem;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid blue; */

  p {
    color: orange;
    margin-bottom: 15px;
  }
  h1 {
    font-size: 2.6rem;
  }

  ${mediaQueries("laptop")`
      width: 32rem;

      h1 {
        font-size: 2.2rem;
      }
  `}
  ${mediaQueries("tabletMax")`
      width: 32rem;
  `}
  ${mediaQueries("mobileLXX")`
      width: 26rem;
  `}
  ${mediaQueries("mobileLXL")`
      width: 23rem;
  `}

  ${mediaQueries("mobileLX")`
      width: 18rem;
            p {
            font-size: 0.9rem;
          }

          h1 {
            font-size: 1.1rem;
          }
      
  `}

  ${mediaQueries("mobileL")`
      width: 16rem;
  `}

  ${mediaQueries("mobileM")`
      width: 14rem;
      margin-bottom: 8px;

  `}

  ${mediaQueries("mobileS")`
      width: 220px;
      margin: 10px auto;
      // border: 1px solid #fff;


          p {
            font-size: 0.7rem;
          }

          h1 {
            font-size: 1rem;
            text-align: center;
          }
  `}
`;

const GameButtonsSection = styled.section`
  /* width: 100%; */
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: orangered;
  border-radius: 4px;
  font-weight: 700;
  color: #000;
  border: none;
  padding: 7px 15px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #008378;
    color: #fff;
  }
  &:focus {
    outline: 0;
  }

  ${mediaQueries("mobileLXX")`
      font-size: 0.9rem;
      padding: 5px 10px;  
  `}

  ${mediaQueries("mobileM")`
      font-size: 0.7rem;
      padding: 4px 9px;
  `}
`;

const GameScoreBoard = styled.section`
  margin-top: 13px;
  /* border: 1px solid red; */
  display: flex;
  font-size: 1.3rem;

  div {
    margin: 10px 20px;
  }

  ${mediaQueries("laptop")`
      
  `}
  ${mediaQueries("tabletMax")`
      margin: 0 auto;
      font-size: 1.5rem;
  `}

  ${mediaQueries("mobileLXX")`
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
  `}
  ${mediaQueries("mobileLX")`

      
  `}

  ${mediaQueries("mobileM")`
      font-size: 1.1rem;
  `}
`;

const GameBoard = styled.section`
  text-align: center;
  padding: 20px 10px;
  /* height: 100vh; */

  span {
    color: #f59e8b;
    font-style: italic;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const CardDiv = styled.div`
  position: relative;
  width: 960px;
  margin: 18px auto 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 2px solid #fff; */
  background: #1a1110;
  box-shadow: 2px 2px 6px 2px #cec;
  border-radius: 10px;

  ${mediaQueries("laptop")`
       width: 41rem;
       padding: 5px;
  `}
  ${mediaQueries("tabletMax")`
       width: 39rem;
  `}

  ${mediaQueries("mobileLXX")`
       width: 30rem;
  `}
   ${mediaQueries("mobileLXL")`
       width: 24rem;
  `}
   ${mediaQueries("mobileLX")`
       width: 20rem;
       padding: 0;
  `}
   ${mediaQueries("mobileL")`
       width: 16.5rem;
  `}
  ${mediaQueries("mobileM")`
      width: 13.5rem;

  `}
  ${mediaQueries("S")`
      width: 200px;

  `}

  .card {
    width: 9.38rem;
    height: 9.38rem;
    margin-bottom: 15px;
    /* position: relative; */
    /* border: 1px solid red; */

    ${mediaQueries("laptop")`
       width: 7.5rem;
       height: 7.5rem;
       margin-bottom: 35px;
    `}
    ${mediaQueries("tabletMax")`
       width: 6.25rem;
       height: 6.25rem;
       margin-bottom: 10px;
    `}

    ${mediaQueries("mobileLXX")`
       width: 80px;
       height: 80px;
    `}
    ${mediaQueries("mobileLX")`
       width: 60px;
       height: 60px;
    `}
    ${mediaQueries("mobileM")`
      width: 50px;
      height: 50px;
    `}
  }

  .card:not(:nth-child(6n)) {
    margin-right: 20px;

    ${mediaQueries("mobileLXX")`
       margin-right: 10px;
  `}
    ${mediaQueries("mobileM")`
      margin-right: 5px;
  `}
  }
`;

const CardsContainer = styled.div`
  /* border: 1px solid blue; */
  .c {
    position: absolute;
    max-width: 150px;
    max-height: 150px;
    width: 50ch;
    height: 50ch;
    cursor: pointer;
    will-change: transform, opacity;
    margin-bottom: 15px;

    ${mediaQueries("tabletMax")`
       max-width: 100px;
       max-height: 100px;
    `}

    ${mediaQueries("mobileLXX")`
        max-width: 80px;
        max-height: 80px;
    `}
    ${mediaQueries("mobileLX")`
        max-width: 60px;
        max-height: 60px;
    `}

    ${mediaQueries("mobileM")`
      max-width: 50px;
      max-height: 50px;
    `}
  }

  .front,
  .back {
    background-size: cover;
  }

  .back {
    background-image: url(https://img.icons8.com/color/240/000000/money-heist-dali.png);
  }

  .front {
  }
`;

const MemoryGame = ({
  name,
  options,
  setOptions,
  score,
  setScore,
  highScore,
  setHighScore,
  flippedCount,
  setFlippedCount,
  showEndGame,
  setShowEndGame,
}) => {
  const [game, setGame] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [multiplier, setMultiplier] = useState(0);

  const images = [
    "SemantiIcon",
    "VueIcon",
    "SvelteIcon",
    "NuxtIcon",
    "LessIcon",
    "JqueryIcon",
    "BackboneIcon",
    "AngularIcon",
    "sassIcon",
    "cssIcon",
    "reactIcon",
    "htmlIcon",
  ];

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        imageId: i,
        image: images[i],
        flipped: false,
      };

      const secondOption = {
        id: 2 * i + 1,
        imageId: i,
        image: images[i],
        flipped: false,
      };

      newGame.push(firstOption);
      newGame.push(secondOption);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  }, []);

  //HIGH SCORE
  useEffect(() => {
    //Loads when the game variable changes
    const finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        setShowEndGame(true);

        const bestPossible = game.length;

        if (options === 12) {
          setMultiplier(5);
        } else if (options === 18) {
          setMultiplier(2.5);
        } else if (options === 24) {
          setMultiplier(1);
        }

        const lostPoints = multiplier * (0.66 * flippedCount - bestPossible);
        console.log(lostPoints);

        let newScore;
        if (lostPoints < 100) {
          newScore = 100 - lostPoints;
        } else {
          score = 0;
        }

        // Calculating and storing HighScore
        if (newScore > highScore) {
          const hScoreprompt = confirm(
            `"Stunning job ${name}! You got a highscore`
          );
          setScore(newScore);
          setHighScore(newScore);
          const json = JSON.stringify(newScore);

          //Save data to local Storage
          localStorage.setItem("memorygamehighscore", json);
        }

        const newGame = confirm(`You Won!, SCORE: ${newScore}  New Game?`);

        if (newGame) {
          const gameLength = game.length;
          setOptions(null);
          setFlippedCount(0);
          setTimeout(() => {
            setOptions(gameLength);
          }, 5);
        } else {
          setOptions(null);
        }
      }, 500);
    }
  }, [game]);

  if (flippedIndexes.length === 2) {
    // Runs if two cards have been flipped
    const match =
      /* game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId; */
      game[flippedIndexes[0]].imageId === game[flippedIndexes[1]].imageId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div> Loading...</div>;
  else {
    return (
      <CardDiv>
        {game.map((card, ind) => (
          <div className="card" key={ind}>
            <Cards
              id={ind}
              image={card.image}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </CardDiv>
    );
  }
};

const Cards = ({
  id,
  color,
  image,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    console.log("Flipped Indexes Changed");
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        setFlipped((state) => !state);
        setFlippedCount(flippedCount + 1);
        setFlippedIndexes([]);
      }, 1000);
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  const onCardClick = () => {
    console.log("Card Clicked");
    if (!game[id].flipped && flippedCount % 3 === 0) {
      setFlipped((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      setFlipped((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };

  return (
    <CardsContainer onClick={onCardClick}>
      <ani.div
        className="c back"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <ani.div
        className="c front"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
          /* background: color, */
        }}
      >
        <Icon name={image} className="card_icon" size="100%" />
      </ani.div>
    </CardsContainer>
  );
};

// import "../../styles/game.scss";
// import FlashCard from "./FlashCards";
// import styled from "styled-components";

// function shuffleCards(array) {
//   const length = array.length;
//   for (let i = length; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * i);
//     const currentIndex = i - 1;
//     const temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }

// const GameComp = () => {
//   // const [cards, setCards] = useState(CARD_DATA);
//   const [cards, setCards] = useState(
//     shuffleCards.bind(null, cardContentsArray.concat(cardContentsArray))
//   );

//   const [openCards, setOpenCards] = useState([]);
//   const [removedCards, setRemovedCards] = useState({});
//   const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
//   const [moves, setMoves] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [bestScore, setBestScore] = useState(
//     JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
//   );
//   const timeout = useRef(null);

//   const disable = () => {
//     setShouldDisableAllCards(true);
//   };

//   const enable = () => {
//     setShouldDisableAllCards(false);
//   };

//   const checkCompletion = () => {
//     //We are storing removedCards as an object since its more efficient
//     // to search in an object instead of an array
//     if (Object.keys(removedCards).length === cardContentsArray.length) {
//       setShowModal(true);
//       const highScore = Math.min(moves, bestScore);
//       setBestScore(highScore);
//       localStorage.setItem("bestScore", highScore);
//     }
//   };

//   // function swap(array, i, j) {
//   //   const temp = array[i];
//   //   array[i] = array[j];
//   //   array[j] = temp;
//   // }

//   const evaluate = () => {
//     const [first, second] = openCards;
//     enable();
//     if (cards[first].type === cards[second.type]) {
//       setRemovedCards((prev) => ({ ...prev, [cards[first].type]: true }));
//       setOpenCards([]);
//       return;
//     }
//     //Flip cards after 600ms
//     timeout.current = setTimeout(() => {
//       setOpenCards([]);
//     }, 600);
//   };

//   const handleCardClick = (ind) => {
//     // have a maximum of 2 items in array at once
//     if (openCards.length === 1) {
//       setOpenCards((prev) => [...prev, ind]);

//       // increase the moved once a player opens a pair.
//       setMoves((moves) => moves + 1);
//       disable();
//     } else
//       [
//         // IF two cards are already opened, cancel timeout set for flipping cards back
//         clearTimeout(timeout.current),
//         setOpenCards([ind]),
//       ];
//   };

//   useEffect(() => {
//     let timeout = null;
//     if (openCards.length === 2) {
//       timeout = setTimeout(evaluate, 300);
//     }
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [openCsrds]);

//   useEffect(() => {
//     checkCompletion();
//   }, [clearedCards]);

//   const checkIsFlipped = (ind) => {
//     return openCards.includes(ind);
//   };

//   const checkIsInactive = (card) => {
//     return Boolean(removedCards[card.type]);
//   };

//   const handleRestart = () => {
//     setRemovedCards({});
//     setOpenCards({});
//     setShowModal(false);
//     setMoves(0);
//     setShouldDisableAllCards(false);

//     //set a shuffled deck of cards
//     setCards(shuffleCards(cardContentsArray.concat(cardContentsArray)));
//   };

//   return (
//     <div className="Game">
//       {/* <FlashCardList flashcards={cards} /> */}
//       <header>
//         <h3>Memory Game</h3>
//         <h5>Play the Flip Card Game</h5>
//         <div>
//           Select two cards with same content consequently to make them vanish.
//         </div>
//       </header>
//       <div className="Game_container">
//         {cards.map((card, ind) => {
//           return (
//             <FlashCard
//               key={ind}
//               card={card}
//               ind={ind}
//               isDisabled={shouldDisableAllCards}
//               isInactive={checkIsInactive(card)}
//               isFlipped={checkIsFlipped(ind)}
//               onClick={handleCardClick}
//             />
//           );
//         })}
//       </div>
//       <footer>
//         <div className="Game_score">
//           <div className="Game_moves">
//             <span className="bold_text">Moves:</span> {moves}
//           </div>
//           {localStorage.getItem("bestScore") && (
//             <div className="game_high_score">
//               <span className="bold_text">BestScore:</span>
//               {bestScore}
//             </div>
//           )}
//         </div>
//         <div className="game_restart">
//           <Button onClick={handleRestart} color="#fff">
//             Restart
//           </Button>
//         </div>
//       </footer>
//       <Dialog open={showModal}>
//         <DialogTitle>Hurray! You completed the challenge</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             You completed the game in {moves} moves. Your best score is{" "}
//             {bestScore} moves.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleRestart}>Restart</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default GameComp;

// const Dialog = styled.div``;
// const DialogTitle = styled.h3``;
// const DialogContent = styled.section``;
// const DialogContentText = styled.p``;
// const DialogActions = styled.section``;

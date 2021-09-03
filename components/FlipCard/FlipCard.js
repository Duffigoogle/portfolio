import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlipCard>
          <Hover>
            <FlipCardInner className="element">
              <FlipcardFrontandBack>
                <FlipcardFront>
                  {/* {
                    // <img
                    //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvslSVQuzPcCLmMOW4iGsaieZbqM7nXwr8BbI4BiHVQ9XvMb5"
                    //   alt="Avatar"
                    // ></img>
                    // <Image src='' />
                  } */}
                </FlipcardFront>
              </FlipcardFrontandBack>
              <FlipcardFrontandBack>
                <FlipcardBack>
                  {<h1>John Doe</h1>}
                  {<p>Architect & Engineer</p>}
                  {<p>We love that guy</p>}
                </FlipcardBack>
              </FlipcardFrontandBack>
            </FlipCardInner>
          </Hover>
        </FlipCard>
      </div>
    );
  }
}

const FlipCard = styled.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
  position: absolute;
  perspective: 800;
  -webkit-perspective: 800;
`;

const FlipCardInner = styled.div`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  --webkit-transform-style: preserve-3d;
  position: relative;
  transition: all 2s ease;
  text-align: center;
`;

const Hover = styled.div`
  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipcardFrontandBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visiblity: hidden;
`;
const FlipcardFront = styled.div`
  background-color: #bbb;
  color: black;
`;
const FlipcardBack = styled.div`
  position: relative;
  transform: rotateY(180deg);
  background-color: #2980b9;
  color: white;
`;

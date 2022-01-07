import Link from "next/link";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import React, { useState, useEffect } from "react";
import { mediaQueries } from "../common/breakpoints";

const WelcomeComp = () => {

  const [date, setDate] = useState(
    new Intl.DateTimeFormat("en", {
      timeStyle: "long",
      dateStyle: "full",
    })
  );

  useEffect(() => {
    // const timer = setInterval(() => setDate(new Date()), 1000);

    const weed = setInterval(
      () =>
        setDate(
          new Intl.DateTimeFormat("en", {
            timeStyle: "long",
            dateStyle: "full",
          })
        ),
      1000
    );

    return () => {
      clearInterval(weed);
    };
  });

  return (
    <>
      <WelcomeCompContainer>
        <SalutationBox>
            <p className='salute'>
            {" "}
            <span> Hello Guest, </span>
          </p>
          <p className='greetings'>
            {" "}
            I believe it is a beautiful <span>{date.format(Date.now())}</span> in your modern city.
          </p>
        </SalutationBox>
        <WelcomeContent>
          <WelcomeHeading1>
            Welcome <br /> to my <br />
            <span>Tech-folio</span>
          </WelcomeHeading1>
          <Link href="/about" passHref>
            <WelcomeButton>
              Explore with joy &nbsp;{" "}
              <Icon name="ArrowRightCircleFill" size={25} color="#fff" />
            </WelcomeButton>
          </Link>
        </WelcomeContent>
      </WelcomeCompContainer>
    </>
  );
};

export default WelcomeComp;

// styled components for WelcomeComp
const WelcomeCompContainer = styled.main`
  background-color: #000;
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  /* height: calc(100vh - 59px); */
  // height: 100vh;

  /* ${mediaQueries("mobileM")`
    height: calc(100vh - 30px - 39px);
  `} */
 
`;

const SalutationBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;

     p {
      color: #fff;
      }
      .salute {
        padding-left: 0.3rem;
        font-size: 1rem;
        font-style: italic;
        /* color: #ed254eff; */
        color: orangered;
      }
      .greetings {
        padding-right: 0.3rem;
        font-size: 1rem;
        padding-top: 50px;
        width: 50%;
        text-align: right;
        color: #39ff14;

        span {
          /* color: #c7ea46; */
          color: #ffe77aff;
        }
      }
`;

const WelcomeContent = styled.div`
  /* border: 1px solid red; */
  margin-top: 20px;
`;

const WelcomeHeading1 = styled.h2`
  color: #444444;
  font-weight: 800;
  font-size: 3rem;
  text-align: center;

  ${mediaQueries("tablet")`
      font-weight: 600;
      font-size: 2.4rem;
  `}
  ${mediaQueries("mobileLX")`
      font-weight: 600;
      font-size: 1.9rem;
  `}
  ${mediaQueries("mobileM")`
      font-weight: 500;
      font-size: 1.3rem;
  `}
  span {
    color: orangered;
    font-size: 5rem;
    letter-spacing: 0.4rem;

    ${mediaQueries("tablet")`
      font-weight: 600;
      font-size: 4.1rem;
      letter-spacing: 0.2rem;
  `}
    ${mediaQueries("mobileLX")`
      font-weight: 600;
      font-size: 3.2rem;
  `}

    ${mediaQueries("mobileM")`
      font-weight: 600;
      font-size: 2.6rem;
  `}
    &:hover {
      color: orangered;
    }
  }
`;
const WelcomeButton = styled.button`
  width: 280px;
  text-transform: uppercase;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  background-color: #d1d3bd;
  color: #000;
  padding: 0 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: ; */
  margin: 40px auto 25px;
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  ${mediaQueries("tablet")`
      width: 240px;
      height: 40px;
      font-size: 1rem;
      letter-spacing: 1px;
      margin: 25px auto 0px;
  `}
  ${mediaQueries("mobileLX")`
      width: 200px;
      height: 35px;
      font-size: 0.7rem;
  `}
  ${mediaQueries("mobileM")`
      width: 180px;
      height: 30px;
      font-size: 0.7rem;
  `}
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

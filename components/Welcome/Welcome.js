import Link from "next/link";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import { mediaQueries } from "../common/breakpoints";

const WelcomeComp = () => {
  return (
    <>
      <WelcomeCompContainer>
        <WelcomeContent>
          <WeclomeHeading1>
            Welcome <br /> to my <br />
            <span>Tech-folio</span>
          </WeclomeHeading1>
          <Link href="/bio" passHref>
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 59px);
  /* height: calc(100vh - 30px - 39px); */

  /* ${mediaQueries("mobileM")`
    height: calc(100vh - 30px - 39px);
  `} */
`;

const WelcomeContent = styled.div`
  /* border: 1px solid red; */
`;

const WeclomeHeading1 = styled.h2`
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
      font-size: 1.7rem;
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
      font-size: 3rem;
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

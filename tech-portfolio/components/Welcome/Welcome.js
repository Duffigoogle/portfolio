import Link from "next/link";
import styled from "styled-components";
import Icon from "../common/icons/icons";

const WelcomeComp = () => {
  return (
    <>
      <WelcomeCompContainer>
        <WeclomeHeading1>
          Welcome <br /> to my <br />
          <span>Tech-Portfolio</span>
        </WeclomeHeading1>
        <Link href="/bio">
          <WelcomeButton>
            Explore with joy &nbsp;{" "}
            <Icon name="ArrowRightCircleFill" size={25} color="#fff" />
          </WelcomeButton>
        </Link>
      </WelcomeCompContainer>
    </>
  );
};

export default WelcomeComp;

// styled components for WelcomeComp

const WelcomeCompContainer = styled.div`
  width: 100%;
  margin-top: 7rem;
  height: 75vh;
`;

const WeclomeHeading1 = styled.h2`
  color: #444444;
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
  span {
    color: orangered;
    font-size: 5rem;
    letter-spacing: 0.4rem;
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
  margin: 60px auto 25px;
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

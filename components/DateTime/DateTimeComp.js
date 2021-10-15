import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaQueries } from "../common/breakpoints";

const DateTimeComp = () => {
  // const [date, setDate] = useState(new Date());
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

  // const weed = new Intl.DateTimeFormat("en", {
  //   timeStyle: "long",
  //   dateStyle: "full",
  // });

  return (
    <ContainerDiv>
      <p>
        {" "}
        <span> Hello Guest from PH, </span>
      </p>
      <br />
      <br />
      <br />

      <p>
        {" "}
        It's a new day, a beautiful {date.format(Date.now())}. in PH City,
        Nigeria, right in the middle of Africa.
      </p>
      <br />
      <br />
      <br />

      {/* <p>
        {" "}
        <span>Display Time: </span>
      </p>
      <p>{date.format(Date.now())} </p> */}
      {/* <p>Time: {date.toLocaleTimeString()}</p>
      <p>Date: {date.toLocaleDateString()}</p> */}
    </ContainerDiv>
  );
};

export default DateTimeComp;

const ContainerDiv = styled.section`
  margin: 0px 15px;
  display: flex;
  flex-wrap: wrap;

  p {
    font-style: normal;
    span {
      color: #84cc16;
      font-style: italic;
    }
  }

  /* ${mediaQueries("mobileLXX")`
      
  `} */
  ${mediaQueries("mobileLX")`
      font-size: 0.9rem;
  `}

  ${mediaQueries("mobileM")`
      font-size: 0.75rem;
  `}
`;

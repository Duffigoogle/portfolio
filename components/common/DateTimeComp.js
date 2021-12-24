import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mediaQueries } from "./breakpoints";
import useSWR from "swr";


const DateTimeComp = () => {
  // const [date, setDate] = useState(new Date());
  const [ip, setIP] = useState("");
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(
    new Intl.DateTimeFormat("en", {
      timeStyle: "long",
      dateStyle: "full",
    })
  );

  // console.log(NEXT_PUBLIC_WEATHER_API_URL);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://geolocation-db.com/json/");
      setIP(res.data.IPv4);
    };

    const getData = async () => {
      if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        console.log("Lat is:", lat);
        console.log("Long is:", long);
      } else {
        //get location some other way
        fetchData();
      }

      const fetchWeather = async () => {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.WEATHER_API_KEY}`
        );
        console.log(data);
        setData(data);
      };

      fetchWeather();
    };
    getData();
  }, [lat, long]);

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
      <p>lat: {lat}</p>
      <br />
      <p>long: {long}</p>

      <p>
        {" "}
        I guess it&apos;s a beautiful {date.format(Date.now())}. in your City,
      </p>
      <br />
      <br />
      <br />
      <p>{ip}</p>

      <div>
        {typeof data.main != "undefined" ? (
          <div weatherData={data} />
        ) : (
          // <Weather weatherData={data} />
          <div> Loading... </div>
        )}
      </div>
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

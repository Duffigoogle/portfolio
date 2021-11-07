import React, { useEffect, useState } from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const WeatherComp = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [ip, setIP] = useState("");
  const [data, setData] = useState([]);

  const { data, error } = useSWR(
    "https://geolocation-db.com/json/", 
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
      <div>
          
      </div>
  )

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

      await fetch(
        `${process.env.NEXT_WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NEXT_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    getData();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

export default WeatherComp;



const Thing = () => {
  // creating IP state
  const [ip, setIP] = useState("");

  // creating function to load ip address from the API
  const getData = async () => {
    const res = await fetch("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{ip}</h1>
    </div>
  );
};

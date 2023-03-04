import React from "react";
import axios from "axios";

const HomePage = () => {
  const API = 'https://abdulkosim1.pythonanywhere.com/api/music/songs/';

  async function getData () {
    let res = await axios(API);
    console.log(res);
    console.log(res.data.results);
  };

  return <div>HomePage
    <button onClick={getData}>test get request</button>
  </div>;
};

export default HomePage;

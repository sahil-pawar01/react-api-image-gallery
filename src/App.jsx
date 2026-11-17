import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Buttons from "./components/Buttons";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  const prevBtnHandler = () => {
    if (index > 1) {
      setUserData([]);
      setIndex(index - 1);
    }
  };

  const nextBtnHandler = () => {
    setUserData([]);
    setIndex(index + 1);
  };

  let printUserData = <Loader />;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className="bg-white text-black pb-0.5 rounded-xl">
          <Card
            url={elem.url}
            downloadUrl={elem.download_url}
            author={elem.author}
          />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white h-screen p-4 overflow-auto">
      <CardsContainer uData={printUserData} />
      <Buttons
        index={index}
        prevHandler={prevBtnHandler}
        nextHandler={nextBtnHandler}
      />
    </div>
  );
};

export default App;

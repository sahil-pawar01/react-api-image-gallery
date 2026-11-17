import React from "react";

const CardsContainer = (props) => {  
  return (
    <div className="flex flex-wrap gap-4 justify-center">{props.uData}</div>
  );
};

export default CardsContainer;

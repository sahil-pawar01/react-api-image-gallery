import React from "react";

const Card = (props) => {

  return (
    <a href={props.url} target="_blank">
      <div className="h-64 w-64 rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover object-center hover:scale-150 duration-300 ease-in"
          src={props.downloadUrl}
          alt=""
        />
      </div>
      <h1 className="px-2">{props.author}</h1>
    </a>
  );
};

export default Card;

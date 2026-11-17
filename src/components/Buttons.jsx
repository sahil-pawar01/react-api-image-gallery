import React from "react";

const Buttons = (props) => {
  return (
    <div className="flex justify-center items-center gap-6 p-8">
      <button
        onClick={props.prevHandler}
        className="px-6 py-2 bg-amber-400 text-black rounded-md font-semibold text-lg cursor-pointer active:scale-90 transition"
        style={{ opacity: props.index == 1 ? 0.5 : 1 }}
      >
        Previous
      </button>
      <h1 className="font-semibold text-lg">Page {props.index}</h1>
      <button
        onClick={props.nextHandler}
        className="px-6 py-2 bg-amber-400 text-black rounded-md font-semibold text-lg cursor-pointer active:scale-90 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;

import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-white px-6 py-2 rounded-2xl shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none duration-500"
      style={{ fontFamily: "Jost, sans-serif" }}
    >
      {props.children}
    </button>
  );
};

export default Button;

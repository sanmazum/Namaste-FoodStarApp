import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "This is a Namaste react"),
      React.createElement("h1", {}, "Hi,I am a H2 tag"),
    ] // write the children in an array
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi,I am a H1 tag"),
    React.createElement("h1", {}, "Hi,I am a H2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent); // return an object

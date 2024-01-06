import React from "react";
import ReactDOM from "react-dom/client";

//Function component title
const Title = () => (
  <h1 className="head" tabIndex={5}>
    Namaste react from JSX, which is Functional component
  </h1>
);

// React element 

const surname = (
 <h1> Surname is a react element</h1>
);

const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {surname}
    {number}
    <h1 id="heading">Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

/**
 * Create a nested tag like below using React
 *
 * <div id="parent">
 *      <div id="child"></div>
 *      <h1>hi , I am an h1 tag </h1>
 *      <h2> hi i am h2 tag </h2>  --> creating  nested siblings
 *    </div>
 * <div id ="child 2">
 * <h1>hi , I am an h1 tag </h1>
 *      <h2> hi i am h2 tag </h2>
 * </div>
 *
 * ReactElements(Object) => HTML(Browswer Understands)
 */

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Hi,I am a H1 tag"),
      React.createElement("h1", {}, "Hi,I am a H2 tag"),
    ] // write the children in an array
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi,I am a H1 tag"),
    React.createElement("h1", {}, "Hi,I am a H2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent); // return an object

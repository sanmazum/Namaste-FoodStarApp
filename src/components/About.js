import UserContext from "../utils.js/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//Making the About component with the help of class based components

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(" Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log(" Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2> This is food app built by Sandeepan Mazumdar! </h2>
        {/* <User name={"Sandeepan (function)"} /> */}
        <UserClass name={"First (class)"} location={"Dehradun (class)"} />
      </div>
    );
  }
}

/* This is how the lifecycle method will trigger in case of multiple child class components

-Parent Constructor
-Parent Render
 -First child constructor
 -First Render
 
 -Second Child Constructor
 -Second Child Render
 
 <DOM Updated- IN SINGLE BATCH - This actually improves the performance, that's why React is fast>

 -First Component DidMount
 -Second Component DidMount

-Parent Component DidMount
*/

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2> This is food app built by Sandeepan Mazumdar! </h2>
//       <User name={"Sandeepan (function)"} />
//       <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"} />
//     </div>
//   );
// };

export default About;

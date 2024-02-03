// This is creation of User component using old way of writing code, Class based components
// In class based component we receive props from the constructor keyword with which we write the super keyword

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // creating state in class based components earlier when there were no hooks

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy.com",
      },
    };

    // console.log(this.props.name + "Child Constructor");

    // console.log(props);
  }
  async componentDidMount() {
    // console.log(this.props.name + "child Component Did Mount");
    //Api calls are done in class baased component here , and fill the data inside the component and will re render the component

    const data = await fetch("https://api.github.com/users/sanmazum");
    const json = await data.json();

    this.setState({
      userInfo: json,
      avatar_url: "https://avatars.githubusercontent.com/u/155097600?v=4",
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did Update");
  }

  componentWillUnmount(){
    console.log("Component Will unmounted")
    // unmount means When it will be gone from UI, when we move to any other page. This completes the React LifeCycle methods.
  }

  /* What exactly happened when we actually made an API call - Let's understand the lifecycle method
  
  -------MOUNTING----------
  constructor (loaded with Dummy Data)
  Render(dummy)
   -<HTML Dummy>
  Component Did Mount
  <API Call>
  <this.setState> --> State variable is now updated


  ----UPDATE CYCLE----
  render(API Data)
  <HTML (loadednew API Data)
  componentDidUpdate
  
  
  */



  render() {
    // destructuring the props in class based components
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child render");
    return (
      <div className="user-card">
        <h2>Name :{name} </h2>
        <img src={avatar_url} />
        <h3> Location : {location}</h3>
        <h4> contact:@sanmazum</h4>
      </div>
    );
  }
}

export default UserClass;

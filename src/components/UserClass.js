// This is creation of User component using old way of writing code, Class based components
// In class based component we receive props from the constructor keyword with which we write the super keyword

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // creating state in class based components earlier when there were no hooks

    this.state = {
      count: 0,
      count2 :0 
    };

    console.log(this.props.name + "Child Constructor")

    // console.log(props);
  }
  componentDidMount(){
    console.log ( this.props.name + "child Component Did Mount")
    //Api calls are done in class baased component here , and fill the data inside the component and will re render the component 
  }
  render() {
    // destructuring the props in class based components
    const { name, location } = this.props;
    // destructuring the state in class based components
    const { count, count2} = this.state;

    console.log(this.props.name + "Child render")
    return (
      <div className="user-card">
        <h1> Count = {count}</h1>
        <h1> Count2 = {count2}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE THE STATE VARIABLES DIRECTLY -> this.count= this.count +1 --> It will Create inconsistencies in the code
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count increase
        </button>
        <h2>Name :{name} </h2>
        <h3> Location : {location}</h3>
        <h4> contact : @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

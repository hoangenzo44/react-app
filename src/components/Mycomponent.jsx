import React from "react";
import ChildComponent from "./ChildComponent";
class Mycomponent extends React.Component {
  state = {
    firstname: "",
    lastname: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  render() {
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstname}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastname}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <ChildComponent name={"ERIC"} age={"25"} />
      </>
    );
  }
}
export default Mycomponent;

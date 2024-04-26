// Class based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //state variables
    this.state = {
      userInfo: {
        name: "Abc",
        avatar_url: "No Photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Manik-Arora");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: India</h3>
        <h4>Contact: Manik@13</h4>
      </div>
    );
  }
}

export default UserClass;

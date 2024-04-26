import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About page.</h2>
        <UserClass name={"Manik"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About page.</h2>
//       <User name={"Manik Arora"} />
//       <UserClass name={"Manik Arora(class)"} />
//     </div>
//   );
// };

export default About;

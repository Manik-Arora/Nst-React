import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before it reaches the JS) - Parcel - Babel
//[JSX => Babel Transpiles it to => React.createElement => React element - JS Object => HTMLElement(render)]

const heading = (
  <h1 className="head" tabIndex="5">
    Hi, I'm a H1!
  </h1>
);

//React Components
//Class Based Component - Old way
//Functional Based Component - New way

//React Functional Component - JS functions which return JSX
//it is just a JS function. SO it can also be called inside other component
const Title = () => {
  return <h1 className="head">React component - Heading</h1>;
};

//React element
const Title2 = <h1 className="head">React element - Heading2</h1>;

//Component Composition - Composing 2 or more components together
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      {Title2}
      {console.log("Javascript code works in here")}
      <h2>Hello, Welcome to React functional components </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<HeadingComponent />);

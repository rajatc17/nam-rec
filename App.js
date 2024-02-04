import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = function (props) {
  return (
    <h1 id="heading" rajat="chandra" className="head">
      Hello World from React JSX
    </h1>
  );
};

const name = "Rajat";
const age = 25;
const elem = <span>Nested too deep!</span>;
const ReactElement = (
  <div className="">
    <p>React Element called inside HC</p>
    {elem}
  </div>
);

//React Functional Component => just a JavaScript function that returns JSX
//Everything in React in a component

const Title = () =>(
  <div className="title" tabIndex="5">
    <h2>Title called HC</h2>
  </div>
);
const HeadingComponent = () => (
  <div className="container">
    {/* Component Compostion*/}
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">React Functional Component</h1>
    <h2 className="heading">
      {name}, {age - 1}
    </h2>
    {ReactElement}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeadingComponent());
//root.render(<HeadingComponent />);
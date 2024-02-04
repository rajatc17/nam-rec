import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElemnt  JS Object => HTMLElement(render)
// React element is an object
// Becomes and HTML element when rendered in the DOM

// const head = React.createElement(
//     "h1",
//     { id : "heading", rajat: "chandra"},
//     "Hello World from React, using App.js");

//JSX is an HTML/XML like syntax
// Not valid syntax pure javascript, JS Engine can't read this code
// JSX is transpiled before reaching JS engine (Babel)
// JSX => React.createElement => ReactElemnt JS Object => HTMLElement(render)
// Use CamelCase for HTML attributes in JSXf

const heading = (
  <h1 id="heading" rajat="chandra" className="head">
    Hello World from React JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// converts the object and puts it in the DOM
root.render(heading);

// const parent = React.createElement(
//     "div",
//     {id : "parent"},

//     [React.createElement(
//         "div",
//         {id : "child1"},
//         [React.createElement("h1", {}, "This is Namaste React"),
//          React.createElement("h2",{},"I am an H2 tag")
//         ]
//     ),
//     React.createElement(
//         "div",
//         {id : "child2"},
//         [React.createElement("h1", {}, "I am an H1 tag"),
//          React.createElement("h2",{},"I am an H2 tag")
//         ]
//     )
//     ]
// )

// root.render(parent)

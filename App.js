const head = React.createElement(
    "h1", 
    { id : "heading", rajat: "chandra"}, 
    "Hello World from React, using App.js");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(head) // object with props

root.render(head); // converts the object and puts it in the DOM

// Nested Elements
/*
    <div id="parent">
        <div id="child1">
            <h1>I am an H1 tag</h1>
            <h1>I am an H2 tag</h1>
        </div>
        <div id="child2">
            <h1>I am an H1 tag</h1>
            <h1>I am an H2 tag</h1>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    {id : "parent"},

    [React.createElement(
        "div",
        {id : "child1"},
        [React.createElement("h1", {}, "I am an H1 tag"),
         React.createElement("h2",{},"I am an H2 tag")
        ]
    ),
    React.createElement(
        "div",
        {id : "child2"},
        [React.createElement("h1", {}, "I am an H1 tag"),
         React.createElement("h2",{},"I am an H2 tag")
        ]
    )
    ]
)

console.log(parent)

root.render(parent)
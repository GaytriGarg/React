const heading = React.createElement(
    'h1', 
    {id : 'heading', xyz: 'abc'}, 
    'Hello, React!');
const root = ReactDOM.createRoot(document.getElementById('root')); // entry point to the react app
root.render(heading); // let the react communicate with the DOM and render the heading in the root div

console.log(heading); // will print the object of heading in console

const parent = React.createElement("div", {id : "parent"},
    [
    React.createElement("div", {id : "child1"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h1 tag")]
    ), 
    React.createElement("div", {id : "child2"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h1 tag")])
    ]
    );

root.render(parent);
console.log(parent);

import React from 'react';
import ReactDOM from 'react-dom';

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const heading = <h1 id="heading"> Namaste React using JSX 🚀 </h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
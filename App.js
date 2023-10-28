import React from "react";
import ReactDOM from "react-dom/client";
import Header from './header'

 //const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

//Functional Components

// const Title = () => (
//     <div className= "container">
//         <h1>This is title Component</h1>
//     </div>
// );
// const Title2 = () => (
//     <div className= "container">
//     <h1>This is title2 Component</h1>
//     </div>
// );

// const Heading = () => (
//   <div id= "container">
//   <Title />
//   <Title2 />
//   <h1 id="heading"> Namaste React using JSX 🚀 </h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

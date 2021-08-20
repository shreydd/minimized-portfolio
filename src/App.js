import { useState } from "react";
import "./styles.css";

var workDB = ["Main project", "voice assistant"];

var workMore = [
  "Interned at startup for a period of 1 month and worked on building a mini web conferencing application",
  "A final year project which acts as a personal assistant"
];

var aboutDB = [
  "I'm a CSE grad who can build websites with these tools",
  "And I'm familiar with these as well"
];
var aboutMore = ["HTML | CSS | ReactJS | SQL", "Python | Java | C++"];

var blogDB = ["Substack"];

var blogMore = ["A blog series where I share my thoughts on tech"];

export default function App() {
  var [toggle, setToggle] = useState("");

  const aboutList = () => {
    toggle = aboutDB.map((item, value) => (
      <div key={value} className="listPlace">
        <h4>{item} </h4> <p> {aboutMore[value]} </p>
      </div>
    ));
    setToggle(toggle);
  };

  const workList = () => {
    toggle = workDB.map((item, value) => (
      <div key={value} className="listPlace">
        <h3> {item} </h3> <p> {workMore[value]} </p>
      </div>
    ));
    setToggle(toggle);
  };

  const blogList = () => {
    toggle = blogDB.map((item, value) => (
      <div key={value} className="listPlace">
        <h4> {item} </h4> <p> {blogMore[value]} </p>
      </div>
    ));
    setToggle(toggle);
  };

  // const toggleList = () => {
  //   setToggle(true);
  // };

  return (
    <div className="App">
      <h2 className="Heading">
        {" "}
        <span role="img" aria-label="idea emoji">
          {" "}
          👋
        </span>{" "}
        Name
      </h2>
      <small> Hey there </small>
      <div>
        <button onClick={aboutList}> About </button>
        <button onClick={workList}> Work </button>
        <button onClick={blogList}> Blogs </button>
      </div>
      <hr></hr>
      {toggle}
    </div>
  );
}

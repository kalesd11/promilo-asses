import React from "react";

const About = () => {
  const handleCopyClick = (command) => {
    const textArea = document.createElement("textarea");
    textArea.value = command;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Copied to clipboard!");
  };

  return (
    <div className="text-start container-md mt-3">
      <div className="container text-primary">
        <h2>Project Folder Structure</h2>
        <pre>
          {`/public
|-- index.html
|-- pro.png
/src
|-- /Components
|   |   |-- About.jsx
|   |   |-- LoginPage.jsx
|   |   |-- Navbar.jsx
|   |   |-- Products.jsx
|-- /State
|   |   |-- actions.js
|   |   |-- index.js
|   |   |-- reducers.js
|   |   |-- store.js.css
|app.css
|-- App.js
|-- index.css
|-- index.js
|-- package.json
`}
        </pre>
        <b className="text-success my-4">
          --- Basically It was a simple project so no major challenges for me and happy to get it Done. Thank
          You!
        </b>
        <h3 className="text-warning mt-4">---Guidlines to start the Project...</h3>
        <ul>
          <li>Go to the root folder e.g.promilo.</li>
          <li>Then first run command <button className="btn btn-sm btn-outline-secondary my-1" onClick={()=>handleCopyClick("npm install")}>npm install</button> in order to install required packages.</li>
          <li>After then run command <button className="btn btn-sm btn-outline-secondary my-1" onClick={()=>handleCopyClick("npm start")}>npm start</button> to check the functionality of the project.</li>
          <li>After Log in proccess user can access products page.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

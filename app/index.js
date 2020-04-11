import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/popular";
import Battle from "./components/battle";

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  // JSX is converted to React.createElement by babel
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

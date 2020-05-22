import React, { Component } from "react";
import DemoMap from "./components/DemoMap";
import { mountains } from "./components/utils/Utils"
import "leaflet/dist/leaflet.css";

class App extends Component {
  state = {
    mountains: mountains,
  };

  render() {
    return (
      <div>
        <DemoMap
          mountains={this.state.mountains}
        />
      </div>
    );
  }
}
export default App;
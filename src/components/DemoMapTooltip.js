import React, { Component } from "react";

export default class DemoMapTooltip extends Component {
  render() {
    let mountain = this.props.mountain;
    return mountain ? (
      <div className="resortCard">
        <p>Ten Highest Peaks of the Oregon Cascades<br />
        <b>#{mountain.id}: {mountain.name}</b><br />
        {mountain.elevation} ft.</p>
      </div>
    ) : (
      ""
    );
  }
}
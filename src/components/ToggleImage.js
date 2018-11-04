import * as React from "react";
import Img from "./Img";

class Toggle extends React.Component {
  state = { on: false };

  toggleMe = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <div style={{ width: "600px", margin: "auto" }}>
        <button
          style={{ outline: "none", marginBottom: "10px" }}
          onClick={this.toggleMe}
        >
          Show/Hide
        </button>

        {this.state.on && this.props.children}
      </div>
    );
  }
}

export default () => (
  <Toggle>
    <Img />
  </Toggle>
);

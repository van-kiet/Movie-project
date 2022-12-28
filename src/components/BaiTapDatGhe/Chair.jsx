import React, { Component } from "react";
import { connect } from "react-redux";

class Chair extends Component {
  mappingClass = () => {
    const { hang, dangChon, daDat } = this.props;
    if (dangChon) {
      return "selected";
    }

    if (!hang) {
      return "number";
    }

    if (daDat) {
      return "booked";
    }

    if (!daDat) {
      return "available";
    }
  };
  updateChair = (index, idx) => {
    this.props.dispatch({
      type: "UPDATE_CHAIR",
      payload: { index, idx },
    });
  };
  render() {
    return (
      <div
        onClick={() => this.updateChair(this.props.index, this.props.name - 1)}
        className={`chair ${this.mappingClass()}`}
      >
        {this.props.name}
      </div>
    );
  }
}
export default connect()(Chair);

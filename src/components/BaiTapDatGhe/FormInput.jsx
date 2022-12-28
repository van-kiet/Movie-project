import React, { Component } from "react";

export default class FormInput extends Component {
  render() {
    return (
      <div className="bg2">
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            <div className="inputForm">
              <ul className="seat_type">
                <li className="smallBox greenBox">Selected Seat</li>
                <li className="smallBox redBox">Reserved Seat</li>
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>
              <p className="tb" id="tb">
                Please Select your Seats NOW!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Bill from "./Bill";
import ChairMovie from "./ChairMovie";

export default class FormInput extends Component {
  render() {
    return (
      <div className="bg2">
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            <div className="inputForm">
              <p className="tittle pt-4">
                fill the required details below and select your seats
              </p>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Names
                    <span>*</span>
                  </label>
                  <input className="input" type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input
                    className="input"
                    type="number"
                    id="Numseats"
                    required
                    min={1}
                  />
                </div>
              </div>
              <button className="btn btn-light p-2 m-3" onclick="takeData()">
                Start Selecting
              </button>
              <ul className="seat_type">
                <li className="smallBox greenBox">Selected Seat</li>
                <li className="smallBox redBox">Reserved Seat</li>
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>

              <p className="tb" id="tb">
                Please Select your Seats NOW!
              </p>
              <ChairMovie />
              <h2>SCREEN THIS WAY</h2>
              <Bill />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

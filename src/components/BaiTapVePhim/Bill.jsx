import React, { Component } from "react";

export default class Bill extends Component {
  render() {
    return (
      <div>
        <button className="btn confirm btn-light">ConFirm Selection</button>
        <div className="end">
          <table>
            <tbody>
              <tr>
                <th className="bgForTh">Name</th>
                <th className="bgForTh">Number of Seats</th>
                <th className="bgForTh">Seats</th>
                <th className="bgForTh">Total money</th>
              </tr>
              <tr>
                <td>
                  <textarea
                    className="textarea"
                    style={{ resize: "none" }}
                    id="nameDisplay"
                    disabled
                  ></textarea>
                </td>
                <td>
                  <textarea
                    className="textarea"
                    style={{ resize: "none" }}
                    id="NumberDisplay"
                    disabled
                  ></textarea>
                </td>
                <td>
                  <textarea
                    className="textarea"
                    style={{ resize: "none" }}
                    id="seatsDisplay"
                    disabled
                  ></textarea>
                </td>
                <td>
                  <textarea
                    className="textarea"
                    style={{ resize: "none" }}
                    id="moneyDisplay"
                    disabled
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tittle pt-4">
          © 2022 Movie Seat Selection . All Rights Reserved | Design by
          Chuskitt0104
        </p>
      </div>
    );
  }
}

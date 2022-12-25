import React, { Component } from "react";
import data from "../../data/danhSachGhe.json";
import ChairItem from "./ChairItem";
export default class ChairMovie extends Component {
  renderChair = () => {
    const dataFilter = data.filter((ele) => {
      return ele.hang != "";
    });
    return dataFilter.map((ele) => {
      return <ChairItem element={ele} key={ele.hang} />;
    });
  };

  render() {
    return (
      <div>
        <table className="chairTable">
          <tbody>
            <tr className="hang">
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            {this.renderChair()}
          </tbody>
        </table>
      </div>
    );
  }
}

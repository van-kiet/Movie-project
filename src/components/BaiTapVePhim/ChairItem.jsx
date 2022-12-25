import React, { Component } from "react";
export default class ChairItem extends Component {
  disabledInput = (idx) => {
    const props = this.props.element.danhSachGhe;
    if (props[idx].daDat) {
      console.log("hehe");
      return "hehe";
    }
    return;
  };
  mappingClass = (idx) => {
    const props = this.props.element.danhSachGhe;

    if (props[idx].dangChon) {
      return "selected";
    }

    if (props[idx].daDat) {
      return "booked";
    }

    if (!props[idx].daDat) {
      return "available";
    }
  };

  render() {
    const props = this.props.element.danhSachGhe;
    return (
      <>
        <tr>
          <td className="hang">{this.props.element.hang}</td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(0)}`}
              defaultValue={props[0].soGhe}
              disabled="none"
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(1)}`}
              defaultValue={props[1].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(2)}`}
              defaultValue={props[2].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(3)}`}
              defaultValue={props[3].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(4)}`}
              defaultValue={props[4].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(5)}`}
              defaultValue={props[5].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(6)}`}
              defaultValue={props[6].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(7)}`}
              defaultValue={props[7].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(8)}`}
              defaultValue={props[8].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(9)}`}
              defaultValue={props[9].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(10)}`}
              defaultValue={props[10].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
          <td>
            <input
              type="checkbox"
              className={`seats ${this.mappingClass(11)}`}
              defaultValue={props[11].soGhe}
              disabled={this.disabledInput(1)}
            />
          </td>
        </tr>
      </>
    );
  }
}

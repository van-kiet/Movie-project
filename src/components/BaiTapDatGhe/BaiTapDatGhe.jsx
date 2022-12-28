import React, { Component } from "react";
import { connect } from "react-redux";
// import chairList from "../../data/danhSachGhe.json";
import Bill from "./Bill";
import Chair from "./Chair";
import FormInput from "./FormInput";

import "./style.scss";

class BaiTapDatGhe extends Component {
  renderContent = () => {
    return this.props.List.map((ele, index) => {
      return (
        <div key={ele.hang}>
          <div className="seat">{ele.hang}</div>
          {ele.danhSachGhe.map((chair, idx) => {
            return (
              <Chair
                key={chair.soGhe}
                hang={ele.hang}
                name={idx + 1}
                dangChon={chair.dangChon}
                daDat={chair.daDat}
                index={index}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="background ">
        <div className="row">
          <div className="col-8 pb-5">
            <FormInput />
            {this.renderContent()}
          </div>
          <div className="col-4 billBig ">
            <Bill />
          </div>
        </div>
        <p className="tittle  pb-2">
          © 2022 Movie Seat Selection . All Rights Reserved | Design by
          Chuskitt0104
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    List: state.movieReducer.ChairData,
  };
};

export default connect(mapStateToProps)(BaiTapDatGhe);

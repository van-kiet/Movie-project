import React, { Component } from "react";
import { connect } from "react-redux";

class Bill extends Component {
  renderBill = () => {
    const listSelected = [];
    const chair = this.props.ChairData;
    for (let i in this.props.SelectedChair) {
      const { index, idx } = this.props.SelectedChair[i];
      listSelected.push(chair[index].danhSachGhe[idx]);
    }
    return listSelected.map((ele) => {
      return (
        <tr key={ele.soGhe}>
          <td>{ele.soGhe}</td>
          <td>{ele.gia}</td>
          <td>x</td>
        </tr>
      );
    });
  };
  totalMoney = () => {
    const listSelected = [];
    let sum = 0;
    const chair = this.props.ChairData;
    for (let i in this.props.SelectedChair) {
      const { index, idx } = this.props.SelectedChair[i];
      listSelected.push(chair[index].danhSachGhe[idx]);
    }
    // document.getElementById("totalMoney").style.display = "block";
    for (let i in listSelected) {
      sum += listSelected[i].gia;
    }
    return sum;
  };
  bookChair = () => {
    this.props.dispatch({
      type: "BOOK_CHAIR",
    });
    this.totalMoney();
  };
  render() {
    return (
      <div>
        <button onClick={this.bookChair} className="btn confirm btn-light">
          ConFirm Selection
        </button>
        <div>
          <table className="bill">
            <tbody>
              <div className="tbc">
                <tr>
                  <th>Seats</th>
                  <th>Total Money</th>
                  <th>Cancel</th>
                </tr>
                {this.renderBill()}
                <tr id="totalMoney">
                  <td>Total Money</td>
                  <td>{this.totalMoney()}</td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    SelectedChair: state.movieReducer.SelectedChair,
    ChairData: state.movieReducer.ChairData,
  };
};
export default connect(mapStateToProps)(Bill);

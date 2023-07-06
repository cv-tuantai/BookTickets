import React, { Component } from "react";
import { connect } from "react-redux";

class BookingInfo extends Component {
  renderInfo = () => {
    return this.props.bookingTickets.map((ticket, index) => {
      return (
        <tr
          className="font-weight-bold text-center"
          style={{ color: "#19f64b" }}
          key={index}
        >
          <td>{ticket.soGhe}</td>
          <td>{ticket.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.removeTicket(ticket.soGhe);
              }}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h2 className="mt-2">DANH SÁCH GHẾ BẠN CHỌN</h2>
        <button className="gheDuocChon mt-5"></button>
        <span style={{ fontSize: "25px" }}> Ghế đã đặt</span>
        <br />
        <button className="gheDangChon"></button>
        <span style={{ fontSize: "25px" }}> Ghế đang chọn</span>
        <br />
        <button className="ghe"></button>
        <span style={{ fontSize: "25px" }}> Ghế chưa đặt</span>
        <br />
        <table className="table mt-3" border={2}>
          <thead>
            <tr className="text-light text-center">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderInfo()}</tbody>
          <tfoot>
            <tr className="text-warning font-weight-bold text-center">
              <td>Tổng tiền:</td>
              <td>
                {this.props.bookingTickets
                  .reduce((total, ticket) => {
                    return (total += ticket.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTickets: state.bookTicketsReducer.bookingTickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTicket: (seat) => {
      const action = {
        type: "REMOVE_TICKET",
        payload: seat,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);

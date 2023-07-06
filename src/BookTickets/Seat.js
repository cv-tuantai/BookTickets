import React, { Component } from "react";
import { connect } from "react-redux";

class Seat extends Component {
  renderRow = () => {
    return this.props.seat.danhSachGhe.map((ticket, index) => {
      // ticketIndex để tìm ghế đã có trên state chưa
      const ticketIndex = this.props.bookingTickets.findIndex(
        (seat) => seat.soGhe === ticket.soGhe,
      );
      return (
        // Dùng toán tử ba ngôi: nếu daDat=true thì thêm class gheDuocChon, nếu không thì kiểm tra ghế đã có trên state bookingTickets (vé đang đặt) chưa, nếu đã có thì thêm class gheDangChon, nếu không thì thêm class ghe
        <button
          className={
            "ml-3 " +
            (ticket.daDat
              ? "gheDuocChon"
              : ticketIndex !== -1
              ? "gheDangChon"
              : "ghe")
          }
          key={index}
          onClick={() => {
            this.props.chooseSeat(ticket);
          }}
        >
          {ticket.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div
        className="text-warning mt-3"
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {this.props.seat.hang}
        {this.renderRow()}
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
    chooseSeat: (seat) => {
      const action = {
        type: "CHOOSE_SEAT",
        payload: seat,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);

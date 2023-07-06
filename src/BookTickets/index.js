import React, { Component } from "react";
import "./style.css";
import BookingInfo from "./BookingInfo";
import dataSeat from "./danhSachGhe.json";
import Seat from "./Seat";

export default class BookTickets extends Component {
  renderSeat = () =>
    dataSeat.map((seat, index) => <Seat key={index} seat={seat} />);

  render() {
    const background = {
      backgroundImage: "url(./movieImg/bgmovie.jpg)",
      height: "100vh",
      backgroundSize: "cover",
    };

    const cover = {
      backgroundColor: "rgba(0,0,0,0.6)",
      height: "100vh",
    };

    return (
      <div style={background}>
        <div style={cover}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h2 className="text-warning mt-2">ĐẶT VÉ XEM PHIM ONLINE</h2>
                <div className="text-light" style={{ fontSize: "20px" }}>
                  Màn hình
                </div>
                <div className="d-flex justify-content-center">
                  <div className="screen"></div>
                </div>
                {this.renderSeat()}
              </div>
              <div className="col-4 text-light">
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

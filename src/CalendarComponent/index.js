import React, { Component } from "react";
import Calendar from "../Calendar";
import InputForm from "../InputForm";
import "../css/bootstrap.min.css";

class CalendarComponent extends Component {
  state = {
    events: [],
  };

  componentDidMount = () => {};

  getReservations = async (year, month) => {
    const api = await fetch("/reservations/" + year + "/" + month);
    let events = [];
    if (api.ok) {
      events = await api.json();
    }
    this.setState({
      events,
    });
    return events;
  };

  createReservations = async (data) => {
    console.log("## data: " + JSON.stringify(data));

    const api = await fetch("/reservations", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (api.ok) {
      // const events = await api.json();
      // shuccefully created reservation
    }
  };

  getCalendarData = async (fetchInfo, successCallback, failureCallback) => {
    // this.setState({ successCallback, failureCallback });
    console.log("### successCallback", successCallback);
    console.log("### failureCallback", failureCallback);
    try {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;

      if (fetchInfo) {
        year = new Date(fetchInfo.start).getFullYear();
        month = new Date(fetchInfo.start).getMonth() + 1;
      }

      const api = await fetch("/reservations/2022/12");
      let reservations = [];
      if (api.ok) {
        reservations = await api.json();
      }

      console.log("Before");
      // await this.props.reservations(year, month);
      console.log("After");
      successCallback(
        reservations.map((event) => {
          return {
            id: event.id,
            title: event.description,
            start: event.start_date,
            end: event.end_date,
          };
        })
      );

      failureCallback(
        this.events.map((event, index) => {
          return {
            id: index,
            title: event.name,
            start: event.datetime_start,
            end: event.datetime_finish,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-9">
              <Calendar
                // data={this.state.events}
                reservations={this.getReservations}
                getCalendarData={this.getCalendarData}
              />
            </div>
            <div className="col-md-3">
              <InputForm createReservations={this.createReservations} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarComponent;

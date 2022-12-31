import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "../css/bootstrap.min.css";

class Calendar extends Component {
  state = {};

  openEvent = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          eventClick={(e) => this.openEvent(e)}
          events={(fetchInfo, successCallback, failureCallback) =>
            this.props.getCalendarData(
              fetchInfo,
              successCallback,
              failureCallback
            )
          }
          editable={true}
          selectable={true}
        />
      </div>
    );
  }
}

export default Calendar;

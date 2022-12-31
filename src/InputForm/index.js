import React, { Component } from "react";

class InputForm extends Component {
  state = {
    title: "",
    mobile_no: 0,
    description: "",
    departure: "",
    return: "",
    email: "",
    user_name: "",
  };

  componentDidMount = () => {};

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = () => {
    const data = {
      title: this.state.title,
      mobile_no: this.state.mobile_no,
      description: this.state.description,
      start_date: this.state.departure,
      end_date: this.state.return,
      email: this.state.email,
      user_name: this.state.user_name,
    };

    this.props.createReservations(data);
  };

  handleCancel = () => {
    this.setState({
      title: "",
      mobile_no: 0,
      description: "",
      departure: "",
      return: "",
      email: "",
      user_name: "",
    });
  };

  render() {
    return (
      <div>
        <div className="cardt rounded-0 shadow">
          <div className="card-header bg-gradient bg-primary text-light">
            <h5 className="card-title">Schedule Form</h5>
          </div>
          <div className="card-body">
            <div className="container-fluid">
              <div className="mb-2">
                <div className="control-label">Title </div>
                <input
                  placeholder="Title"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-2">
                <div className="control-label">Description </div>
                <input
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-2">
                <div className="control-label">Email </div>
                <input
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-2">
                <div className="control-label">User Name </div>
                <input
                  name="user_name"
                  id="user_name"
                  value={this.state.user_name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-2">
                <div className="control-label">Mobile No </div>
                <input
                  type="number"
                  name="mobile_no"
                  id="mobile_no"
                  value={this.state.mobile_no}
                  // onChange={(event) => {
                  //   this.handleChange("mobile_no", event);
                  // }}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-2">
                <div className="control-label">Depearture </div>
                <input
                  name="departure"
                  id="departure"
                  type="datetime-local"
                  value={this.state.departure}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-2">
                <div className="control-label">Return </div>
                <input
                  name="return"
                  id="return"
                  type="datetime-local"
                  value={this.state.return}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="card-footer row">
            <div className="col-md-6 text-center">
              <button
                className="btn btn-primary btn-sm rounded-0"
                onClick={this.handleSubmit}
              >
                <i className="fa fa-save"></i> Save
              </button>
            </div>
            <div className="col-md-6 text-center">
              <button
                className="btn btn-default border btn-sm rounded-0"
                onClick={this.handleCancel}
              >
                <i className="fa fa-reset"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputForm;

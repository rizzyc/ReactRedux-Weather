import React, { Component } from "react";

export default class SearchBar extends Component {
  // local component state
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // https://openweathermap.org/forecast5
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <div className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

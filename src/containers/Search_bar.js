import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

export class SearchBar extends Component {
  // local component state
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // https://openweathermap.org/forecast5 Go Fetch Weather
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeather } from "./actions";

class Widget extends Component {
  constructor() {
    super();

    // initial state
    this.state = { fieldVal: "" };

    // bound methods for event handling
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Parse temperature eg. 5°C
  parseTemperature(main) {
    if (!main) return "n/a";
    const { temp } = main;
    if (!temp) return "n/a";

    return `${Math.round(temp)}°C`;
  }

  // Parse humidity eg 65
  parseHumidity(main) {
    if (!main) return "n/a";
    const { humidity } = main;
    if (!humidity) return "n/a";

    return humidity;
  }

  // Parse wind eg. 11 m/s Øst
  parseWind(wind) {
    if (!wind) return "n/a";
    const { deg, speed } = wind;
    if (!deg || !speed) return "n/a";
    let direction;

    // Set direction
    if (deg < 45 || deg > 315) {
      direction = "Nord";
    } else if (deg < 125) {
      direction = "Øst";
    } else if (deg < 225) {
      direction = "Syd";
    } else {
      direction = "Vest";
    }

    return `${speed} m/s ${direction}`;
  }

  // Store search field value changes in state
  handleChange(e) {
    this.setState({ fieldVal: e.target.value });
  }

  // Handle async form submit
  handleSubmit(e) {
    e.preventDefault();
    const { fieldVal } = this.state;
    const history = createHistory();
    this.props.getWeather(fieldVal);
    history.push({ search: `?city=${fieldVal}` });
    this.setState({ fieldVal: "" });
  }

  render() {
    const { name, status, main, wind } = this.props;
    return (
      <div className="widget" style={{ margin: "10px", width: "300px" }}>
        <div className="panel panel-info">
          <div className="panel-heading">
            Weather in <b>{name}</b>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              Temperature: <b>{this.parseTemperature(main)}</b>
            </li>
            <li className="list-group-item">
              Humidity: <b>{this.parseHumidity(main)}</b>
            </li>
            <li className="list-group-item">
              Wind: <b>{this.parseWind(wind)}</b>
            </li>
            <li className="list-group-item">
              <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    placeholder="City"
                    value={this.state.fieldVal}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Search
                </button>
              </form>
            </li>
            {status === "404" && (
              <li className="list-group-item">
                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ margin: 0 }}>
                  No city found by that name
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  name: state.name,
  status: state.cod,
  main: state.main,
  wind: state.wind
});

const mapDispatch = dispatch => bindActionCreators({ getWeather }, dispatch);

export default connect(mapState, mapDispatch)(Widget);

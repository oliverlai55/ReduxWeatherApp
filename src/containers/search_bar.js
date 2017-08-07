import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //we are binding 'this' to SearchBar
    //When we pass callback, and makes the reference to "this" is here, it won't know what "this" is.  So this has to be bind to the context of onInputChange function

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //don't submit the form
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
  //causes action creator with dispatch, action flows down to middleware, and then the reducer
  // dispatch take what gets return from action creators to flow through reducer
}

export default connect(null, mapDispatchToProps)(SearchBar);
// first param is null because the DispatchToProps has to be the 2nd argument.  The first one is mapStateToProps

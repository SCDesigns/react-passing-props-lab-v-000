/*
All Moved to App.js
class Filter extends Component {
    constructor() {
    super();

    this.state = {
      filters: []
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }


  render() { */
import React from 'react';

const Filter = props =>
  <select onChange={props.handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {props.filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>

  Filter.defaultProps = {
    handleChange: '',
    filters: '',
  }

export default Filter;

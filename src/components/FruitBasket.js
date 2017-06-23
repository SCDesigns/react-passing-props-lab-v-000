/*
All Moved to App.js
class FruitBasket extends Component {
    constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }
  render() {
    return (
*/
import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
  <div className="fruit-basket">
    <Filter filters={props.filters} handleChange={props.handleFilterChange} />
    <FilteredFruitList fruit={props.fruit} filter={props.currentFilter} />
  </div>

FruitBasket.defaultProps = {
  fruit: '',
  filters: '',
  currentFilter: '',
  updateFilterCallback: ''
}

export default FruitBasket;

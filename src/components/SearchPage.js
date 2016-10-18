import React, { Component } from 'react';
import MapActions from '../actions/MapActions';
import SearchTable from './SearchTable';
import API from '../API';

export default class SearchPage extends Component {
  constructor () {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch (e) {
    e.preventDefault();
    let {searchInput, categoryInput} = this.refs;
    let searchTerm = {
      place: searchInput.value,
      category: categoryInput.value
    }
    MapActions.fetchSearchResults(searchTerm)
  }

  render () {
    return (
      <div className='componentContainer'>
        <h1>Search Places</h1>
        <form onSubmit={this.submitSearch} >
          <input ref='searchInput' type='text' className='form-control searchBar' placeholder='Enter city' />
          <input ref='categoryInput' type='text' className='form-control searchBar' placeholder='Category ex: fast food'/>
          <button className='btn btn-primary' >Search</button>
        </form>
        <SearchTable />
      </div>
    );
  }
}

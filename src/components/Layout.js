import React, { Component } from 'react';
import { Link } from 'react-router';
import MapStore from '../stores/MapStore';

export default class Layout extends Component {
  constructor () {
    super();

    this.state = {
      results: MapStore.getResults()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    MapStore.startListening(this._onChange);
  }

  componentWillUnmount () {
    MapStore.stopListening(this._onChange);
  }

  _onChange () {
    this.setState({
      results: MapStore.getResults()
    });
  }
  render () {
    let { results } = this.state;
    console.log('results in component: ', results);

    return (
      <div className='mainContainer'>
        <div className='navbar navbar-inverse navbar-fixed-left'>
          <ul className='nav navbar-nav'>
            <li>Google Maps</li>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/search'>Search</Link></li>
          </ul>
        </div>
        <div className='container'>
          <div>
            <div className='pageContainer'>
            {this.props.children}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

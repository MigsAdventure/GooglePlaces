import React, { Component } from 'react';
import MapActions from '../actions/MapActions';
import MapStore from '../stores/MapStore';
import uuid from 'uuid';

export default class SearchTable extends Component {
  constructor () {
    super();

    this.state = {
      results: MapStore.getResults(),
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
      results: MapStore.getResults(),
    });
  }

  render () {
    let { results } = this.state;
    console.log('RESULTS: ',results)
    return (
      <div>
        {
          results.map(place => {
            return (
            <div id={place.id} key={place.id} className='col-xs-3'>
              <img src={place.icon}/>
              <h2>{place.name}</h2>
            </div>
            )
          })
        }
      </div>
     )
  }
}

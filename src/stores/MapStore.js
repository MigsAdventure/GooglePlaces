import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _searchResults = [];

class MapStore extends EventEmitter {
  constructor () {
    super();

    AppDispatcher.register((action) => {
      let {type, payload} = action;
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS' : {
          _searchResults = payload.results;
          this.emit('CHANGE')
        }break;
      }//end of switch
    });//end of appDispatcher
  }//end of constructor

  startListening (cb) {
    this.on('CHANGE', cb);
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb);
  }

  getResults() {
    return _searchResults;
  }
  
}

export default new MapStore();

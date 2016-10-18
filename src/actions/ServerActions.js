import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveSearchResults (results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { results }
    });
  },

}
export default ServerActions;

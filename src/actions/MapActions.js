import API from '../API';

const MapActions = {
  fetchSearchResults (searchTerm) {
    API.fetchSearchResults(searchTerm);
  },

};

export default MapActions;

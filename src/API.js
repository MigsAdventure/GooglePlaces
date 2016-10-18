import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  fetchSearchResults (searchTerm) {
    axios.get(`/api/maps/search?place=${searchTerm.place}&&category=${searchTerm.category}`)
    .then((res) => {
      ServerActions.receiveSearchResults(res.data);
    })
    .catch((err) => {
      console.log('ERROR! API.receiveSearchResults', err);
    });
  },
};

export default API;

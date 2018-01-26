import axios from 'axios';

const BASE_URL = 'http://his-data.herokuapp.com/parse';

export {getRegistrations};

function getRegistrations() {
  const url = `${BASE_URL}/classes/Registration`;
  return axios.get(url).then(response => response.data);
}

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://electrical-helper.firebaseio.com/'
});

export default instance;
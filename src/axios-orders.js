import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-365af.firebaseio.com/'
});

export default instance;
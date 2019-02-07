import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://blog-lab63.firebaseio.com/'
});

export default instace;
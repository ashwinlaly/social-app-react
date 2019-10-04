import axios from 'axios';

const get = (url) => {
    axios.get(`${url}`,{headers : { accept: 'application/json','token' : '123' } }).then((res) => {
        return res;
    });
}

export default get;
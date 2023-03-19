import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults : 5,
        key:'AIzaSyDfM5mwDQvr6VIhVRtxN3wnyZn1j9BnfFE'
    }
})
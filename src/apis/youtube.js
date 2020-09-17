import axios from 'axios';

const KEY = 'AIzaSyAJXGowzemfGF9dfE-ON_mRcEGOnK2ez6I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
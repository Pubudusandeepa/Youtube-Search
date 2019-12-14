import axios from 'axios';

const KEY = 'AIzaSyCasrZnM0TXk1i07X06olu4tE7CbNpP2OE';

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3',
  params:{
      part: 'snippet',
      maxResults: 5,
      key: KEY

  }
});


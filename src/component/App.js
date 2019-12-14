import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import Axios from 'axios';
class App extends  React.Component{
onTermSubmit = async term =>{
   const APIKEY = 'AIzaSyCasrZnM0TXk1i07X06olu4tE7CbNpP2OE';
     try{
       const response = await Axios.get(' https://www.googleapis.com/youtube/v3/search',{
        params:{
          q: term,
          part: 'snippet',
          maxResults:5,
          key:APIKEY
        } 
       });
       this.setState({
         videos: response.data.items,
         selectedVideos: response.data.items[0]
       
       });
    
     }
     catch(err){
      console.error(err.message);
    }
   };

   render(){
    return (
    <div className="ui container">
    <SearchBar onFormSubmit={this.onTermSubmit}/></div>
    );
}

}


 


export default App;
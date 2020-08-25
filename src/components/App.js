import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

const KEY = 'AIzaSyDsDjR6I02Xph7zp4c3eaVw2wL8688b7Kk';

class App extends React.Component {


    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });
        console.log(response);
      };

    render(){
        return(
            <div className="ui container">
                <SearchBar formSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;
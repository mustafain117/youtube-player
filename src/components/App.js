import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
const KEY = 'AIzaSyDsDjR6I02Xph7zp4c3eaVw2wL8688b7Kk';

class App extends React.Component {

    state = {videos: []}

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

        console.log(response.data.items)
        this.setState({videos: response.data.items})
      };

    render(){
        return(
            <div className="ui container">
                <SearchBar formSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
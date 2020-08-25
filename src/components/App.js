import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
const KEY = 'AIzaSyDsDjR6I02Xph7zp4c3eaVw2wL8688b7Kk';

class App extends React.Component {

    state = {videos: [], selectedVideo: null }

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

        this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) => {
      this.setState({selectedVideo : video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar formSubmit={this.onTermSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyDsDjR6I02Xph7zp4c3eaVw2wL8688b7Kk';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVid, setSelectedVid] = useState(null);

    // componentDidMount() {
    //   this.onTermSubmit('Uefa Champions League');
    // }
    useEffect(() => {
      onTermSubmit('Uefa Champions League');
    }, []);

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });

        setVideos(response.data.items);
        setSelectedVid(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
      // this.setState({selectedVideo : video});
      setSelectedVid(video);
    }


  return(
      <div className="ui container">
          <SearchBar formSubmit={onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVid}/>
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
              </div>
            </div>
          </div>
      </div>
  );
    
}

export default App;
import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {

    const vidList = videos.map((vid) => {
        return <VideoItem key={vid.id.videoId} video={vid}/>
    })
    
    return (
        <div>
            {vidList}
        </div>
    )
}

export default VideoList;
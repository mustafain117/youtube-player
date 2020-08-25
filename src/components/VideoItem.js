import React from 'react'

const VideoItem = ({video}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description} ></img>
            {video.snippet.title}
        </div>
    )
}

export default VideoItem;
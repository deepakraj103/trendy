import React from 'react';
import VideoPlayer from 'react-video-js-player';
 
const WebVideoPlayer = ({media}) => {

        return (

                <VideoPlayer
                    controls={false}
                    autoplay ={true}
                    src={media}
                    // poster={media}
                    width="100%"
                    height="420"
                />
        );

}
export default WebVideoPlayer;
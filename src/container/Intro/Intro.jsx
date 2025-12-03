import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false)

    // useRef gives us direct access to the 
    // actual <video> element in the DOM.
    const vidRef = useRef()

    const handleVideo = () => {

        // This flips the value:
        // false → true
        // true → false

        // NOTE: This does NOT update right away.
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        // IMPORTANT:
        // Because state updates are async(updates later), 
        // 'playVideo' still contains the OLD value here.
        if (playVideo) {
            vidRef.current.pause()
        } else {
            vidRef.current.play()
        }
    }

    return (
        <div className="app__video">
            <video 
                src={meal}
                ref={vidRef}
                typeof="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay flex__center">
                <div 
                    className="app__video-overlay_circle flex__center"
                    onClick={handleVideo}>
                        {playVideo
                            ? <BsPauseFill color="#fff" fontSize={40} /> 
                            : <BsFillPlayFill color="#fff" fontSize={40} />
                        }
                </div>
            </div>
        </div>
    )
}


export default Intro;

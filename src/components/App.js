import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos"

const KEY = 'AIzaSyD2sjFLp9wMmy_Uo5bro8_1YN-9nmOs8tc';

 const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
     const [videos, onTermSubmit] = useVideos("Javascript")

     useEffect(() => {
        setSelectedVideo(videos[0]);
     }, [videos])



    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className = "ui row"> 
                <div className = "eleven wide column">
                <VideoDetail video={selectedVideo} />
                </div>
                <div className = "five wide column">
                <VideoList 
                        onVideoSelect={setSelectedVideo}
                        videos={videos}
                    />
                </div> 
                </div>
            </div>
        </div>
    );

 }


export default App;
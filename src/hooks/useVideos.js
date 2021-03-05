import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = 'AIzaSyD2sjFLp9wMmy_Uo5bro8_1YN-9nmOs8tc';

const useVideos = (defaulSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onTermSubmit(defaulSearchTerm);
    }, [defaulSearchTerm]);

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 20,
                type: 'video',
                key: KEY
            }
        });

        setVideos(response.data.items)
       

    };

    return [videos, onTermSubmit];

}

export default useVideos;
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import ArtistsButton from './ArtistsButton';
import './ButtonList.css';

function ArtistsButtonList () {
    const [artistsButtonList, setArtistsButtonList] = useState([]);

    useEffect(() => {
        const url = "https://jsonserver-pulsr-d8e0ef7fe091.herokuapp.com/artists";
        Axios
            .get(url)
            .then((response) => setArtistsButtonList(response.data))
            .catch(error => console.log(`API call error: ${error}`))
    }, []);


    return (
        <div className = "searchDiv">
            {artistsButtonList.map((button) =>             
                <ArtistsButton {...button} key={button.index} />
            )}
        </div>
    )
}


export default ArtistsButtonList;
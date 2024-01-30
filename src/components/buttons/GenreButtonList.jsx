import React, { useState, useEffect } from 'react';
import Axios from "axios";
import GenreButton from './GenreButton';
import './ButtonList.css';

function GenreButtonList () {
    const [genreButtonList, setGenreButtonList] = useState([]);

    useEffect(() => {
        const url = "https://jsonserver-pulsr-d8e0ef7fe091.herokuapp.com/genres";
        Axios
            .get(url)
            .then((response) => setGenreButtonList(response.data))
            .catch(error => console.log(`API call error: ${error}`))
    }, []);


    return (
        <div className = "searchDiv">
            {genreButtonList.map((button) =>             
                <GenreButton {...button} key={button.index} />
            )}
        </div>
    )
}


export default GenreButtonList;
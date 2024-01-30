import React, { useState, useEffect } from 'react';
import Axios from "axios";
import PlacesButton from './PlacesButton';
import './ButtonList.css';

function PlacesButtonList () {
    const [placesButtonList, setPlacesButtonList] = useState([]);

    useEffect(() => {
        const url = "https://jsonserver-pulsr-d8e0ef7fe091.herokuapp.com/places";
        Axios
            .get(url)
            .then((response) => setPlacesButtonList(response.data))
            .catch(error => console.log(`API call error: ${error}`))
    }, []);


    return (
        <div className = "searchDiv">
            {placesButtonList.map((button) =>             
                <PlacesButton {...button} key={button.index} />
            )}
        </div>
    )
}


export default PlacesButtonList;
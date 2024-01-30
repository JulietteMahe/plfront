import React, { useState, useEffect } from 'react';
import Axios from "axios";
import LabelsButton from './LabelsButton';
import './ButtonList.css';

function LabelsButtonList () {
    const [labelButtonList, setLabelsButtonList] = useState([]);

    useEffect(() => {
        const url = "https://jsonserver-pulsr-d8e0ef7fe091.herokuapp.com/labels";
        Axios
            .get(url)
            .then((response) => setLabelsButtonList(response.data))
            .catch(error => console.log(`API call error: ${error}`))
    }, []);


    return (
        <div className = "searchDiv">
            {labelButtonList.map((button) =>             
                <LabelsButton {...button} key={button.index} />
            )}
        </div>
    )
}


export default LabelsButtonList;
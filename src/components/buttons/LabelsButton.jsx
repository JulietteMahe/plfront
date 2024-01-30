import React, { useState, useEffect } from 'react'
import './SearchButton.css'

function Label (props) {
    const [isSelected, setIsSelected] = useState(false);
    const [searchParam, setSearchParam] = useState(false);

    function handleClickSelected(e) {
        e.preventDefault();
        if (isSelected) {
            setIsSelected(!isSelected);
            setSearchParam(!searchParam);
        } else if (!isSelected) {
            setIsSelected(!isSelected);
            setSearchParam(!searchParam);
        }
    }

    return (
        <div className={ isSelected ? 'active-items' : 'menu-items'} onClick={handleClickSelected} value = {searchParam} key ={props.name}>  
           {props.name}          
        </div>
    )
}

export default Label
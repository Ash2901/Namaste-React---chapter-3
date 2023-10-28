import React from 'react';
import Image from './images/logo.jpg';
import User from './images/user.jpg';
import Search from './images/search.png';

export default Header = () => {
    function click () {
        alert("Hello World!");
    }
    return (
        <div id = "container">
            <div id="logo">
                <img src={Image} alt='My logo'></img>
            </div>
            <div id="bar">
                <input id ="search"></input>
                <img src={Search} alt='search bar' onClick={click}></img>
            </div>
            <div id="user"> 
                <img src={User} alt="User"></img>
            </div>
        </div>
    )
}
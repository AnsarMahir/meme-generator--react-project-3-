import React from "react";
import image from "../images/Troll Face.png";


export default function Header(){
    return(
        <header className="header">
            <img className="header--image" src={image}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
        
    )
}
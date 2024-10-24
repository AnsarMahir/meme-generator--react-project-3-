import React from "react";
import memeData from "../memeData";

export default function Meme(){
    let url;
    function handleClick(){
        let memesArray = memeData.data.memes;
        let number =  Math.floor(Math.random() * memesArray.length);
        console.log(url = memeData.data.memes[number].url);
    }

    function hanleMouseOver(){
        console.log("Mouseover")
    }
    return(
        <main>
        <p>{url}</p>
        <div className="meme--form">
            <input type="text" name="top" className="meme--input" placeholder="Top text"></input>
            <input type="text" name="bottom" className="meme--input" placeholder="Bottom text"></input>
            <button type="submit" onClick={handleClick} className="meme--button">Get a new image</button>
        </div>
        </main>
    )
}
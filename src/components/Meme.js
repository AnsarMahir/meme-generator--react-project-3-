import React from "react";

export default function Meme(){
    return(
        <form className="meme--form">
            <div className="meme--inputs">
                <label for="top text">top text</label>
                <input type="text" name="top"></input>
                <label for="bottom text">bottom text</label>
                <input type="text" name="bottom"></input>
            </div>
            <button type="submit" className="meme--button">Get a new image</button>
        </form>
    )
}
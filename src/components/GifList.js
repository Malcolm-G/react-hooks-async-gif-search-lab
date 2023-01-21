import React,{} from "react";

function GifList({gifs}){

    const gifList = gifs.map((gif,index)=>(
        <li key={`gifs_`+index} >
            <img src={gif} alt="A Gif" />
        </li>
    ))

    return(
        <ul >
            {gifList}
        </ul>
    )
}

export default GifList
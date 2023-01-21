import React,{ useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
import "bootstrap/dist/css/bootstrap.css";
import './GifListContainer.css';


const TRENDING_API = `https://api.giphy.com/v1/gifs/trending?api_key=aYHQSHkSlitGzjAn539gi5Fa03iRNrIR&limit=3&rating=pg`

function GifListContainer(){

    const [gifs,setGifs] = useState([]);

    function onSearch(text,textSetter){
        let query = text
        const SEARCH_API = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=aYHQSHkSlitGzjAn539gi5Fa03iRNrIR&limit=3&rating=g`
        fetch(SEARCH_API)
        .then(resp=>resp.json())
        .then(data=>{
            const newGifs = data.data.map((gif)=>gif.images.original.url)
            setGifs(()=>newGifs)
        })
        console.log('searching'+' '+text+' '+query+"  "+SEARCH_API)

        textSetter(()=>"");
    }

    useEffect(()=>{
        fetch(TRENDING_API)
        .then(resp=>resp.json())
        .then(data=>{
         const newGifs = data.data.map((gif)=>gif.images.original.url)
         setGifs(()=>newGifs)
        })
    },[])

    return(
        <div className="list-container"  >
            <div className="list-div" >
                <GifList gifs={gifs} />
            </div>
            <div className="search-div" >
                <GifSearch onSearch={onSearch} />
            </div>
        </div>
    )
}

export default GifListContainer
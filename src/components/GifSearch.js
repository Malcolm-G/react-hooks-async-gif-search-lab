import React,{ useState } from "react";


function GifSearch({onSearch}){

    const [search,setSearch] = useState("");

    return(
        <form
        className=""
        onSubmit={(e)=>{
            e.preventDefault();
            onSearch(search,setSearch);
        }}
        >
            <label htmlFor="searchBar" >Enter a Search Term:</label>
            <input
            id="searchBar"
            placeholder="Search..."
            className="form-control"
            onChange={(e)=>{
                setSearch(()=>e.target.value);
            }}
            value={search}
            />
            <button type="submit" className="btn btn-success" >Find Gifs</button>
        </form>
    )
}

export default GifSearch
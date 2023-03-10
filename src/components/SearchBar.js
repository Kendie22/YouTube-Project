import { useState, useEffect } from "react";


export function SearchBar() {

    function videoSearch() {

    };


    return (

        <>
            <div className="search">
                <form>
                    <input type="text"></input>
                    <button onClick={videoSearch}>Search</button>
                </form>
            </div>
            <div className="Videos">
                {/* map */}
            </div>
        </>


    )
}
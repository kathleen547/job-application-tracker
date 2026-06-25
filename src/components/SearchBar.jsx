import React, {useState} from "react";

export default function SearchBar({searchedText, onSearchChange}){
    return (
        <>
         <form className="form-wrapper">
            <input type="text" id="search" value={searchedText} onChange={onSearchChange}
         placeholder='Type company to search...'/>
        </form>
        </>
    );
}
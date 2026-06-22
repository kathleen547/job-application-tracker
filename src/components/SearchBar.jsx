import React, {useState} from "react";

export default function SearchBar(){
    return (
        <>
         <form className="form-wrapper"><input type="text" id="search" placeholder='Type company to search...'/>
        </form>
        </>
    );
}
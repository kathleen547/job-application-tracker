import React, {useState} from "react";

export default function SearchBar({onSearchChange}){
    const [searchedText, setSearchedText] = useState("");

    return (
        <>
         <form className="form-wrapper">
            <input type="text" id="search" value={searchedText} onChange={
            event => {setSearchedText(event.target.value); 
            onSearchChange(event);
         }
        } placeholder='Type company to search...'/>
        </form>
        </>
    );
}
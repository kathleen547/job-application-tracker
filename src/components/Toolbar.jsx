import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StatusDropdown from "./StatusDropdown";

export default function Toolbar({searchedText, onSearchChange, selectedStatus, onSelectedStatusChange, toggleForm}){
    
    return (
        <>
        <div className="toolbar">
            <div className="toolbar-filters">
            <SearchBar searchedText={searchedText} onSearchChange={onSearchChange} />
            <StatusDropdown selectedStatus={selectedStatus} onSelectedStatusChange={onSelectedStatusChange} /></div>
            <button id="add-button" onClick={toggleForm}>+ Add new company</button>
        </div>
        </>
    );
}
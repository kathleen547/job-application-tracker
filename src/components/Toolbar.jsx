import React from "react";
import SearchBar from "./SearchBar";
import StatusDropdown from "./StatusDropdown";

export default function Toolbar({searchedText, onSearchChange, selectedStatus, onSelectedStatusChange}){
    return (
        <>
        <div className="toolbar">
            <div className="toolbar-filters">
            <SearchBar searchedText={searchedText} onSearchChange={onSearchChange} />
            <StatusDropdown selectedStatus={selectedStatus} onSelectedStatusChange={onSelectedStatusChange} /></div>
            <button id="add-button">+ Add new company</button>
        </div>
        </>
    );
}
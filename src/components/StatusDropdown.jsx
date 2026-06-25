import React, { useState } from "react";

export default function StatusDropdown({selectedStatus, onSelectedStatusChange}){
    function selectStatusHandler(e){
        onSelectedStatusChange(e);
    }
    return (<>
    <select name="selectedStatus" value={selectedStatus} onChange={selectStatusHandler}>
        <option value="All">All</option>
        <option value="Interested">Interested</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </>);
}
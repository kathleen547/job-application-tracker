import React from "react";

export default function CompanyCard({id, name, website, notes, status, onStatusChange, deleteCompany}){
    function clickHandler(){
        deleteCompany(id);
    }

    function onStatusChangeHandler(event){
        onStatusChange(id, event);
    }

    const badgeClasses = {
        Interested: "badge-interested",
        Applied: "badge-applied",
        Interview: "badge-interview",
        Offer: "badge-offer",
        Rejected: "badge-rejected"
    }
    console.log(status);
    return (
        <div className='card'>
            <button onClick={clickHandler} className='x-button'>✘</button>
            <h2>{name}</h2>
            <p className={`badge ${badgeClasses[status]}`}>
            <label>
                <select name="selectedStatus" value={status} onChange={event => onStatusChangeHandler(event)}>
                    <option value="Interested">Interested</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </label></p>
            <p>Link: <a href='{website}'>{website}</a></p>
            <p>{notes}</p>
            
        </div>
    );
}

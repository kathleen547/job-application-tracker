import React from "react";

export default function CompanyCard({id, name, website, notes, status, deleteCompany}){
    function clickHandler(){
        deleteCompany(id);
    }

    const badgeClasses = {
        Interested: "badge-interested",
        Applied: "badge-applied",
        Interview: "badge-interview",
        Offer: "badge-offer",
        Rejected: "badge-rejected"
    }

    return (
        <div className='card'>
            <button onClick={clickHandler} className='x-button'>✘</button>
            <h2>{name}</h2>
            <p className={`badge ${badgeClasses[status]}`}
            >{status}</p>
            <p>Link: <a href='{website}'>{website}</a></p>
            <p>{notes}</p>
            
        </div>
    );
}

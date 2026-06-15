import React from "react";

export default function CompanyCard({id, name, website, notes, deleteCompany}){
    function clickHandler(){
        deleteCompany(id);
    }
    return (
        <div className='card'>
            <button onClick={clickHandler} className='x-button'>✘</button>
            <h2>{name}</h2>
            <p>Link: <a href='{website}'>{website}</a></p>
            <p>{notes}</p>
        </div>
    );
}

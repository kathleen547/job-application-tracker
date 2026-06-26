import React, { useState } from "react";

export default function CompanyCard({id, name, website, notes, status, onStatusChange, editCompany, deleteCompany, onSaveChanges}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedWebsite, setEditedWebsite] = useState(website);
    const [editedNotes, setEditedNotes] = useState(notes);

    const transferValues = (e) => {
        const values = {
            editedWebsite,
            editedNotes
        };
        e.preventDefault();
        onSaveChanges(id, values);   
        setIsEditing(false); 
    };

      const submit = e => {
        e.preventDefault();
        transferValues();
        setIsEditing(false);
    }

    function clickEditHandler(){
        editCompany(id);
    }

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
    if (isEditing) {
        return (
            <div className='card'>
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
            <p>Link: <input value={editedWebsite} onChange={event => setEditedWebsite(event.target.value)}type="text" placeholder={website} /></p>
            <p><textarea value={editedNotes} onChange={event => setEditedNotes(event.target.value)} placeholder={notes} /></p>
            <div className="edit-actions">
            <button onClick={event => transferValues(event)} className="save-button">Save</button>
            <button onClick={event => {setIsEditing(false);
                clickEditHandler(event)}} className="cancel-button">Cancel</button></div>
        </div>
        );
    }
    return (
        <div className='card'>
            <button onClick={event => {setIsEditing(true);
                clickEditHandler()}} className="card-action-button edit-button">✎</button>
            <button onClick={clickHandler} className='card-action-button x-button'>✘</button>
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

import React, { useState } from "react";

export default function CompanyCard({id, name, position, location, date, website, notes, status, onStatusChange, editCompany, deleteCompany, onSaveChanges}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedPosition, setEditedPosition] = useState(position);
    const [editedLocation, setEditedLocation] = useState(location);
    const [editedDate, setEditedDate] = useState(date);
    const [editedWebsite, setEditedWebsite] = useState(website);
    const [editedNotes, setEditedNotes] = useState(notes);

    const transferValues = (e) => {
        const values = {
            editedPosition,
            editedLocation,
            editedDate,
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

    function clickHandlerWithConfirm(){
        if(window.confirm("Are you sure want to delete?")){
            deleteCompany(id);
        }
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
            <div className="card-header">
            <h2>{name}</h2>
            <p className="position"><input value={editedPosition} onChange={event => setEditedPosition(event.target.value)} type="text" placeholder={position} /></p>
            </div>
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
             <div className="card-meta">
            <p>📍<input value={editedLocation} onChange={event => setEditedLocation(event.target.value)} type="text" placeholder={location}/> </p>
            <p>📅 <input value={editedDate} onChange={event => setEditedDate(event.target.value)} type="date" placeholder={date}/> </p>
            <p>🌐 <input value={editedWebsite} onChange={event => setEditedWebsite(event.target.value)}type="text" placeholder={website} /></p>
            </div>
            <div className="card-notes">
            <p><textarea value={editedNotes} onChange={event => setEditedNotes(event.target.value)} placeholder={notes} /></p></div>
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
            <button onClick={clickHandlerWithConfirm} className='card-action-button x-button'>✘</button>
            <div className="card-header">
            <h2>{name}</h2>
            <p className="position">{position}</p></div>
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
            <div className="card-meta">
            <p>📍 {location}</p>
            <p>📅 {date}</p>
            <p>🌐 <a href='{website}'>{website}</a></p></div>
            <div className="card-notes">
            <p>{notes}</p></div>
            
        </div>
    );
}

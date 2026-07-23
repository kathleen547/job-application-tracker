import React, {useState} from "react";

export default function AddCompanyForm({onAddCompany}){
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [website, setWebsite] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("Interested");

    const clearState = () => {
        setName("");
        setPosition("");
        setLocation("");
        setDate("");
        setWebsite("");
        setNotes("");
        setStatus("Interested");
    };

    const transferValues = () => {
        const values = {
            name,
            position, 
            location,
            date,
            website,
            notes, 
            status
        };
        onAddCompany(values);
    };

    const submit = e => {
        e.preventDefault();
        transferValues();
        clearState();
    }

    return (
        <>
        <form onSubmit={submit}>
            <h3>Add new company info</h3>
            <div className="form-row">
            <label htmlFor="name">Company name:</label>
            <input value={name}
                onChange={event => setName(event.target.value)} 
                type="text" placeholder="Company name..." required/>
            </div>
            <div className="form-row"><label htmlFor="position">Position: </label>
            <input value={position} 
                onChange={event => setPosition(event.target.value)}
                type="text" placeholder="Position..." required/>
            </div>
            <div className="form-row"><label htmlFor="location">Location: </label>
            <input value={location} 
                onChange={event => setLocation(event.target.value)}
                type="text" placeholder="Location..." required/>
            </div>
            <div className="form-row"><label htmlFor="date">Date: </label>
            <input value={date} 
                onChange={event => setDate(event.target.value)}
                type="date" placeholder="Date..." required/>
            </div>
            <div className="form-row"><label htmlFor="website">Website:</label>
            <input value={website} 
                onChange={event => setWebsite(event.target.value)}
                type="text" placeholder="Company website..." required/></div>
            <div className="form-row"><label htmlFor="notes">Notes:</label>
            <textarea value={notes}
                onChange={event => setNotes(event.target.value)}
                type="text" placeholder="Notes..." rows={3} required /></div>
            <div className="form-row"><label htmlFor="status">Status:</label>
            <select value={status} 
                onChange={event => setStatus(event.target.value)}>
                    <option value="Interested">Interested</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select></div>
            <div className="form-actions">
            <button>SUBMIT</button></div>
        </form>
        </>
    );
}
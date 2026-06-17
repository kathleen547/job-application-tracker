import React, {useState} from "react";

export default function AddCompanyForm({onAddCompany}){
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("Interested");

    const clearState = () => {
        setName("");
        setWebsite("");
        setNotes("");
        setStatus("Interested");
    };

    const transferValues = () => {
        const values = {
            name,
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
            <input value={name}
                onChange={event => setName(event.target.value)} 
                type="text" placeholder="Company name..." required/>
            <input value={website} 
                onChange={event => setWebsite(event.target.value)}
                type="text" placeholder="Company website..." required/>
            <input value={notes}
                onChange={event => setNotes(event.target.value)}
                type="text" placeholder="Notes..." required />
            <select value={status} 
                onChange={event => setStatus(event.target.value)}>
                    <option value="Interested">Interested</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            <button>SUBMIT</button>
        </form>
        </>
    );
}
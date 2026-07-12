
import React, { useState, useEffect } from 'react';
import {v4} from 'uuid';
import CompanyCard from './components/CompanyCard';
import AddCompanyForm from './components/CompanyForm';
import {companiesData} from './data/companies';
import './App.css';
import Toolbar from './components/Toolbar';
import StatisticsDashboard from './components/Statistics';

function App({title}) {

    const [companies, setCompanies] = useState(() => {
        const storedValue = localStorage.getItem("companies");
        return storedValue ? JSON.parse(storedValue) : companiesData;
    });
    
    const [searchedText, setSearchedText] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("All");

    useEffect(() =>{
        localStorage.setItem("companies", JSON.stringify(companies));
    }, [companies]);


    const editCompany = (id) => {
        const nextCompaniesListWithEdited = [...companies];
        const editedCompany = nextCompaniesListWithEdited.find(company => company.id === id);
        
        setCompanies(nextCompaniesListWithEdited);
    };

    const deleteCompany = (id) => {
        const newCompanies = companies.filter(company => company.id !== id);
        setCompanies(newCompanies);
    };

    const onStatusChange = (id, event) =>{
        const nextCompaniesList = [...companies];
        const changedCompany = nextCompaniesList.find(company => company.id === id);
        changedCompany.status = event.target.value;
        setCompanies(nextCompaniesList);
    };

    const onSearchChange = (event) => setSearchedText(event.target.value.toLowerCase());
    const onSelectedStatusChange = (event) => setSelectedStatus(event.target.value);

    const onSaveChanges = (id, values) =>{
        const nextCompaniesList = [...companies];
        const changedCompany = nextCompaniesList.find(company => company.id === id);
        changedCompany.position = values.editedPosition;
        changedCompany.location = values.editedLocation;
        changedCompany.date = values.editedDate;
        changedCompany.website = values.editedWebsite;
        changedCompany.notes = values.editedNotes;
        setCompanies(nextCompaniesList);
    }

    const visibleCompanies = companies.filter((company) => {
        if (selectedStatus == "All") return true;
        return company.status == selectedStatus;
    }).filter(company => company.name.toLowerCase().includes(searchedText));
    
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(wasShown => !wasShown);
    
    return (<>
        <section id='app'>
        <h1>{title}</h1>
        <div><StatisticsDashboard companies={companies}/></div>
        <div>
            <Toolbar searchedText={searchedText} onSearchChange={onSearchChange} selectedStatus={selectedStatus} onSelectedStatusChange={onSelectedStatusChange} toggleForm={toggleForm}/>
            </div>
            {showForm && 
            <div id='company-form'>
            <AddCompanyForm onAddCompany={(values) => {
                const newCompaniesList = [
                    ...companies,
                    {
                        id: v4(),
                        name: values.name,
                        position: values.position,
                        location: values.location,
                        date: values.date,
                        website: values.website,
                        notes: values.notes,
                        status: values.status
                    }
                ];
                setCompanies(newCompaniesList);
                setShowForm(false);
            }}/>
        </div>}
            <div id='companies'>
                    {visibleCompanies.map((company, i) =>(
                        <CompanyCard key={i} {...company} 
                        onStatusChange={onStatusChange} editCompany={editCompany} 
                        deleteCompany={deleteCompany} onSaveChanges={onSaveChanges}/>
                    ))}
            </div>
            </section>
            </>
        );
}

export default App;

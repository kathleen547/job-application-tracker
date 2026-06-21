
import React, { useState, useEffect } from 'react';
import {v4} from 'uuid';
import CompanyCard from './components/CompanyCard';
import AddCompanyForm from './components/CompanyForm';
import {companiesData} from './data/companies';
import './App.css';

function App({title}) {
    const [companies, setCompanies] = useState(() => {
        const storedValue = localStorage.getItem("companies");
        return storedValue ? JSON.parse(storedValue) : companiesData;
    });

    useEffect(() =>{
        localStorage.setItem("companies", JSON.stringify(companies));
    }, [companies]);

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
    return (<>
        <section id='app'>
        <h1>{title}</h1>
        <div id='company-form'>
            <AddCompanyForm onAddCompany={(values) => {
                const newCompaniesList = [
                    ...companies,
                    {
                        id: v4(),
                        name: values.name,
                        website: values.website,
                        notes: values.notes,
                        status: values.status
                    }
                ];
                setCompanies(newCompaniesList);
            }}/>
        </div>
            <div id='companies'>
                    {companies.map((company, i) =>(
                        <CompanyCard key={i} {...company} onStatusChange={onStatusChange} deleteCompany={deleteCompany}/>
                    ))}
            </div>
            </section>
            </>
        );
}

export default App;

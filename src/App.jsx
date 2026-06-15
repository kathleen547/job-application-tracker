
import React, { useState } from 'react';
import {v4} from 'uuid';
import CompanyCard from './components/CompanyCard';
import AddCompanyForm from './components/CompanyForm';
import {companiesData} from './data/companies';
import './App.css';

function App({title}) {
    const [companies, setCompanies] = useState(companiesData);
    const deleteCompany = (id) => {
        const newCompanies = companies.filter(company => company.id !== id);
        setCompanies(newCompanies);
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
                        notes: values.notes
                    }
                ];
                setCompanies(newCompaniesList);
            }}/>
        </div>
            <div id='companies'>
                    {companies.map((company, i) =>(
                        <CompanyCard key={i} {...company} deleteCompany={deleteCompany}/>
                    ))}
            </div>
            </section>
            </>
        );
}

export default App;

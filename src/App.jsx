
import React, { useState } from 'react'
import CompanyCard from './components/CompanyCard'
import AddCompanyForm from './components/CompanyForm'
import {companiesData} from './data/companies'
import './App.css'

function App({title}) {
    const [companies, setCompanies] = useState(companiesData);
    return (<>
        <section id='app'>
        <h1>{title}</h1>
        <div id='company-form'>
            <AddCompanyForm onAddCompany={(values) => console.log(values)}/>
        </div>
            <div id='companies'>
                    {companies.map((company, i) =>(
                        <CompanyCard key={i} {...company} />
                    ))}
            </div>
            </section>
            </>
        );
}

export default App;

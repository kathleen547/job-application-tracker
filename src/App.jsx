
import React, { useState } from 'react'
import CompanyCard from './components/CompanyCard'
import {companiesData} from './data/companies'
import './App.css'

function App({title}) {
    const [companies, setCompany] = useState(companiesData);
    return (<>
        <section id='app'>
        <h1>{title}</h1>
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

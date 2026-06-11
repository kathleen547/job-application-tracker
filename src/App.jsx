
import React from 'react'
import CompanyCard from './components/CompanyCard'
import {companies} from './data/companies'
import './App.css'

function App({title, companies}) {
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

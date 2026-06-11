import React from 'react'

export default function CompanyCard({name, website, notes}){
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>Link: <a href='{website}'>{website}</a></p>
            <p>{notes}</p>
        </div>
    );
}

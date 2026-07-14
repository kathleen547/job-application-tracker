import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ScatterChart,
    Scatter
} from "recharts";

import { Briefcase, Building2, Users, Trophy } from 'lucide-react';

export default function StatisticsDashboard({companies}){
    const all = companies.length;
    const count1 = {
        "Interested": 0,
        "Applied": 0,
        "Interview": 0,
        "Offer": 0,
        "Rejected" : 0
    }
    const count = companies.reduce((acc, obj) => {
        count1[obj.status] = (acc[obj.status] || 0) + 1;
        return count1;
        }, {})
    const active = count["Interested"] + count["Applied"] + count["Interview"];
    console.log(count)
    let fill1 = ['#aaaaaa', '#0057c4', '#fffc5c', '#09b076', '#b31922'];
    const data = Object.entries(count).map(([key, value]) => ({
        status: key,
        number: value
        }));

    
    data.forEach((v, i) => {v.fill = fill1[i];});
    
    const dates = companies.reduce((acc, obj) => {
        acc[obj.date] = (acc[obj.date] || 0) + 1;
        return acc;
    }, {});

    const sortedDates = Object.keys(dates).sort().reduce((obj, key) => {
        obj[key] = dates[key];
        return obj;
    }, {});

    const datesToDisplay = Object.entries(sortedDates).map(([key, value]) => ({
        date: key,
        app_number: value
        }));
        
    return (
        <>
        <div className="stats">
            <div className="stats-card">
                <div className="left">
                <div className="title">Total Applications</div>
                <div className="number">{all}</div>
                </div>
                <div className="right">
                <div className="stats-icon"><Briefcase size={20} color="#FDEB9E" strokeWidth={1.75} /></div>
                </div>
            </div>
            <div className="stats-card">
                <div className="left">
                <div className="title">Active Applications</div>
                <div className="number">{active}</div>
                </div>
                <div className="right">
                <div className="stats-icon"><Building2 size={20} color="#FDEB9E" strokeWidth={1.75} /></div>
                </div>
            </div>
            <div className="stats-card">
                <div className="left">
                <div className="title">Interviews</div>
                <div className="number">{count["Interview"]}</div>
                </div>
                <div className="right">
                <div className="stats-icon"><Users size={20} color="#FDEB9E" strokeWidth={1.75} /></div>
                </div>
            </div>
            <div className="stats-card">
                <div className="left">
                <div className="title">Offers</div>
                <div className="number">{count["Offer"]}</div>
                </div>
                <div className="right">
                <div className="stats-icon"><Trophy size={20} color="#FDEB9E" strokeWidth={1.75} /></div>
                </div>
            </div>

        </div>
        <div className="charts-container">
            <div className="chart-card">
        <BarChart width={500} height={300} data={data}>
            <Bar dataKey="number" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false}/>
        </BarChart></div>
        <div className="chart-card">
        <ScatterChart width={500} height={300} >
            <Scatter data={datesToDisplay} fill="blue" />
            <CartesianGrid  stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis dataKey="app_number" allowDecimals={false}/>
        </ScatterChart></div></div>
        </>
    );


}
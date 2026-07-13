import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
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
    
    //console.log("Data: ", data);

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
        <BarChart width={600} height={600} data={data}>
            <Bar dataKey="number" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="status" />
            <YAxis />
        </BarChart>
        </>
    );


}
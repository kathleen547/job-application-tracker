import React from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

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
    console.log(count)
    let fill1 = ['#aaaaaa', '#0057c4', '#fffc5c', '#09b076', '#b31922'];
    const data = Object.entries(count).map(([key, value]) => ({
        status: key,
        number: value
        }));

    
    data.forEach((v, i) => {v.fill = fill1[i];});
    
    //console.log("Data: ", data);

    return (
        <BarChart width={600} height={600} data={data}>
            <Bar dataKey="number" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="status" />
            <YAxis />
        </BarChart>
    );


}
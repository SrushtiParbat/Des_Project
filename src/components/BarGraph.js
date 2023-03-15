import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import "./Sap.css";
  
const BarGraph = () => {
  
// Sample data
const data = [
  {name: 'Jan', students: 400},
  {name: 'Feb', students: 700},
  {name: 'March', students: 200},
  {name: 'Apr', students: 1000}
];
  
  
return (
<BarChart width={400} height={400} data={data}>
    <Bar dataKey="students" fill="purple" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
);
}
  
export default BarGraph;
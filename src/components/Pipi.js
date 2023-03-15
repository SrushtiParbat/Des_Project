import React from 'react';
import { PieChart, Pie} from 'recharts';


const Pipi = () => {

// Sample data
const data = [
{name: 'Geeksforgeeks', students: 400},
{name: 'Technical scripter', students: 700},
{name: 'Geek-i-knack', students: 200},
{name: 'Geek-o-mania', students: 1000}
];


return (
		<PieChart width={400} height={400}>
		<Pie data={data} dataKey="students" outerRadius={150} innerRadius={100} fill="green" />
		</PieChart>
);
}

export default Pipi;

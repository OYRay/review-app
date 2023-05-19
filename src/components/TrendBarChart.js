import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {'period': '2022/1', 'reviews number': 158},
    {'period': '2022/2', 'reviews number': 126},
    {'period': '2022/3', 'reviews number': 166},
    {'period': '2022/4', 'reviews number': 107},
    {'period': '2022/5', 'reviews number': 246},
    {'period': '2022/6', 'reviews number': 281},
    {'period': '2022/7', 'reviews number': 298},
    {'period': '2022/8', 'reviews number': 221},
    {'period': '2022/9', 'reviews number': 182},
    {'period': '2022/10', 'reviews number': 133},
    {'period': '2022/11', 'reviews number': 127},
    {'period': '2022/12', 'reviews number': 101},
   ]

const TrendBarChart = () => {
      
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="reviews number" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrendBarChart;

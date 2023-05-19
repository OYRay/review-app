import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {'period': '2022/1', 'rating': 4},
    {'period': '2022/2', 'rating': 4.2},
    {'period': '2022/3', 'rating': 4.3},
    {'period': '2022/4', 'rating': 4.3},
    {'period': '2022/5', 'rating': 4.3},
    {'period': '2022/6', 'rating': 4.6},
    {'period': '2022/7', 'rating': 4.5},
    {'period': '2022/8', 'rating': 4.7},
    {'period': '2022/9', 'rating': 4.75},
    {'period': '2022/10', 'rating': 4.3},
    {'period': '2022/11', 'rating': 4.2},
    {'period': '2022/12', 'rating': 4.2},
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
        <Bar dataKey="rating" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrendBarChart;

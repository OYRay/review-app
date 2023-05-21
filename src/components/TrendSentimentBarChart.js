import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReviewRatingTrendData from '../data/ReviewRatingTrendData.json';


const TrendBarChart = ({id}) => {
      
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={ReviewRatingTrendData[id]}
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

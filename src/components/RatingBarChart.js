import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts';

const RatingBarChart = ({data}) => {
  const ratingData = Object.entries(data).map(([rating, count]) => ({
    rating,
    count,
  }));

  function CustomYAxisTick({ x, y, payload }) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={3} textAnchor="end" fontSize={14}>
          {payload.value}
        </text>
      </g>
    );
  }

  function CustomBarLabel({ x, y, width, value }) {
    return (
      <text x={x + width + 10} y={y+8} fontSize={14} fill="#666">
        {value}
      </text>
    );
  }
  
  
  return (
    <BarChart
      width={270}
      height={150}
      data={ratingData}
      layout="vertical"
      margin={{
        top: 5, right: 30, left: 15, bottom: 5, 
      }}
      
    >
      <XAxis type="number" hide />
      <YAxis type="category" dataKey="rating" tickLine={false} axisLine={false} tick={<CustomYAxisTick />} />
      <Bar dataKey="count" fill="#8884d8" radius={[10, 10, 10, 10]} barSize={10}  label={<CustomBarLabel />} />
    </BarChart>
  );
  }
export default RatingBarChart;

import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const SentimentRadarChart = ({data}) => {
  const sentimentData = Object.entries(data).map(([key, value]) => ({ aspect: key, sentiment: value }));
  const CustomTick = (props) => {
    const { x, y, payload, ...otherProps } = props;
    const value = payload.value.charAt(0).toUpperCase() + payload.value.slice(1);
  
    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fill="#333333"
        fontSize="14px"
        fontWeight="bold"
        {...otherProps}
      >
        {value}
      </text>
    );
  };
  

  return (
    <RadarChart cx={160} cy={180} outerRadius={100} width={400} height={400} data={sentimentData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="aspect" tick={CustomTick} />
      <PolarRadiusAxis />
      <Radar name="Sentiment" dataKey="sentiment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} animationDuration={500} />
    </RadarChart>
  );
}

export default SentimentRadarChart;
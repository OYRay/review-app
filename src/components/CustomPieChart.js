

import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { Row, Col, Select, Typography } from 'antd';

const { Title } = Typography;

const PieChartWithAnnotations = ({ title, data }) => {
  const pieData = Object.entries(data).map(([key, value]) => ({ name: key, value: value }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D2691E'];

  const renderCustomizedLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        style={{
          fontSize: '13px', // Change the font size here
          fontWeight: 'bold' // Change the font weight here
        }}
      >
        {`${pieData[index].name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // const renderCustomizedLabel = (props) => {
  //   const { x, y, name } = props;
  //   return (
  //     <text x={x} y={y} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
  //       {name}
  //     </text>
  //   );
  // };

  const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy + 115} textAnchor="middle" fontSize="15" fontWeight="bold">
        {title}
      </text>
    );
  };
  

  return (
    <div justify="center" align="middle" valign="middle">
      <PieChart className="pie-chart-cell" width={300} height={300}>
        <Pie
          className="pie-chart-cell"
          data={pieData}
          cx={130}
          cy={130}
          labelLine={false}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
          animationDuration={500} 
          margin={10}
        >
          {pieData.map((entry, index) => (
            <Cell className="pie-chart-cell" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label content={<CustomLabel />} position="center" />
        </Pie>
        
      </PieChart>
    </div>
    
      
  );
};

export default PieChartWithAnnotations;

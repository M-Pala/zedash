import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
// import { Bar, BarChart, Cell, Pie, PieChart, Tooltip } from 'recharts'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const topBrief_data_4 = [
    {
        hits: 8850,
    }, {
        hits: 8219,
    }, {
        hits: 8285,
    }, {
        hits: 7181,
    }, {
        hits: 7413,
    }, {
        hits: 3060,
    }, {
        hits: 1981,
    }, {
        hits: 4506,
    },
];

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SalesPrediction = () => {
  return (
    <Paper variant='sub-bg'>
        <Typography variant='h6' sx={{paddingBottom:'1rem', width:'100%'}}>Sales Prediction</Typography>
        <Box sx={{
            display:'flex',
            flexWrap : 'wrap',
            gap:1,
            width: '30%'
        }}>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                gap:1,
            }}>
                <Typography variant='h4' sx={{marginTop:'2rem',}}>76%</Typography>
            </Box>
            <Typography variant='caption'>(160-155 Sales)</Typography>
        </Box>
        
        <PieChart width={120} height={200}>
        
            <Pie
            data={data}
            cx={0}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
      </PieChart>
    </Paper>
  )
}

export default SalesPrediction
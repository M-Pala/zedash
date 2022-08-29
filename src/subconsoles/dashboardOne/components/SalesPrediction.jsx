import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
// import { Bar, BarChart, Cell, Pie, PieChart, Tooltip } from 'recharts'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'total', value: 76 },
    { name: 'remaining', value: 100-76 },
  ];
  const COLORS = ['#0088ff', '#eee'];

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
                <Typography variant='h4' sx={{marginTop:'2rem',}}>$3654</Typography>
            </Box>
            <Typography variant='caption'>(160-155 Sales)</Typography>
        </Box>
        
        
      <Box sx={{position:'relative'}}>
      <PieChart width={150} height={100}>
        
        <Pie
              data={data}
              cx='50%'
              cy='100%'
              startAngle={180}
              endAngle={0}
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              // paddingAngle={5}
              dataKey="value"
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        <Typography variant='h5' sx={{textAlign:'center', marginTop:'-2rem'}}>76%</Typography>
      </Box>
    </Paper>
  )
}

export default SalesPrediction
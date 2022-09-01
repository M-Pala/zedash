import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'old', value: 50 },
    { name: 'intermediate', value: 30 },
    { name: 'new', value: 20 },
  ];
  const COLORS = ['#0088ff', '#eee', '#39C449'];

const SalesDifference = () => {
  return (
    <Paper variant='sub-bg'>
        <Typography variant='h6' sx={{ width:'100%'}}>Sales Difference</Typography>
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
                <Typography variant='h4' sx={{marginTop:'2rem',}}>$9854</Typography>
            </Box>
            <Typography variant='caption'>(160-155 Sales)</Typography>
        </Box>
        
        
      {/* <Box sx={{position:'relative'}}> */}
      <PieChart width={150} height={120}>
        
        <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={30}
              outerRadius={60}
              startAngle={-90}
              fill="#8884d8"
              dataKey="value"
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        
      {/* </Box> */}
    </Paper>
  )
}

export default SalesDifference
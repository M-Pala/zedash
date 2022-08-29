import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import { visitSource_data as data } from '../../../data/dashboard1';

const COLORS = ['#e04f3f','#7b00ff', '#39C449', '#eee'];


const VisitSource = () => {
    const [month, setMonth] = useState(0)

    const handleChange = (event) => {
        setMonth(event.target.value);
      };
  return (
    <Paper variant='sub-bg'>
        <Typography variant='h6' sx={{ width:'100%'}}>Visit Source</Typography>
        <FormControl fullWidth>
            <Box sx={{
                width:'100%',
                textAlign:'right'
            }}>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    onChange={handleChange}
                    size='small'
                >
                    <MenuItem value={0}>January</MenuItem>
                    <MenuItem value={1}>February</MenuItem>
                    <MenuItem value={2}>March</MenuItem>
                </Select>
            </Box>
        </FormControl>
        <Box sx={{display:'flex',justifyContent:'center', width:'100%'}}>
            <PieChart width={500} height={400}>
                <Legend  wrapperStyle={{
                    paddingTop: "25px"
                }} iconType={'circle'}/>
                <Pie
                    data={data[month]}
                    cx='50%'
                    cy='50%'
                    innerRadius={130}
                    outerRadius={150}
                    // startAngle={-270}
                    // endAngle={}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data[month].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </Box>
    </Paper>
  )
}

export default VisitSource
import React from 'react'

import { Paper, Typography } from '@mui/material'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { revenue_data as data } from '../../../data/dashboard1'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TotalRevenue = () => {

    const ref = useRef()
    const [revWidth, setRevWidth] = useState(782)
    useEffect(()=>{
        const current = ref.current
        console.log(current.clientWidth);
        setRevWidth(current)
    },[revWidth])
  return (
    <Paper variant='sub-bg'>

      <Typography variant='h6' sx={{paddingBottom:'1rem'}}>Total Revenue</Typography>
      <div ref={ref} style={{width:`${revWidth}px`, height:'400px'}} >
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
          width={900}
          height={500}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
          }}
          >
          <CartesianGrid vertical={false}/>
          <XAxis dataKey="name" axisLine={false}/>
          <YAxis axisLine={false}/>
          <Tooltip />
          <Legend iconType={'circle'}wrapperStyle={{top: -40, left: 300}}/>
          <Bar dataKey="2022" stackId="a" fill="#009efb" barSize={20} />
          <Bar dataKey="2021" stackId="a" fill="#23aafe" />
          <Bar dataKey="2020" stackId="a" fill="#68c5ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}

export default TotalRevenue
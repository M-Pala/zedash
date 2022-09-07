import { Box, Paper, Typography } from '@mui/material'
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2'
import React from 'react'

import 'chart.js/auto'

export const options = {
    responsive: true,
    // stepped: 0.5,
    interaction: {
        intersect: false,
        axis: 'x'
      },
    scales: {
        x: {
          
          grid: {
            drawBorder: false,
            display: false,
          },
        },
        y: {
                min : 0,
                max : 6000
        },
      },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: { 
        backgroundColor : '#fff5',
        titleColor : '#000' ,
        bodyColor : '#000' ,
      },
    },
  };
  
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  export const data = {
      labels: labels,  
      datasets: [
        {
          label: "First dataset",
          data: [3000,3000,4000,4000,2000,2000,1000,1000,3000,3000,5000,5000],
          fill: true,
          backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(25, 25, 25, 250);
          gradient.addColorStop(0, "#0066ee");
          gradient.addColorStop(1, "#ffffff");
          return gradient;
        },
          borderColor: "#0066ee",
          lineTension: 0,
          pointRadius: 1,
        }
      ]
    };
  
const TotalIncome = () => {
  return (
    <Paper variant='sub-bg' sx={{position:'relative'}}>
        <Box>
            <Typography variant='h6'>Total Income</Typography>
            <Typography variant='caption'>Yearly income overview </Typography>
        </Box>
        <Box width='100%'>
            <Line data={data} options={options}/>
        </Box>
    </Paper>
  )
}

export default TotalIncome
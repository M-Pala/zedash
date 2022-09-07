import { faker } from '@faker-js/faker';
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Line } from 'react-chartjs-2'

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

import 'chart.js/auto'


export const options = {
  responsive: true,
  
  scales: {
      x: {
        
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false
        }
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

const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export const data = {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        fill: true,
        backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(25, 25, 25, 250);
        gradient.addColorStop(0, "#bbe3b9");
        gradient.addColorStop(0.2, "#ffffff");
        gradient.addColorStop(0.4, "#ffffff");
        gradient.addColorStop(0.6, "#ffffff");
        gradient.addColorStop(0.8, "#ffffff");
        gradient.addColorStop(1, "#ffffff");
        return gradient;
      },
        borderColor: "#4fc04b",
        lineTension: 0.5,
        pointRadius: 1
      }
    ]
  };


const ActivityCard = () => {
  return (
    <Paper variant='sub-bg' sx={{flexGrow:1}}>
      <Box sx={{display:'flex',flexGrow:1,width:'100%', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h6' sx={{width:'block'}}>Activity</Typography>
        <Typography variant='caption'>Last Week</Typography>
      </Box>
      <Box sx={{width:'100%',display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <Box>
          <Typography variant='h4'>85%</Typography>
          <Box sx={{
                display:'flex',
                alignContent:'center',
                gap:1,
                padding:'0.5rem 0'
          }}>
            <Typography variant='body2' color='#4fc04b'>24.5%</Typography><ArrowUpwardOutlinedIcon color='success' fontSize='small'/>
          </Box>
        </Box>
        <Box>
            <Line height={100} width={200} data={data} options={options}/>
        </Box>
      </Box>
    </Paper>
  )
}

export default ActivityCard
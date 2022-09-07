import { faker } from '@faker-js/faker';
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Bar } from 'react-chartjs-2'

import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#b6cce9',
      borderRadius: 50,
      borderSkipped: false,
      barPercentage: 0.35,
      categoryPercentage: 1,
      hoverBackgroundColor: '#0066ee'
    },
    
  ],
};


const NewVisitorsActivity = () => {
  return (
    <Paper variant='sub-bg' sx={{flexGrow:1}}>
      <Box sx={{display:'flex',width:'100%', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h6' >New Visitors</Typography>
        <Typography variant='caption'>Last Week</Typography>
      </Box>
      <Box sx={{width:'100%',display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <Box>
          <Typography variant='h4'>65%</Typography>
          <Box sx={{
                display:'flex',
                alignContent:'center',
                gap:1,
                padding:'0.5rem 0'
          }}>
            <Typography variant='body2' color='#c04b4b'>14.5%</Typography><ArrowDownwardOutlinedIcon color='error' fontSize='small'/>
          </Box>
        </Box>
        <Box>
            <Bar height={100} width={200} options={options} data={data} />
        </Box>
      </Box>
    </Paper>
  )
}

export default NewVisitorsActivity
import { faker } from '@faker-js/faker';
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Bar } from 'react-chartjs-2'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                alignItems:'center',
          }}>
            <Typography variant='caption' color='#c04b4b'>14.5%</Typography><ArrowDropDownIcon color='error' fontSize='large'/>
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
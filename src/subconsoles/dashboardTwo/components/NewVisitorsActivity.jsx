import { faker } from '@faker-js/faker';
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
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


const NewVisitorsActivity = ({dashType}) => {
  return (
    <Paper variant='sub-bg'>
      <Box sx={{display:'flex',width:'100%', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h6'>News Visitors</Typography>
        <Typography variant='caption'>Last Week</Typography>
      </Box>
      <Box sx={{width:'100%',display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <Box>
          <Typography variant='h5' sx={{color:'#0066ee'}}>$24.5k</Typography>
          <Typography variant='caption'>82% of the target</Typography>
        </Box>
        <Box>
        {
          dashType === 'line' ? 
            <Bar height={100} width={200} options={options} data={data} />
            :
            <Bar height={100} width={200} options={options} data={data} />
        }
        </Box>
      </Box>
    </Paper>
  )
}

export default NewVisitorsActivity
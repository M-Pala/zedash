import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

import { faker } from '@faker-js/faker';
import { Bar } from 'react-chartjs-2';


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
        
        categoryPercentage: 5,
        // barThickness : '10px',
        barWidth:1,
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
  
  const labels = ['Jan', 'Apr', 'Jul', 'Oct'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#4fc04b',
        borderRadius: 50,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        // hoverBackgroundColor: '#0066ee'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#b7e9b6',
        borderRadius: 50,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        // hoverBackgroundColor: '#00ee38'
      },
      
    ],
  };

  

const ProfitCard = () => {
  return (
    <Paper variant='sub-bg' sx={{position:'relative'}}>
        <Typography variant='body1'>Profit</Typography>

        <Box sx={{
                display:'flex',
                flexWrap:'wrap',
                width : '100%'
            }}>
            <Box sx={{
                display: 'flex',
                flexWrap:'wrap',
                width:'10%',
                justifyContent:'flex-start',
            }}>
                <Typography variant='h4' sx={{paddingTop:'1rem'}}>$123k</Typography>
            </Box>
            <Box sx={{marginTop:'1rem', width:'100%'}}>
            
                <Bar height={100} width={200} options={options} data={data} />
        
            </Box>
        </Box>
    </Paper>
  )
}

export default ProfitCard
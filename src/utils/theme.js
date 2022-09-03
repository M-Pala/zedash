import {  createTheme } from "@mui/material";

const theme = createTheme({
    components:{
        MuiPaper:{
            variants:[
                {
                    props: {variant:'sub-bg'},
                    style:{
                        border : '1px solid rgba(0,0,0,0)',
                        boxShadow: '5px 5px 15px 1px rgba(0,0,0,0.01)',
                        padding : '1rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }
                },
                
            ]
        },
        MuiBox:{
            variants: [
                {
                    props: {variant: 'sub-menu-1'},
                    style:{
                        border : '1px solid black', 
                        padding: '1rem',
                        width: {xs:'100%', md:'50rem',},
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        rowGap: '1rem'
                    }
                }
            ]
        }
    }
})

export default theme
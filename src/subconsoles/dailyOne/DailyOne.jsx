import React, { useState } from 'react'
import {Avatar, Box, Button, createTheme, Divider, FormGroup, Grid, IconButton, Input, InputLabel, OutlinedInput, Paper, Stack, styled, Tabs, TextareaAutosize, ThemeProvider, Typography} from '@mui/material'
import './DailyOne.css'
import ClearIcon from '@mui/icons-material/Clear';

const CloseButton = styled(IconButton)({
    boxShadow: '1px'
})


const InputLabel1 = styled(InputLabel)({
    marginBottom: 5,
    fontSize: 'small',
})

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'tab'},
                    style: {
                        border: `2px solid`,
                        borderColor: '#ddd',
                        color: 'black',
                        textTransform: 'none',
                        minWidth: 'fit-content',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        marginLeft:'15px',
                    }
                },
                {
                    props: {variant: 'tab_selected'},
                    style: {
                        border: `2px solid`,
                        borderColor: '#0066ee',
                        color: 'black',
                        textTransform: 'none',
                        minWidth: 'fit-content',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        marginLeft:'15px',
                    }
                },
                {
                    props: {variant: 'avatar_primary'},
                    style: {
                        border: 'none',
                        backgroundColor: '#0066ee',
                        paddingLeft: 35,
                        paddingRight: 35,
                        color: 'white',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#0066ff'
                        }
                    }
                },
                {
                    props: {variant: 'avatar_secondary'},
                    style: {
                        border: 'none',
                        backgroundColor: '#ccd',
                        paddingLeft: 35,
                        paddingRight: 35,
                        color: 'black',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#dde'
                        }
                    }
                },
                {
                    props: {variant: 'upload'},
                    style: {
                        border: 'none',
                        backgroundColor: '#0066ee',
                        paddingLeft: 35,
                        paddingRight: 35,
                        color: 'white',
                        textTransform: 'none',
                        boxShadow:'0px 2px 10px 5px  #0066ff21' ,
                        '&:hover': {
                            backgroundColor: '#0066ff'
                        }
                    }
                }
            ]
        }
    }
})

const DailyOne = () => {
    const [tab, setTab] = useState('profile')
  return (
      <ThemeProvider theme={theme}>
        <Box display={'flex'} justifyContent={'center'} alignItems='center'>
            <Paper elevation={2} sx={{width:'80%',  padding:'30px' , minWidth:'350px'}}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h5'>Account Settings</Typography>
                    <CloseButton sx={{
                        border: 'none',
                        backgroundColor: '#fff',
                        color: '#000',
                        textTransform: 'none',
                        boxShadow:'0px 5px 10px 5px  #04040409' ,
                        '&:hover': {
                            backgroundColor: '#ff1100e2',
                            color: '#fff',
                        }
                    }} variant='' aria-label="delete">
                        <ClearIcon />
                    </CloseButton>
                </Stack>
                <Tabs variant='scrollable' sx={{marginTop:3}}>
                    <Button variant={tab === 'profile'? `tab_selected` : `tab`} onClick={()=>setTab('profile')}>Profile</Button>
                    <Button variant={tab === 'password'? `tab_selected` : `tab`} onClick={()=>setTab('password')}>Password</Button>
                    <Button variant={tab === 'email'? `tab_selected` : `tab`} onClick={()=>setTab('email')}>Email</Button>
                    <Button variant={tab === 'notification'? `tab_selected` : `tab`} onClick={()=>setTab('notification')}>Notification</Button>
                    <Button variant={tab === 'setting'? `tab_selected` : `tab`} onClick={()=>setTab('setting')}>Settings</Button>
                </Tabs>

                <Typography variant='h6' fontWeight={5} mt={3}>Your Avatar</Typography>
                <Box width={'100%'} marginTop={3}>
                    <Stack direction={'row'} gap={5}>
                        <Avatar sx={{width:56, height:56}}>MP</Avatar>
                        <Box>
                            <Button variant='avatar_primary' disableElevation sx={{marginRight:3, minWidth:'180px', marginBottom:'10px'}}>Upload Photo</Button>
                            <Button variant='avatar_secondary' disableElevation sx={{marginRight:3, minWidth:'180px', marginBottom:'10px'}}>Delete Avatar</Button><br />
                            <p style={{color:'#ccc', fontSize:'small'}}>Avatar helps your teammates recognize you in app</p>
                        </Box>
                    </Stack>
                </Box>

                <Divider sx={{margin:3}}/>

                <FormGroup sx={{marginTop:3}}>
                <Box width={'100%'}>
                    <Grid container columnSpacing={5} rowSpacing={2} justifyContent={'space-between'}>
                        
                        <Grid item xs={12} md={6}>
                            <Box>
                                <InputLabel1 htmlFor='fullname-input'>Full Name</InputLabel1>
                                <OutlinedInput fullWidth size='small' id='fullname-input'/>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box>
                                <InputLabel1 htmlFor='role-input'>Role</InputLabel1>
                                <OutlinedInput fullWidth size='small' id='role-input'/>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box width={'100%'}>
                                <InputLabel1 htmlFor='location-input'>location</InputLabel1>
                                <OutlinedInput fullWidth size='small' id='location-input'/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box width={'100%'}>
                                <InputLabel1 htmlFor='company-input'>company</InputLabel1>
                                <OutlinedInput fullWidth size='small' id='company-input'/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Stack marginTop={3} direction={'row'}>
                        <Box width={'100%'}>
                            <InputLabel1 htmlFor='bio-input'>Bio</InputLabel1>
                            <OutlinedInput fullWidth multiline rows={4} id='bio-input'/>
                        </Box>
                    </Stack>
                </Box>

                <Stack marginTop={3} direction={'row'} justifyContent={{xs:'center', md:'flex-start'}}>
                    <Button variant='upload' disableElevation>Update Profile</Button>
                </Stack>
                </FormGroup>
            </Paper>
        </Box>
      </ThemeProvider>
  )
}

export default DailyOne
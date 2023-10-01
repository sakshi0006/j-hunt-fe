"use client"
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

export default function LoginPage(){
   
   
    return <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
           <Card>
                <CardContent>
                    <CardMedia
                            style={{ "height":"7rem", "width":"8rem", "borderRadius": "50%",
                                     "margin": "0rem 0rem 1rem 5.2rem"}}
                            component="img"
                            image="/logo-jHunt.png"
                            alt="logo"
                    />
                                <Typography component="div" display="flex">
                                    <Typography  align='left' gutterBottom variant="h5" component="div"
                                    marginRight="8rem"
                                    sx={{ fontWeight: 'bold' , fontSize: 16}}>
                                        Sign In
                                    </Typography>
                                    <Typography align='right' gutterBottom variant="h5" component="div"
                                    sx={{fontSize: 12}}>
                                        <Link href="/sign-up" underline="none">Create Account </Link> 
                                        Instead?
                                    </Typography>
                                </Typography>
                                <Typography component="div" display="flex" flexDirection="column">    
                                <TextField
                                        id="outlined"
                                        label="Email or Username"
                                        size="small"
                                        className="mb-2 mt-2"
                                />
                                <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        className="mb-1 mt-2"
                                />
                                </Typography>

                </CardContent>
                
                <CardActions>
                            <Typography component="div" display="flex" flexDirection="column">
                                    <Typography align='right' gutterBottom variant="h5"
                                         sx={{fontSize: 12, marginBottom: "1rem"}}>
                                        <Link href="#" underline="none" fontSize="bold">Forgot Password?</Link> 
                                    </Typography>
                                    <Button 
                                           size="medium"
                                           variant="contained"
                                           className="bg-black hover:bg-amber-400 hover:text-black hover:font-bold w-72 ml-4 mb-2"
                                    >Sign-In</Button>
                            </Typography>
                </CardActions>
           </Card>
    </div>
  
}
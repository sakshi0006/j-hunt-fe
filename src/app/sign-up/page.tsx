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

export default function SignupPage(){
   
   
    return <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
           <Card>
                <CardContent>

                    <Typography component="div" display="flex" flexDirection="row">
                            <CardMedia
                                      style={{ "height":"15rem", "width":"15rem", "borderRadius": "15%",
                                       "margin": "2rem 4rem 0rem 1.2rem"}}
                                      component="img"
                                      image="/logo-jHunt.png"
                                      alt="logo"
                            />
                            <Typography component="div">
                                            <Typography component="div" display="flex">
                                                    <Typography  align='left' gutterBottom variant="h5" component="div"
                                                            marginRight="8rem" sx={{ fontWeight: 'bold' , fontSize: 16}}>
                                                            Create Job Hunt Account
                                                    </Typography>
                                                    <Typography align='right' gutterBottom variant="h5" component="div"
                                                                sx={{fontSize: 12}}>
                                                                <Link href="/login" underline="none">Sign In </Link> 
                                                                Instead?
                                                    </Typography>
                                            </Typography>

                                            <Typography component="div" display="flex" flexDirection="column">    
                                                            <TextField
                                                                        id="outlined"
                                                                        label="Username"
                                                                        size="small"
                                                                        className="mb-2 mt-3"
                                                            />
                                                            <TextField
                                                                        id="outlined"
                                                                        label="Email"
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
                           
                                            <CardActions>
                                                        <Typography component="div" display="flex" flexDirection="column">
                                                                <Typography gutterBottom variant="h5"
                                                                            sx={{fontSize: 11, marginBottom: "1rem",marginLeft: "2rem", color: "grey" }}>
                                                                        By creating an account, I agree to the 
                                                                    <span className="text-blue-700"> Terms </span> 
                                                                        and
                                                                    <span className="text-blue-700"> Privacy Policy.</span>
                                                                </Typography>
                                                                <Button 
                                                                    size="medium"
                                                                    variant="contained"
                                                                    className="bg-black hover:bg-amber-400 hover:text-black hover:font-bold w-72 ml-16 mb-2 mt-2"
                                                                >Create Free Account</Button>
                                                        </Typography>
                                            </CardActions>
                            </Typography>
                    </Typography>
                </CardContent>
           </Card>
    </div>
  
}
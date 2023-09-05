import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'

// setting of theme for color change 
import { createTheme, ThemeProvider } from '@mui/material/styles';

// using react toast for more atrractive ui alerts 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#E3DED2"  ,
        },

    },
});


const Navbar = () => {

    // login toastify function :=
    const notify = () => toast.error("Wow so easy!" , { position: "top-center" ,  theme: "colored"});


    return (
        <>
            <AppBar position='fixed'  >
                <Toolbar >

                    <Typography variant='h5' flexGrow={1} > Blissfull bytes  </Typography>
                    <ThemeProvider  theme={theme} >
                    <Button variant='outlined' sx={{ mr: 1 }} endIcon={<LoginIcon />} onClick={()=> notify()} >Login</Button>
                    <ToastContainer />
                    <Button variant="outlined" startIcon={<AddIcon />} > CLick Me</Button>
                    </ThemeProvider>

                </Toolbar>
            </AppBar>
            <br /> <br /> <br />
       
        
        </>
    )
}

export default Navbar
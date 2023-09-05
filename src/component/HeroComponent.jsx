import { Box, Button, Container, Grid , Typography } from '@mui/material'
import React from 'react'
import CakeSection from './CakeSection'
import ContactUS from './ContactUS'

const CakeImg = "https://whipped.in/cdn/shop/files/pink-butterfly-cake.png?v=1686848832"

const HeroComponent = () => {
  return (

    <Grid container direction={'row'} alignItems={'center'}  >
        <Grid item xs={12} sm={6} order={{ xs : 2 , sm: 1 }} > 
         <Typography  variant={"h3"} > Blissfull bytes </Typography>
         <Typography  variant={"h6"} > We offer tasty cakes and sweets for you </Typography>
          <Button  sx={{ borderRadius  : 5 , color : "white"}} variant="contained">Call us</Button>
         </Grid>
       
         <Grid container item xs={12} sm={6} order={{ xs : 1 , sm : 2}} justifyContent={'center'} > 
           <Box component={"img"} src={CakeImg} sx={{  padding : 0 , margin: 0 , height : "auto" }} />
         </Grid>
    </Grid>

  
  
  )
}

export default HeroComponent
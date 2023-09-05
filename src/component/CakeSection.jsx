import React from 'react'
import { Typography, Divider, CardMedia, CardContent, Card, Stack } from '@mui/material'

const cardArr = [
    { name: "Red valvet", Image: "https://bakersg.com/cdn/shop/products/69_8_11zon.jpg?v=1682917155" },
    { name: "Vanila", Image: "https://5.imimg.com/data5/SELLER/Default/2020/12/LD/RO/AY/54623578/butterscotchdesignercake-500x500.jpg" },
    { name: "Butter Sakoch", Image: "https://i.ytimg.com/vi/ODOzjFuSztE/maxresdefault.jpg" },
    { name: "Black Current", Image: "https://cakebee.in/cdn/shop/products/BlackCurrantCakeWEBSITE_1_d430fe89-4601-4ff1-8481-430439c99806.jpg?v=1678990863" },
    { name: "Kesar pista", Image: "https://www.tfcakes.in/images/products/220309_095617_944_872.jpeg" },
    { name: "Raj Bhog", Image: "https://www.cakegift.in/sites/default/files/RajBhog%20Flavur%20cake.png" },
]

const CakeSection = () => {
    return (
        <>
            <Typography variant='h3' mt={4} mb={2} component={'div'} > Cards - </Typography>

            <Stack direction={"row"} divider={<Divider orientation="vertical" flexItem />} flexWrap="wrap" justifyContent={"space-evenly"} >
                {
                    cardArr.map((item, index) => (

                        <Card sx={{ maxWidth: 345, mt: 2 }} key={index} >
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.Image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>

                        </Card>

                    ))
                }
            </Stack>

        </>
    )
}

export default CakeSection
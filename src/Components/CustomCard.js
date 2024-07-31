import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CustomCard = ({ item }) => {
    return (
        <>
            <Card variant='outlined' sx={{height:'100%'}}>
                <CardContent>
                    <CardMedia component='img' src={item.thumbnailUrl} alt={item.title} sx={{minHeight:'50%'}}/>
                    <CardContent>
                        <Typography fontWeight={600}>{item.title}</Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </>
    )
}

export default CustomCard

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Cards({ title, img, des }) {
    return (
        <Card id='ard' sx={{ width: "230px", marginTop: "10px", overflow: "hidden" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {des}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Visit</Button>
            </CardActions>
        </Card>
    )
}

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

function OneCard(props) {

    return (
            <Card raised className="card" sx={{maxWidth: 600, minWidth: 300}} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="130"
                image={props.image}
              >
              </CardMedia>
              <CardContent mt={1}>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
                <h6>{props.actionText}</h6>    
               </CardContent> 
            </CardActionArea>
          </Card>
    );
}

export default OneCard;
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

function OneCard(props) {
  const { ref: cardRef, inView: cardIsIvisble } = useInView();

  return (
    <Card
      raised
      className={cardIsIvisble ? 'card animate-card' : 'card'}
      ref={cardRef}
      sx={{ maxWidth: 600, minWidth: 300 }}
    >
      <CardActionArea href={props.cardHref}>
        <CardMedia component="img" height="130" image={props.image}></CardMedia>
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

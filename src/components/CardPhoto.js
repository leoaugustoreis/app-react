import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardPhoto(
  {
    photo
  }
) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo.url}
          title={photo.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardPhoto;
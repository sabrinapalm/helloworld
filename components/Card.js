import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 345,
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  const defaultImg = 'https://image.ibb.co/nxNv4z/pexels_photo_691668.jpg';
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.data.imgurl || defaultImg}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.data.city}
          </Typography>
          <Typography variant="body2">
            {props.data.title}
          </Typography>
          <Typography component="p">
            {props.data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="default">
            EDIT
          </Button>
          <Button size="small" color="default">
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleMediaCard);

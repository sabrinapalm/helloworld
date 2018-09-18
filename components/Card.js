import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormDialogEdit from './FormEdit.js';

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
  const deleteTravel = () => {
    fetch(`http://localhost:3000/travel/${props.data.id}`, {
       method: 'delete',
   })
   .then( ()=>{
     props.updateData();
     console.log("data is deleted!.. id: ", props.data.id);
   })
  }
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.data.imgurl}
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

          <FormDialogEdit data={props.data} updateData={props.updateData} />

          <Button size="small" color="default" onClick={deleteTravel}>
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleMediaCard);

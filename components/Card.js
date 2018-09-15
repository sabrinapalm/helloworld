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
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://9qjzgzbyth-flywheel.netdna-ssl.com/wp-content/uploads/2017/07/smogen-gothenburg.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Gothenburg
          </Typography>
          <Typography component="p">
            Quinoa helvetica williamsburg sartorial vinyl ramps meh coloring book man bun paleo.
            Salvia you probably havent heard of them blog, cold-pressed knausgaard butcher kickstarter. Pinterest artisan +1 knausgaard schlitz.
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

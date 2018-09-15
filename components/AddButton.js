import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Form from './Form'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <Link href="/form">
      <Button variant="outlined" color="primary" size="large" className={classes.button}>
        {props.children}
      </Button>
      </Link>
    </div>
  );
}

export default withStyles(styles)(AddButton);

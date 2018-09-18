import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';

import fetch from 'isomorphic-unfetch'

export default class FormDialog extends React.Component {
  state = {
    open: false,
    title: '',
    description: '',
    name: '',
    city: '',
    date: '',
    imgurl: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  addTripToDatabase = () => {
    const { title, description, name, city, date, imgurl } = this.state;
    const tripObject = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      name,
      city,
      date,
      imgurl,
    }
    fetch('http://localhost:3000/travel/', {
       method: 'post',
       body:    JSON.stringify(tripObject),
       headers: { 'Content-Type': 'application/json' },
   })
   .then(() => {
     this.props.updateData();
     this.setState({ open: false });
   });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    return (
      <div>
        <Button color="primary" variant="outlined" size="large" onClick={this.handleClickOpen}>
          ADD YOUR TRIP
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.addTripToDatabase}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ADD YOUR TRIP</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is where you add the city you visited together with your experience.
            </DialogContentText>
            <TextField
              autoFocus
              margin="normal"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
              multiline
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              label="Your name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              label="City"
              value={this.state.city}
              onChange={this.handleChange('city')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              label="Date"
              type="date"
              value={this.state.date}
              onChange={this.handleChange('date')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="normal"
              label="Img URL"
              fullWidth
              value={this.state.imgurl}
              onChange={this.handleChange('imgurl')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions style={{padding: 15, marginTop: -20}}>
            <Button onClick={this.addTripToDatabase} color="secondary" variant="outlined" fullWidth>
              ADD YOUR TRIP
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

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
    error: {},
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

    let error = {}

    if(!title)
      error.title = true;

    if(!description)
      error.description = true;

    if(!name)
      error.name = true;

    if(!city)
      error.city = true;

    if(!date)
      error.date = true;

    if(!imgurl)
      error.imgurl = true;


    if(Object.keys(error).length > 0 ){
      console.log(error);
      this.setState({error})
      return null;
    }

    fetch('http://localhost:3000/travel/', {
       method: 'post',
       body:    JSON.stringify(tripObject),
       headers: { 'Content-Type': 'application/json' },
   })
   .then(() => {
     this.props.updateData();
     this.setState({
       open: false,
       title: '',
       description: '',
       name: '',
       city: '',
       date: '',
       imgurl: '',
       error: {},
     });
   });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    const { error } = this.state;
    return (
      <div>
        <Button color="primary" variant="outlined" size="large" onClick={this.handleClickOpen}>
          ADD YOUR TRIP
        </Button>
        <Dialog
          open={this.state.open}
          onClose={ ()=>{ this.setState({ open: false, error: {} }) }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ADD YOUR TRIP</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is where you add the city you visited together with your experience.
            </DialogContentText>
            <TextField
              error={error.title}
              helperText={error.title ? 'Empty input!' : ' '}
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
              error={error.description}
              helperText={error.description ? 'Empty input!' : ' '}
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
              error={error.name}
              helperText={error.name ? 'Empty input!' : ' '}
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
              error={error.city}
              helperText={error.city ? 'Empty input!' : ' '}
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
              error={error.date}
              helperText={error.date ? 'Empty input!' : ' '}
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
              error={error.imgurl}
              helperText={error.imgurl ? 'Empty input!' : ' '}
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

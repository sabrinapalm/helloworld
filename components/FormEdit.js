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

export default class FormDialogEdit extends React.Component {

  state = {
    open: false,
    id:this.props.data.id,
    title: this.props.data.title,
    description: this.props.data.description,
    name: this.props.data.name,
    city: this.props.data.city,
    date: this.props.data.date,
    imgurl: this.props.data.imgurl,
    error: {},
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  updateTrip = () => {
    const { id ,title, description, name, city, date, imgurl } = this.state;
    const tripObject = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      name: this.state.name,
      city: this.state.city,
      date: this.state.date,
      imgurl: this.state.imgurl,
    }

    let error = {}
    if(!this.state.id)
      error.id = true;

    if(!this.state.title)
      error.title = true;

    if(!this.state.description)
      error.description = true;

    if(!this.state.name)
      error.name = true;

    if(!this.state.city)
      error.city = true;

    if(!this.state.date)
      error.date = true;

    if(!this.state.imgurl)
      error.imgurl = true;


    if(Object.keys(error).length > 0 ){
      console.log(error);
      this.setState({error})
      return null;
    }

    fetch(`http://localhost:3000/travel/${this.state.id}`, {
       method: 'put',
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
    const { error } = this.state;
    return (
      <div>
        <Button size="small" color="default" onClick={this.handleClickOpen}>
          EDIT
        </Button>
        <Dialog
          open={this.state.open}
          onClose={ ()=>{ this.setState({ open: false, error: {} }) }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">EDIT YOUR TRIP</DialogTitle>
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
            <Button onClick={this.updateTrip} color="secondary" variant="outlined" fullWidth>
              UPDATE YOUR TRIP
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

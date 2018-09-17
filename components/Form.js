import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';

import AddButton from './AddButton';

export default class FormDialog extends React.Component {
  state = {
    open: true,
    title: '',
    description: '',
    name: '',
    city: '',
    date: '',
    imgurl: ''
  };

  handleClickOpen = () => {
    console.log('clickad!');
    this.setState({ open: true });
  };

  handleClose = () => {
    const { title, description, name, city, date, imgurl } = this.state;
    this.setState({ open: false });
    const tripObject = {
      title,
      description,
      name,
      city,
      date,
      imgurl,
    }
    console.log(tripObject);
    // TODO: skicka obj till db på något märkligt sätt
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    return (
      <div>
        <AddButton onClick={this.handleClickOpen}>ADD YOUR TRIP</AddButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">ADD CITY</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is where you add the city you visited together with your experience.
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              margin="dense"
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
              required
              margin="dense"
              label="Your name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              margin="dense"
              label="City"
              value={this.state.city}
              onChange={this.handleChange('city')}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              margin="dense"
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
              required
              margin="dense"
              label="Img url"
              fullWidth
              value={this.state.imgurl}
              onChange={this.handleChange('imgurl')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary" variant="outlined">
              ADD CITY
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

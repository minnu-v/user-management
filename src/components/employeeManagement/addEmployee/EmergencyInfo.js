import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(.1),
    minWidth: 120,
  },
}));

export default function EmergencyInfo() {

  const classes = useStyles();
  const [Relation, setRelation] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRelation(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Emergency Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="Phone Number"
            label="phone Number"
            fullWidth
            autoComplete="employee registartion-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Relation</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Relation}
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em> relation </em>
          </MenuItem>
          <MenuItem value={1}>Spouse</MenuItem>
          <MenuItem value={2}>Parent</MenuItem>
          <MenuItem value={3}>Others</MenuItem>
        </Select>
      </FormControl>
    </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="emergency-contact-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="emergency-contact-line2"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
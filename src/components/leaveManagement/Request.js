import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(0.1),
    minWidth: "100%",
  },
  submit: {
    margin: theme.spacing(7, 40, 2),
    textAlign: "centre",
    width: "25%",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [Leavetype, setLeavetype] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setLeavetype(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Apply Leave Here
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Leave-type*
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={Leavetype}
                    onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      <em> Leavetype </em>
                    </MenuItem>
                    <MenuItem value={1}>Sick-Leave</MenuItem>
                    <MenuItem value={2}>Casual-Leave</MenuItem>
                    <MenuItem value={3}>Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue="2021-01-01"
                type="date"
                variant="standard"
                required
                fullWidth
                id="date"
                label="From Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue="2021-01-01"
                type="date"
                variant="standard"
                required
                fullWidth
                id="date"
                label="To Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                label="Reason for leave"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Apply
          </Button>
        </form>
      </div>
    </Container>
  );
}

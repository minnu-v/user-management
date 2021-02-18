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
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
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
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  cardAlign:{
    marginLeft:'15%',
    marginTop:'5%'
  },

  
  cardAbbre: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    color: "#3F51B5",
    marginBottom: theme.spacing(2),
  },


  submit: {
    margin: theme.spacing(7, 40, 2),
    textAlign: "centre",
    width: "25%",
  },
}));
const tiers = [
  {
    title: "Casual Leave",
    abbre: "CL",
    description: ["Available:12", "Taken : 0"],
  },
  {
    title: "Sick Leave",
    abbre: "SL",
    description: ["Available:12", "Taken : 0"],
  },
];

export default function Request() {
  const classes = useStyles();
  const [Leavetype, setLeavetype] = React.useState("");
  const [duration, setduration] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);
  const handleChange = (event) => {
    setLeavetype(event.target.value);
  };

  const handleChangeOne = (event) => {
    setduration(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const handleOpenOne = () => {
    setOpenOne(true);
  };

  return (
    <div>
      <div>
        <CssBaseline />
        <Container maxWidth="md" component="main">
          <Grid container spacing={4} className={classes.cardAlign}>
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={6}
                sm={tier.title === "casualLeave" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                   
                  />
                  <CardContent>
                    <div className={classes.cardAbbre}>
                      <Typography component="h2" variant="h3">
                        {tier.abbre}
                      </Typography>
                    </div>
                    <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Apply Leave Here
          </Typography>
          <form className={classes.form} validate>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
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
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Duration*
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openOne}
                      onClose={handleCloseOne}
                      onOpen={handleOpenOne}
                      value={duration}
                      onChange={handleChangeOne}
                    >
                      <MenuItem disabled value="">
                        <em> Duration </em>
                      </MenuItem>
                      <MenuItem value={3}>Full-day</MenuItem>
                      <MenuItem value={4}>half-day</MenuItem>
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
    </div>
  );
}

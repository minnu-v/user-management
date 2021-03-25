import React from "react";
import { TextField } from "formik-material-ui";
import { useDispatch } from "react-redux";
import { ApplyLeave } from "store/action";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CssBaseline,
  Container,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

const ApplyLeaveSchema = Yup.object().shape({
  leaveType: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  fromDate: Yup.string().required("Required"),
  toDate: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

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
  cardAlign: {
    // marginLeft: "5%",
    marginTop: "5%",
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
    description: ["Available:6", "Taken : 0"],
  },
  {
    title: "Maternity Leave",
    abbre: "ML",
    description: ["Available:84", "Taken : 0"],
  },
];

export default function Request() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);

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

  
  const handleSubmit = async (value) => {
    console.log(value);
    const {leaveType, description, fromDate, toDate, duration
    } = value;
    const obj = {
      leaveType: leaveType,
      description: description,
      fromDate: fromDate,
      toDate: toDate,
      duration: duration,
    };
    dispatch(ApplyLeave(obj)).then((res) => {});
  };

  return (
    <Formik
      initialValues={{
        leaveType: "",
        duration: "",
        fromDate: "",
        toDate: "",
        description: "",
      }}
      validationSchema={ApplyLeaveSchema}
      enableReinitialize={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <div>
          {console.log("values", values)}
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
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
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

              <Form className={classes.form} validate>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Leave type</InputLabel>
                      <Select
                        name="leaveType"
                        id="leaveType"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={values.leaveType}
                        onChange={(e) =>
                          setFieldValue("leaveType", e.target.value)
                        }
                      >
                        <MenuItem disabled value="">
                          <em> leave type </em>
                        </MenuItem>
                        <MenuItem value={"Sick-Leave"}>Sick-Leave</MenuItem>
                        <MenuItem value={"Casual-Leave"}>Casual-Leave</MenuItem>
                      </Select>
                      <ErrorMessage name="leaveType" />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Duration</InputLabel>
                      <Select
                        name="duration"
                        id="duration"
                        open={openOne}
                        onClose={handleCloseOne}
                        onOpen={handleOpenOne}
                        value={values.duration}
                        onChange={(e) =>
                          setFieldValue("duration", e.target.value)
                        }
                      >
                        <MenuItem disabled value="">
                          <em> duration </em>
                        </MenuItem>
                        <MenuItem value={"Full-day"}>Full-day</MenuItem>
                        <MenuItem value={"half-day"}>half-day</MenuItem>
                      </Select>
                      <ErrorMessage name="duration" />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="fromDate"
                      label="From Date"
                      name="fromDate"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="toDate"
                      label="To Date"
                      name="toDate"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="description"
                      label="Reason for leave"
                      name="description"
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
              </Form>
            </div>
          </Container>
        </div>
      )}
    </Formik>
  );
}

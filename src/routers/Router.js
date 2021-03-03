import Login from "components/login/Login";
import Calender from '../components/workCalender/Calender';
import LeaveStatus from '../components/leaveManagement/LeaveStatus';
import Request from '../components/leaveManagement/Request';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DetailView from "components/myProfile/DetailView";

function AppRouter() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PublicRoute path="/" exact>
            <Login />
          </PublicRoute>
            <PrivateRoute path="/dashboard">
              <Calender />
            </PrivateRoute>
            <PrivateRoute path="/request">
              <Request />
            </PrivateRoute>
            <PrivateRoute path="/leavestatus">
              <LeaveStatus />
            </PrivateRoute>
            <PrivateRoute path="/detailview">
              <DetailView />
            </PrivateRoute>
            <PrivateRoute path="/calender">
              <Calender/>
            </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default AppRouter;

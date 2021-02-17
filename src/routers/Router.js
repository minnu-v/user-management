import Login from "components/login/Login";
// import Dashboard from "components/sidebar/Sidebar"
import Calender from '../components/workCalender/Calender';
import Approval from '../components/leaveManagement/Approval';
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
            <PrivateRoute path="/approval">
              <Approval />
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

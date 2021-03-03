import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#ad40bf",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {},
}))(TableRow);

function createData(No, EmployeeID, Date, Leavetype, Status) {
  return { No, EmployeeID, Date, Leavetype, Status };
}

const rows = [
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
];

const useStyles = makeStyles({
  wrapper: {
    padding: 40,
  },
  table: {
    minWidth: 700,
  },
  tdStyle: {
    padding: 25,
  },
  box: {
    border: "1px solid lightgrey",
    padding: 25,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <Paper className={classes.wrapper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell align="right">Employee Id</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Leave Type</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.No}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.tdStyle}
                >
                  {row.No}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.EmployeeID}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Date}</StyledTableCell>
                <StyledTableCell align="right">{row.Leavetype}</StyledTableCell>
                <StyledTableCell align="right">{row.Status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
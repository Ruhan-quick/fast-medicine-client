import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Orders = () => {
  const [takenOrders, setTakenOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://desolate-retreat-46685.herokuapp.com/showOrders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setTakenOrders(data));
  }, []);

  //   const theUser = localStorage.getItem("myLoggedInUserLocal");
  //   console.log(theUser);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <div className="container">
      <br />
      <h2>Ordered Medicine</h2>
      <h4>For:{loggedInUser.email}</h4>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Product Category</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {takenOrders.map((tod) => (
              <StyledTableRow key={tod._id}>
                <StyledTableCell component="th" scope="row">
                  {tod.productName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {tod.productCategory}
                </StyledTableCell>
                <StyledTableCell align="right">1</StyledTableCell>
                <StyledTableCell align="right">
                  {tod.productPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;

import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext, UserContext2 } from "../../App";

const Checkout = () => {
  const [clickedProduct, setClickedProduct] = useContext(UserContext2);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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

  const handleOrder = () => {
    const email = loggedInUser.email;
    const newIt = { email, ...clickedProduct };
    fetch("https://desolate-retreat-46685.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <h2>Checkout</h2> <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Product Name</StyledTableCell>
              <StyledTableCell align="center">Product Category</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                {clickedProduct.productName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {clickedProduct.productCategory}
              </StyledTableCell>
              <StyledTableCell align="center">1</StyledTableCell>
              <StyledTableCell align="center">
                {clickedProduct.productPrice}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <button
        onClick={handleOrder}
        style={{ float: "right" }}
        className="btn btn-warning"
      >
        Order
      </button>
    </div>
  );
};

export default Checkout;

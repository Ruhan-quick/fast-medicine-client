import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

const ManageProducts = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const [medicines, setMedicines] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("https://desolate-retreat-46685.herokuapp.com/showMedicines")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);
  const classes = useStyles();

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://desolate-retreat-46685.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        alert("deleted successfully");
      })
      .then((result) => {
        console.log("deleted successfully"); //working
        document.getElementById(`${id}`).innerHTML = ""; //not working
        window.location.reload();
        alert("deleted successfully");
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead style={{ backgroundColor: "#F5F6FA" }}>
            <TableRow>
              <TableCell align="center"> Medicine Name </TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((row) => (
              <TableRow id={`${row._id}`} key={row._id}>
                <TableCell align="center" component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="center">{row.productCategory}</TableCell>
                <TableCell align="center">${row.productPrice}</TableCell>
                <TableCell align="center">
                  <EditIcon />
                  <DeleteIcon onClick={() => handleDelete(`${row._id}`)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {medicines.map((medicine) => (
        <li>
          {medicine.productName}---{medicine.productCategory}---
          {medicine.productPrice}
        </li>
      ))} */}
    </div>
  );
};

export default ManageProducts;

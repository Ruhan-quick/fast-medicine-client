import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import WidgetsIcon from "@material-ui/icons/Widgets";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import AddProduct from "./AddProduct";
import "./Admin.css";
import ManageProducts from "./ManageProducts";

const Admin = () => {
  const [page, setPage] = useState("manageProducts");

  const handleClick = (pn) => {
    setPage(pn);
  };

  return (
    <div className="container">
      <Grid container>
        <Grid
          style={{
            backgroundColor: "wheat",
            borderRadius: "10px",
            marginTop: "20px",
          }}
          item
          sm={3}
          xs={12}
          className="adminPanelList"
        >
          <List>
            <ListItem
              onClick={() => handleClick("manageProducts")}
              button
              key="manage-products"
            >
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>

            <ListItem
              onClick={() => handleClick("addProducts")}
              button
              key="add-products"
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Products" />
            </ListItem>

            <ListItem
              onClick={() => handleClick("editProducts")}
              button
              key="edit-products"
            >
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Products" />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={9} xs={12} style={{ padding: "20px" }}>
          {page === "manageProducts" && <ManageProducts></ManageProducts>}
          {page === "addProducts" && <AddProduct></AddProduct>}
          {page === "editProducts" && <h2>You have {page} messages.</h2>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;

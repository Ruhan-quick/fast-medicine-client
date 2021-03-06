import { CircularProgress, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import MediItem from "./MediItem";
import { useHistory } from "react-router-dom";
import { UserContext2 } from "../../App";

const Home = () => {
  const [clickedProduct, setClickedProduct] = useContext(UserContext2);
  const [medicines, setMedicines] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://desolate-retreat-46685.herokuapp.com/showMedicines")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  const handleCheckout = (med) => {
    history.push("checkout");
    console.log("buy button clicked");
    setClickedProduct(med);
  };

  return (
    <div className="container">
      <Grid container>
        {medicines.length === 0 && (
          <div>
            <CircularProgress />
          </div>
        )}
        {medicines.map((med) => (
          <Grid
            key={med._id}
            style={{
              border: "0px solid red",
              margin: "40px",
              backgroundColor: "palegoldenrod",
              borderRadius: "10px",
              boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            }}
            align="center"
            item
            xs={12}
            sm={2}
            xl={6}
          >
            <img
              style={{
                height: "200px",
                width: "100%",
                borderRadius: "10px",
              }}
              src={`${med.productImage}`}
            ></img>
            <h3 style={{ textAlign: "center" }}>{med.productName}</h3>
            <span
              className="d-flex"
              style={{ justifyContent: "space-between", padding: "10px" }}
            >
              <h3>${med.productPrice} </h3>
              <button
                onClick={() => handleCheckout(med)}
                className="btn btn-warning"
              >
                Buy
              </button>
            </span>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

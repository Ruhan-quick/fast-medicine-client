import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

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

  return (
    <div className="container">
      {/* <h3>The User: {theUser.email}</h3> */}
      <h2>This is order page</h2>
      {takenOrders.map((tod) => (
        <li key={tod._id}>
          Email: {tod.email} Medicine:{tod.productName}
        </li>
      ))}
    </div>
  );
};

export default Orders;

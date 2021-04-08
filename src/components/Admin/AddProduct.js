import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  const [itData, setItData] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productImage: "",
  });

  const onChangeDt = () => {
    const newData = { ...itData };
    const name = document.getElementById("nameId").value;
    const category = document.getElementById("categoryId").value;
    const price = document.getElementById("priceId").value;
    newData.productName = name;
    newData.productCategory = category;
    newData.productPrice = price;
    setItData(newData);
    console.log(newData);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7898c87b25e0dcb3d9e11ef7ce79a7af");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        const newData = { ...itData };
        newData.productImage = response.data.data.display_url;
        setItData(newData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddProduct = () => {
    fetch("https://desolate-retreat-46685.herokuapp.com/addMedicine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3>Add Product</h3>

      <div
        className="container"
        style={{
          padding: "20px",
          borderRadius: "15px",
          border: "1px solid blue",
        }}
      >
        <Container>
          <Row>
            <Col sm={6} xs={12}>
              <Form.Label style={{ marginTop: "5px" }}>Product Name</Form.Label>
              <Form.Control
                onBlur={onChangeDt}
                type="text"
                placeholder="Enter Name"
                id="nameId"
              />
            </Col>
            <Col sm={6} xs={12}>
              <Form.Label style={{ marginTop: "5px" }}>
                Product Category
              </Form.Label>
              <Form.Control
                onBlur={onChangeDt}
                id="categoryId"
                type="text"
                placeholder="Enter Category"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12}>
              <Form.Label style={{ marginTop: "15px" }}>
                Product Price
              </Form.Label>
              <Form.Control
                onBlur={onChangeDt}
                id="priceId"
                type="text"
                placeholder="Enter Prce"
              />
            </Col>
            <Col sm={6} xs={12}>
              <Form.Label style={{ marginTop: "15px" }}>
                Upload Photo
              </Form.Label>
              <Form.Control
                style={{ color: "green" }}
                className=""
                type="file"
                placeholder="Upload Photo"
                onChange={handleImageUpload}
              />
            </Col>
          </Row>
          <button
            className="btn btn-warning"
            type="submit"
            style={{
              float: "right",
              marginTop: "30px",
            }}
            onClick={handleAddProduct}
          >
            Save
          </button>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;

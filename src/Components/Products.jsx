import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterproducts, setfilterProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setsearch] = useState("");
  const [access_token, setaccess_token] = useState("");
  const access = useSelector((state) => state.loginData);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setaccess_token(access.data.response.access_token);
      try {
        async function productData() {
          const response = await fetch(
            "https://api.kalpav.com/api/v1/product/category/retail",
            {
              method: "GET",
              headers: { Authorization: access_token },
            }
          );
          const data = await response.json();
          setProducts(data.response);
        }
        productData();
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      navigate("/");
    }
  }, [access]);

  useEffect(() => {
    if (search.length === 0) {
      setfilterProducts(products);
    }
  }, [search]);

  // console.log(products)

  const onSubmit = (e) => {
    e.preventDefault();
    const p = products.filter((item) => {
      // console.log(item);
      return item.productCategory.productCategoryName
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setfilterProducts(p);
    // console.log(filterproducts);
  };
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return (
    <div className="container">
      <form
        className="d-flex my-5 justify-content-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          type="text"
          className="form-control mx-3 w-25"
          placeholder="Search Your Choice..."
          required
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <b>Search</b>
        </button>
      </form>
      <div className="d-flex justify-content-md-between justify-content-center flex-wrap mt-4 row-gap-4">
        {filterproducts.length === 0 || search.length === 0
          ? products.length
            ? products.map((item) => {
                return (
                  <div
                    className="card product-card rounded-5 shadow-lg"
                    style={{ width: "18rem" }}
                    key={Math.random()}
                  >
                    <img
                      src={item.productCategory.productCategoryImage}
                      className="card-img-top w-100 p-4"
                      alt="..."
                    />
                    <hr className="mx-3" />
                    <div className="card-body bg-primary bg-opacity-25 rounded-5 mx-3 my-2 shadow-sm">
                      <h5 className="card-title">
                        <b>{item.productCategory.productCategoryName}</b>
                      </h5>
                      <p className="card-text">
                        "Experience the Swift and Savory Service of Promilo -
                        Your Prime Choice for Fresh Deliveries!"
                      </p>
                      <button onClick={handleShow} className="btn btn-primary rounded-5">
                      <b>Bring it Home</b>
                    </button>
                    </div>
                  </div>
                );
              })
            : ""
          : filterproducts.map((item) => {
              return (
                <div
                  className="card product-card rounded-5 shadow-lg"
                  style={{ width: "18rem" }}
                  key={Math.random()}
                >
                  <img
                    src={item.productCategory.productCategoryImage}
                    className="card-img-top w-100 p-4"
                    alt="..."
                  />
                  <hr className="mx-3" />
                  <div className="card-body bg-primary bg-opacity-25 rounded-5 mx-3 my-2 shadow-sm">
                    <h5 className="card-title">
                      <b>{item.productCategory.productCategoryName}</b>
                    </h5>
                    <p className="card-text">
                      "Experience the Swift and Savory Service of Promilo - Your
                      Prime Choice for Fresh Deliveries!"
                    </p>
                    <button onClick={handleShow} className="btn btn-primary rounded-5">
                      <b>Bring it Home</b>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
      <div>
      

      <Modal show={showModal} onHide={handleClose} centered backdrop>
        <Modal.Header closeButton>
          <Modal.Title ><b className="text-primary">Hello User...</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b className="text-primary">Thanks For Choosing Promilo...Happy Shopping</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* Add additional buttons as needed */}
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default Products;

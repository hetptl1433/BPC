import React, { useState, useEffect } from "react";
import { Carousel, Tabs, Tab, Table } from "react-bootstrap";
import { fetchBookNow } from "../../../Functions/BookNow";
import { useParams } from "react-router-dom";

const BookCard = () => {
  const [bookdata, setBookData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchInnerData = async () => {
      try {
        const data = await fetchBookNow(id);
        setBookData(data.data);
        console.log("Course Data:", data.data);
      } catch (error) {
        console.error("Error loading course data:", error);
      }
    };
    fetchInnerData();
  }, [id]);

  // Function to handle adding items to the cart
  const addToCart = (name, price, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * price,
              }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            name,
            price,
            quantity,
            total: quantity * price,
          },
        ];
      }
    });
  };

  // Function to increase item quantity in the upper table
  const increaseUpperQuantity = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  // Function to decrease item quantity in the upper table
  const decreaseUpperQuantity = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: (item.quantity - 1) * item.price,
            }
          : item
      )
    );
  };

  // Function to handle removing items from the cart
  const removeFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  return (
    <div className="resource-news">
      <section className="resources_news blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer container">
          <h3 className="heading32 pb-3">{bookdata.Name}</h3>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Carousel fade id="carouselExampleIndicators" className="c1">
                <Carousel.Item className="carousel-item active">
                  <img
                    src={`${process.env.REACT_APP_API_URL_BPC}/${bookdata.Icon}`}
                    className="d-block w-100"
                    alt="..."
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6 col-lg-6 tttd">
              <Tabs
                className="custom-tabs"
                variant="pills"
                defaultActiveKey="rate-card"
              >
                <Tab
                  eventKey="rate-card"
                  title="Rate Card"
                  style={{ color: "red" }}
                >
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home">
                      <div className="row mt-3">
                        {/* Half Day and Full Day Pricing Code */}
                      </div>
                      <div className="room_detail col-lg-12 col-mg-12 mt-3 p-4">
                        {bookdata?.Desc ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: bookdata.Desc,
                            }}
                          ></div>
                        ) : (
                          <p>No description available.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="book-now" title="Book Now">
                  <Table bordered className="mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col" style={{ width: "155px" }}>
                          Quantity
                        </th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample Data with Add to Cart functionality */}
                      <tr>
                        <td>1</td>
                        <td>LCD Projector (8 Hrs.)</td>
                        <td>2124.00</td>
                        <td>
                          <div className="quantity-control">
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                decreaseUpperQuantity("LCD Projector (8 Hrs.)")
                              }
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={
                                cartItems.find(
                                  (item) =>
                                    item.name === "LCD Projector (8 Hrs.)"
                                )?.quantity || 1
                              }
                              min="1"
                              readOnly
                              className="form-control d-inline-block text-center"
                              style={{ width: "60px" }}
                            />
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                increaseUpperQuantity("LCD Projector (8 Hrs.)")
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          {(
                            (cartItems.find(
                              (item) => item.name === "LCD Projector (8 Hrs.)"
                            )?.quantity || 1) * 2124.0
                          ).toFixed(2)}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            onClick={() =>
                              addToCart("LCD Projector (8 Hrs.)", 2124.0)
                            }
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Cart Items Table */}
                  <div className="cart-table table-responsive">
                    <table
                      className="table table-bordered"
                      id="QuotationDetailtbl"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col" style={{ width: "155px" }}>
                            Quantity
                          </th>
                          <th scope="col">Total</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total.toFixed(2)}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-xs"
                                onClick={() => removeFromCart(item.name)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCard;

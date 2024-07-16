import React from "react";
import { Carousel, Tabs, Tab, Table } from "react-bootstrap";
import captcha from "../../../assets/images/Book/Generate.gif";
import pht4 from "../../../assets/images/Extra/df6c785c9b5940c7ad82038028f29694.jpg";

const BookCard = () => {
  const handleCaptchaRefresh = () => {
    // Implement your refresh captcha logic here
    // Example: $.post("/DefaultCaptcha/Refresh", { t: $('#CaptchaDeText').val() }, function(){$('#3338f4b68e5d4c639ebdf7876552d1fb').show();});
  };
  return (
    <div className="resource-news">
      <section className="resources_news blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer container">
          <h3 className="heading32 pb-3">Seminar Hall</h3>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Carousel fade id="carouselExampleIndicators" className="c1">
                <Carousel.Item className="carousel-item active">
                  <img src={pht4} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6 col-lg-6">
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
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="tab-box ft-5 ">Half Day</h1>
                          <div className="bodybox mt-2">
                            <h1 className="heading18 ft-5">Capacity: 170</h1>
                            <h1 className="heading18 ft-5">
                              Basic Value: 9000.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              + Central GST: 810.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              + State GST: 810.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              Total: Rs. 10620.00
                            </h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h1 className="tab-box ft-5">Full Day</h1>
                          <div className="bodybox mt-2">
                            <h1 className="heading18 ft-5">Capacity: 170</h1>
                            <h1 className="heading18 ft-5">
                              Basic Value: 15000.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              + Central GST: 1350.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              + State GST: 1350.00
                            </h1>
                            <h1 className="heading18 ft-5">
                              Total: Rs. 17700.00
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="room_detail col-lg-12 col-mg-12 mt-3 p-4">
                        <ul>
                          <li style={{ fontWeight: 400, color: "#1b1918" }}>
                            Facilities like Equipped with projector, Sound
                            system
                          </li>
                          <li style={{ fontWeight: 400, color: "#1b1918" }}>
                            Sitting Capacity 170 persons
                          </li>
                        </ul>
                        <p style={{ fontWeight: 600, color: "#1b1918" }}>
                          We have got following infrastructure facilities, which
                          you can avail for your meetings, conferences,
                          interviews and other business gatherings.
                        </p>
                        <p style={{ fontWeight: 600, color: "#1b1918" }}>
                          We request you to do let us know your requirement plus
                          if any extra arrangement is required to make your
                          meetings successful.
                        </p>
                        <p style={{ fontWeight: 600, color: "#1b1918" }}>
                          Contact Us Mr. Nilesh Ladva – Sr. Executive,
                          Commercial &amp; IT (M): 7383183381; (E):
                          info@bpcindia.org; (w): www.bpcindia.org
                        </p>
                        <p style={{ fontWeight: 600, color: "#1b1918" }}>
                          <span style={{ color: "#e41f28" }}>Note:</span> For
                          further Booking Process click on Book Now
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="book-now" title="Book Now">
                  <Table bordered>
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
                        <th style={{ display: "none" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>LCD Projector (8 Hrs.)</td>
                        <td>2124.00</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="button"
                              value="-"
                              className="button-minus"
                              data-field="quantity_4"
                            />
                            <input
                              type="number"
                              step="1"
                              max=""
                              value="1"
                              name="quantity_4"
                              className="quantity-field"
                              style={{ marginLeft: "44px" }}
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus"
                              data-field="quantity_4"
                              style={{ marginLeft: "103px" }}
                            />
                            <input
                              type="hidden"
                              id="mainprice_4"
                              value="2124.00"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            readOnly
                            id="Price_4"
                            value="2124.00"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs ml-2"
                          >
                            Add
                          </button>
                        </td>
                        <td style={{ display: "none" }}>4</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LCD Projector (4 Hrs.)</td>
                        <td>1180.00</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="button"
                              value="-"
                              className="button-minus"
                              data-field="quantity_5"
                            />
                            <input
                              type="number"
                              step="1"
                              max=""
                              value="1"
                              name="quantity_5"
                              className="quantity-field"
                              style={{ marginLeft: "44px" }}
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus"
                              data-field="quantity_5"
                              style={{ marginLeft: "103px" }}
                            />
                            <input
                              type="hidden"
                              id="mainprice_5"
                              value="1180.00"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            readOnly
                            id="Price_5"
                            value="1180.00"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs ml-2"
                          >
                            Add
                          </button>
                        </td>
                        <td style={{ display: "none" }}>5</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sub Staff Charges (8 Hrs.)</td>
                        <td>472.00</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="button"
                              value="-"
                              className="button-minus"
                              data-field="quantity_6"
                            />
                            <input
                              type="number"
                              step="1"
                              max=""
                              value="1"
                              name="quantity_6"
                              className="quantity-field"
                              style={{ marginLeft: "44px" }}
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus"
                              data-field="quantity_6"
                              style={{ marginLeft: "103px" }}
                            />
                            <input
                              type="hidden"
                              id="mainprice_6"
                              value="472.00"
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            type="text"
                            readOnly
                            id="Price_6"
                            value="472.00"
                            className="form-control"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs ml-2"
                          >
                            Add
                          </button>
                        </td>
                        <td style={{ display: "none" }}>6</td>
                      </tr>
                    </tbody>
                  </Table>
                  <form
                    action="/Home/BookPost"
                    encType="multipart/form-data"
                    id="Bookform"
                    method="post"
                    noValidate
                  >
                    <div className="row form-row">
                      <input
                        type="hidden"
                        id="hdfHalfDayTotal"
                        value="10620.00"
                      />
                      <input
                        type="hidden"
                        id="hdfFullDayTotal"
                        value="17700.00"
                      />
                      <div className="form-group col-md-6">
                        <input
                          id="SelectPaymentMethod"
                          name="BookingMaster.DayBooking"
                          type="radio"
                          value="HalfDay"
                          defaultChecked
                        />
                        <h1 className="tab-box">Half Day Rs. 10620.00</h1>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          id="SelectPaymentMethod"
                          name="BookingMaster.DayBooking"
                          type="radio"
                          value="FullDay"
                        />
                        <h1 className="tab-box">Full Day Rs. 17700.00</h1>
                      </div>
                      <input
                        id="BookingType"
                        name="BookingMaster.BookingType"
                        type="hidden"
                        value="Hall"
                      />
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_BookingDate">
                          Book Date
                        </label>
                        <input
                          className="form-control"
                          data-val="true"
                          data-val-date="The field BookingDate must be a date."
                          id="BookingMaster_BookingDate"
                          name="BookingMaster.BookingDate"
                          type="date"
                        />
                        <span
                          className="field-validation-valid"
                          data-valmsg-for="BookingMaster.BookingDate"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                      <div className="form-group col-md-6"></div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_CompanyName">
                          Company Name
                        </label>
                        <input
                          className="form-control"
                          id="BookingMaster_CompanyName"
                          name="BookingMaster.CompanyName"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_Email">
                          Contact Person
                        </label>
                        <input
                          className="form-control"
                          data-val="true"
                          data-val-required="This field is required."
                          id="BookingMaster_Email"
                          name="BookingMaster.Email"
                          type="email"
                        />
                        <span
                          className="field-validation-valid"
                          data-valmsg-for="BookingMaster.Email"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_ContactNo">
                          Email Address
                        </label>
                        <input
                          className="form-control"
                          data-val="true"
                          data-val-required="This field is required."
                          id="BookingMaster_ContactNo"
                          name="BookingMaster.ContactNo"
                          type="text"
                        />
                        <span
                          className="field-validation-valid"
                          data-valmsg-for="BookingMaster.ContactNo"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_Address">
                          Mobile Number
                        </label>
                        <input
                          className="form-control"
                          id="BookingMaster_Address"
                          name="BookingMaster.Address"
                        ></input>
                      </div>
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
                              <th style={{ display: "none" }}></th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Render your table rows dynamically here if needed */}
                          </tbody>
                        </table>
                      </div>
                      <div className="form-group col-md-6">
                        <img
                          src={captcha}
                          alt="Captcha"
                          className="captcha-img"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Total :</label>
                        <input
                          type="text"
                          name="BookingMaster.Total"
                          readOnly
                          id="Total"
                          value="10620.00"
                          className="form-control vvv"
                          fdprocessedid="ceggv"
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <br />
                          <a
                            href="#CaptchaImage"
                            id="3338f4b68e5d4c639ebdf7876552d1fb"
                            onClick={handleCaptchaRefresh}
                            style={{}}
                          >
                            Refresh
                          </a>
                          <br />
                          Input symbols
                          <br />
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            id="CaptchaInputText"
                            name="CaptchaInputText"
                            type="text"
                            value=""
                            fdprocessedid="y46on9"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
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

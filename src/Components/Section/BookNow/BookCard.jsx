import React, { useEffect, useState } from "react";
import { Carousel, Tabs, Tab, Table } from "react-bootstrap";
import captcha from "../../../assets/images/Book/Generate.gif";
import pht4 from "../../../assets/images/Extra/df6c785c9b5940c7ad82038028f29694.jpg";
import { fetchBookNow } from "../../../Functions/BookNow";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "react-router-dom";
const BookCard = () => {
  const [bookdata, setBookData] = useState([]);
  
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

const handleCaptchaRefresh = async () => {
  try {
    const captchaText = document.getElementById("CaptchaDeText").value;

    // Make the POST request to refresh the captcha
    const response = await fetch("/DefaultCaptcha/Refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ t: captchaText }),
    });

    if (response.ok) {
      // Handle successful captcha refresh (e.g., update the captcha image or show a message)
      document.getElementById(
        "3338f4b68e5d4c639ebdf7876552d1fb"
      ).style.display = "block";
      console.log("Captcha refreshed successfully");
    } else {
      console.error("Failed to refresh captcha");
    }
  } catch (error) {
    console.error("Error refreshing captcha:", error);
  }
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
                        <div className="col-md-6">
                          <h1 className="tab-box ft-5 ">Half Day</h1>
                          <div className="bodybox mt-2">
                            <h1 className="heading18 ft-5">
                              {bookdata.HalfDayCapacity}
                            </h1>
                            <h1 className="heading18 ft-5">
                              Basic Value: {bookdata.HalfDayCapacity}
                            </h1>
                            <h1 className="heading18 ft-5">
                              + Central GST:{bookdata.HalfDayCentralGST}
                            </h1>
                            <h1 className="heading18 ft-5">
                              + State GST:{bookdata.HalfDayStateGST}
                            </h1>
                            <h1 className="heading18 ft-5">
                              Total: Rs.{bookdata.HalfDayTotal}
                            </h1>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h1 className="tab-box ft-5">Full Day</h1>
                          <div className="bodybox mt-2">
                            <h1 className="heading18 ft-5">
                              Capacity: {bookdata.FullDayCapacity}
                            </h1>
                            <h1 className="heading18 ft-5">
                              Basic Value: {bookdata.FullDayBasicValue}
                            </h1>
                            <h1 className="heading18 ft-5">
                              + Central GST: {bookdata.FullDayCentralGST}
                            </h1>
                            <h1 className="heading18 ft-5">
                              + State GST:{bookdata.FullDayStateGST}
                            </h1>
                            <h1 className="heading18 ft-5">
                              Total: Rs. {bookdata.FullDayTotal}
                            </h1>
                          </div>
                        </div>
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
                              className="quantity-field ml47"
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus ml103"
                              data-field="quantity_4"
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
                              className="quantity-field ml47"
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus ml103"
                              data-field="quantity_5"
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
                              className="quantity-field ml47"
                            />
                            <input
                              type="button"
                              value="+"
                              className="button-plus ml103"
                              data-field="quantity_6"
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
                        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
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

                      <div className="form-row"></div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
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

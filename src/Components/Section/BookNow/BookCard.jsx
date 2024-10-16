import React, { useEffect, useState } from "react";
import { Carousel, Tabs, Tab, Table } from "react-bootstrap";
import pht4 from "../../../assets/images/Extra/df6c785c9b5940c7ad82038028f29694.jpg";
import { fetchBookNow , fetchDataByTitles, fetchExtraBook, fetchExtraBookImage} from "../../../Functions/BookNow";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "react-router-dom";
import { createBookingDetails, createExtraBookingDetails } from "../../../Functions/BookingDetails";
import { toast, ToastContainer } from "react-toastify";
const initialState = {
  BookDate: "",
  Email: "",
  Mobile: "",
  ContactPerson: "",
  CompanyName: "",
  HallName: "",
  BookTime: "HalfDay",
  IsActive: true,
};
const BookCard = () => {
  const [bookdata, setBookData] = useState([]);
  const [BookDataImage, setBookDataImage] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(null); 
  const [bookTime, setBookTime] = useState("Half Day");

  const [extraBookData, setExtraBookData] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [addedItems, setAddedItems] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [extraprice, setextraprice] = useState(null);
  const [isToastVisible, setToastVisibility] = useState(false);
  const [values, setValues] = useState(initialState);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaErr, setCaptchaErr] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [selectedPrice, setSelectedPrice] = useState(0); // Default to Half Day price

  useEffect(() => {
    setSelectedPrice(Number(bookdata.HalfDayTotal));
    setTotal(Number(bookdata.HalfDayTotal));
  }, [bookdata]);

  const { title } = useParams();
  const sanitizedTitle = title.replace(/\s+/g, ""); // Removes all spaces

  const handleOptionChange = (e) => {
    const value =
      e.target.value === "HalfDay"
        ? Number(bookdata.HalfDayTotal)
        : Number(bookdata.FullDayTotal);
    setSelectedPrice(value);
    if (value == Number(bookdata.HalfDayTotal)) {
      setBookTime("Half Day");
    } else {
      setBookTime("Full Day");
    }
    setTotal(value);
    setAddedItems([]);
  };


  useEffect(() => {
    fetchExtraBooks();
    fetchInnerData();
    fetchDataByTitle();
    fetchInnerDataImage();
  }, [id]);

  const fetchInnerDataImage = async () => {
    try {
      const data = await fetchExtraBookImage(id);
      setBookDataImage(data.data);
    } catch (error) {
      console.error("Error loading Booking data:", error);
    }
  };

  const fetchInnerData = async () => {
    try {
      const data = await fetchBookNow(id);
      setBookData(data.data);
    } catch (error) {
      console.error("Error loading Booking data:", error);
    }
  };
  const fetchDataByTitle = async () => {
    try {
      const data = await fetchDataByTitles(title);
      console.log("aj joie che",data.data._id);
    setId(data.data._id);
    } catch (error) {
      console.error("Error loading Booking data:", error);
    }
  };
  const fetchExtraBooks = async () => {
    try {
      const data = await fetchExtraBook();

      setExtraBookData(data.data);
      const initialQuantities = {};
      data.forEach((item) => {
        initialQuantities[item._id] = 1; // Default quantity is 1
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error loading course data:", error);
    }
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, (prevQuantities[id] || 1) + delta); // Ensure quantity doesn't go below 1
      return { ...prevQuantities, [id]: newQuantity };
    });
  };
  const handleDeleteClick = (itemId) => {
    setAddedItems((prevItems) => {
      // Find the item to remove
      const itemToRemove = prevItems.find((item) => item._id === itemId);

      if (itemToRemove) {
        // Calculate the total price to subtract
        const totalPriceToSubtract =
          itemToRemove.Price * (quantities[itemId] || 1);

        // Remove the item from the list
        const updatedItems = prevItems.filter((item) => item._id !== itemId);

        // Update the total price
        setTotal((prevTotal) => prevTotal - totalPriceToSubtract);

        return updatedItems;
      }

      return prevItems;
    });
  };

  const handleAddClick = (item) => {
    setAddedItems((prevItems) => {
      if (!prevItems.find((addedItem) => addedItem._id === item._id)) {
        setTotal(
          (prevTotal) => prevTotal + item.Price * (quantities[item._id] || 1)
        );
        setextraprice(total);
        return [...prevItems, item];
      }
      return prevItems;
    });
  };
  const onCaptchaChange = (token) => {
    setCaptchaVerified(!!token);
    setCaptchaErr(!token);
  };

  const calculateTotal = (id, price) => {
    const quantity = quantities[id] || 1; // Default to 1 if quantity is not set yet
    return quantity * price;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      HallName: bookdata.Name,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setValues({ ...values, Bookfull: e.target.checked });
  };

  const validate = () => {
    const errors = {};

    if (!values.HallName) {
      errors.HallName = "Hall Name is required!";
    }

    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.Email)
    ) {
      errors.Email = "Enter a valid email address!";
    }

    // Mobile number validation
    if (!values.Mobile) {
      errors.Mobile = "Mobile is required!";
    } else if (!/^\d{10}$/.test(values.Mobile)) {
      errors.Mobile = "Mobile number must be exactly 10 digits!";
    }

    if (!values.ContactPerson) {
      errors.ContactPerson = "Contact person is required!";
    }

    if (!values.CompanyName) {
      errors.CompanyName = "Company Name is required!";
    }
    if (!values.BookDate) {
      errors.BookDate = "Book data is required!";
    }

    return errors;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check CAPTCHA first
    if (!captchaVerified) {
      setCaptchaErr(true);
      console.log("CAPTCHA not verified");
      return;
    }

    const errors = validate();
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      const formdata = new FormData();
      formdata.append("Email", values.Email);
      formdata.append("BookDate", values.BookDate);
      formdata.append("Mobile", values.Mobile);
      formdata.append("ContactPerson", values.ContactPerson);
      formdata.append("CompanyName", values.CompanyName);
      formdata.append("HallName", bookdata.Name);
      formdata.append("IsActive", values.IsActive);
      formdata.append("BookTime", bookTime);
      formdata.append("Total", total);

      console.log("Submitting form with data:", formdata);

      try {
        const res = await createBookingDetails(formdata);

        // Loop through extraBookData and post each item
        for (const item of extraBookData) {
          const extraBookDataFormData = new FormData();
          extraBookDataFormData.append("OrderId", res.data._id);
          extraBookDataFormData.append("Name", item.Name); // Corrected to match item properties
          extraBookDataFormData.append("Price", item.Price);

          // Fetch quantity from the quantities state using item._id
          const itemQuantity = quantities[item._id] || 1; // Default to 1 if not set
          extraBookDataFormData.append("Quantity", itemQuantity);

          extraBookDataFormData.append("SortOrder", item.SortOrder); // Ensure this field exists
          extraBookDataFormData.append("IsActive", true); // Assuming all activities are active

          try {
            const extraBookResponse = await createExtraBookingDetails(
              extraBookDataFormData
            );
            console.log("extraBook Response from server:", extraBookResponse);
          } catch (extraBookError) {
            console.error("Error posting extraBook:", extraBookError);
          }
        }
        setAddedItems([]);
        toast.success("Sent Successfully");
        setValues(initialState);
      } catch (err) {
        console.log("Error from server:", err);
      }
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="resource-news">
      <ToastContainer />
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className={`toast ${isToastVisible ? "show" : "hide"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">BPC India</strong>
            <small>Just now</small>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setToastVisibility(false);
              }}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Your message has been submitted. Our team will contact you soon.
          </div>
        </div>
      </div>
      <section className="resources_news blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer container">
          <h3 className="heading32 pb-3">{bookdata.Name}</h3>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Carousel fade id="carouselExampleIndicators" className="c1">
                {BookDataImage.map((bookdata, index) => (
                  <Carousel.Item
                    key={index}
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img
                      src={`${process.env.REACT_APP_API_URL_BPC}/${bookdata.productImage}`}
                      className="d-block w-100 "
                      style={{height:"400px"}}
                      alt="..."
                    />
                  </Carousel.Item>
                ))}
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
                              Capacity: {bookdata.HalfDayCapacity}
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
                  <div className="row mt-5">
                    <div className="form-group col-md-6">
                      <input
                        id="SelectPaymentMethod"
                        name="BookingMaster.DayBooking"
                        type="radio"
                        value="HalfDay"
                        defaultChecked
                        onChange={handleOptionChange}
                      />
                      <h1 className="tab-box">
                        Half Day Rs. {bookdata.HalfDayTotal}
                      </h1>
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        id="SelectPaymentMethod"
                        name="BookingMaster.DayBooking"
                        type="radio"
                        value="FullDay"
                        checked={
                          selectedPrice === Number(bookdata.FullDayTotal)
                        }
                        onChange={handleOptionChange}
                      />
                      <h1 className="tab-box">
                        Full Day Rs. {bookdata.FullDayTotal}
                      </h1>
                    </div>
                  </div>
                  <table className="table table-bordered mt-3">
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
                      {extraBookData.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.Name}</td>
                          <td>{item.Price.toFixed(2)}</td>
                          <td>
                            <div className="input-group">
                              <input
                                type="button"
                                value="-"
                                className="button-minus"
                                onClick={() =>
                                  handleQuantityChange(item._id, -1)
                                }
                              />
                              <input
                                type="number"
                                step="1"
                                value={quantities[item._id] || 1}
                                readOnly
                                className="quantity-field ml47"
                              />
                              <input
                                type="button"
                                value="+"
                                className="button-plus ml103"
                                onClick={() =>
                                  handleQuantityChange(item._id, 1)
                                }
                              />
                            </div>
                          </td>
                          <td>
                            <input
                              type="text"
                              readOnly
                              value={calculateTotal(
                                item._id,
                                item.Price
                              ).toFixed(2)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-warning btn-xs ml-2"
                              onClick={() => handleAddClick(item)}
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <form
                    action="/Home/BookPost"
                    encType="multipart/form-data"
                    id="Bookform"
                    method="post"
                    noValidate
                  >
                    <div className="row form-row">
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
                        {formErrors.BookDate && (
                          <label
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            * Please enter date
                          </label>
                        )}
                        <input
                          className="form-control"
                          name="BookDate"
                          type="date"
                          value={values.BookDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6"></div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_CompanyName">
                          {formErrors.CompanyName && (
                            <label
                              generated="true"
                              class="error text-danger pull-right"
                            >
                              * Please enter company Name
                            </label>
                          )}
                          Company Name
                        </label>
                        <input
                          className="form-control"
                          name="CompanyName"
                          value={values.CompanyName}
                          onChange={handleChange}
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_Email">
                          Contact Person
                        </label>
                        {formErrors.ContactPerson && (
                          <label
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            * Please enter Contact Person
                          </label>
                        )}
                        <input
                          className="form-control"
                          name="ContactPerson"
                          value={values.ContactPerson}
                          onChange={handleChange}
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="BookingMaster_ContactNo">
                          Email Address
                        </label>
                        {formErrors.Email && (
                          <label
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            <span>'{formErrors.Email}'</span>
                          </label>
                        )}
                        <input
                          className="form-control"
                          name="Email"
                          value={values.Email}
                          onChange={handleChange}
                          type="email"
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
                        {formErrors.Mobile && (
                          <label
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            {formErrors.Mobile}
                          </label>
                        )}
                        <input
                          className="form-control"
                          name="Mobile"
                          type="number"
                          value={values.Mobile}
                          onChange={handleChange}
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
                            {addedItems.map((item, index) => (
                              <tr key={item._id}>
                                <td>{item.Name}</td>
                                <td>{item.Price.toFixed(2)}</td>
                                <td>{quantities[item._id] || 1}</td>
                                <td>
                                  {calculateTotal(item._id, item.Price).toFixed(
                                    2
                                  )}
                                </td>
                                <button
                                  className="btn btn-warning btn-xs m-2 bg-danger text-white "
                                  onClick={() => handleDeleteClick(item._id)}
                                >
                                  Delete
                                </button>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="form-group col-md-5">
                        {formErrors.Capcha && (
                          <label
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            * Capcha is not valid
                          </label>
                        )}
                        <ReCAPTCHA
                          className="mb-3"
                          onChange={onCaptchaChange}
                          sitekey={process.env.REACT_APP_SITE_KEY}
                        />
                        {captchaErr && (
                          <div className="text-danger">
                            Please verify the CAPTCHA
                          </div>
                        )}
                      </div>
                      <div className="col-md-2"></div>
                      <div className="form-group col-md-5">
                        <label>Total :</label>
                        <input
                          type="text"
                          name="BookingMaster.Total"
                          readOnly
                          id="Total"
                          value={total}
                          className="form-control vvv"
                          fdprocessedid="ceggv"
                        />
                      </div>

                      <div className="form-row"></div>
                    </div>
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="btn btn-primary mt-2"
                    >
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

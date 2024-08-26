import React, { useEffect, useState } from "react";
import { Carousel, Tabs, Tab, Table } from "react-bootstrap";
import pht4 from "../../../assets/images/Extra/df6c785c9b5940c7ad82038028f29694.jpg";
import { fetchBookNow , fetchExtraBook} from "../../../Functions/BookNow";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "react-router-dom";
import { createCourseForm } from "../../../Functions/CoursesForm";
const initialState = {
  Bookdate: "",
  Email: "",
  Mobile: "",
  ContactPerson: "",
  CompanyName: "",
  HallName: "",

  IsActive: true,
  Bookfull:false,
  HalfdayPrice: "",
  FulldayPrice: ""
};
const BookCard = () => {
  const [bookdata, setBookData] = useState([]);
  const [show, setShow] = useState(false);

  const [extraBookData, setExtraBookData] = useState([]);
  const [quantities, setQuantities] = useState({});
   const [addedItems, setAddedItems] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

   const [isToastVisible, setToastVisibility] = useState(false);
  const [values, setValues] = useState(initialState);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaErr, setCaptchaErr] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { id } = useParams();
   useEffect(() => {
     const fetchInnerData = async () => {
       try {
         const data = await fetchBookNow(id);
         setBookData(data.data);
         console.log("Course Data:", data.data);
       } catch (error) {
         console.error("Error loading Booking data:", error);
       }
     };
       const fetchExtraBooks = async () => {
         try {
           const data = await fetchExtraBook();

           setExtraBookData(data.data);
             const initialQuantities = {};
      data.forEach(item => {
        initialQuantities[item._id] = 1; // Default quantity is 1
      });
      setQuantities(initialQuantities);
    
           console.log("Course Data:", data.data);
         } catch (error) {
           console.error("Error loading course data:", error);
         }
       };

       
       fetchExtraBooks();
     fetchInnerData();


     
   }, [id]);
     const handleQuantityChange = (id, delta) => {
       setQuantities((prevQuantities) => {
         const newQuantity = Math.max(1, (prevQuantities[id] || 1) + delta); // Ensure quantity doesn't go below 1
         return { ...prevQuantities, [id]: newQuantity };
       });
     };
       const handleDeleteClick = (id) => {
         setAddedItems((prevItems) =>
           prevItems.filter((item) => item._id !== id)
         );
       };
       const handleAddClick = (item) => {
         setAddedItems((prevItems) => {
           if (!prevItems.find((addedItem) => addedItem._id === item._id)) {
             return [...prevItems, item];
           }
           return prevItems;
         });
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
          errors.HallName = "Course Name is required!";
        }

        if (!values.Email) {
          errors.Email = "Email is required!";
        }

        if (!values.Mobile) {
          errors.Mobile = "Mobile is required!";
        }

        if (!values.ContactPerson) {
          errors.ContactPerson = "Contact person is required!";
        }

        if (!values.CompanyName) {
          errors.CompanyName = "Company Name is required!";
        }
         if (!values.Bookdate) {
           errors.bookdata = "Book data is required!";
         }


        return errors;
      };

      const handleClick = (e) => {
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
          formdata.append("Mobile", values.Mobile);
          formdata.append("ContactPerson", values.ContactPerson);
          formdata.append("CompanyName", values.CompanyName);
          formdata.append("HallName", bookdata.Name);
          formdata.append("IsActive", values.IsActive);

          console.log("Submitting form with data:", formdata);

          createCourseForm(formdata)
            .then((res) => {
              console.log("Response from server:", res);
              setToastVisibility(true);
              setValues(initialState);
            })
            .catch((err) => {
              console.log("Error from server:", err);
            });
        } else {
          console.log("Form has errors:", errors);
        }
      };

const onCaptchaChange = (token) => {
  setCaptchaVerified(!!token);
  setCaptchaErr(!token);
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
                        <h1 className="tab-box">
                          Half Day Rs.{bookdata.HalfDayTotal}
                        </h1>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          id="SelectPaymentMethod"
                          name="BookingMaster.DayBooking"
                          type="radio"
                          value="FullDay"
                        />
                        <h1 className="tab-box">
                          Full Day Rs. {bookdata.FullDayTotal}
                        </h1>
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
                          <label
                            for="txtCompanyName"
                            generated="true"
                            class="error text-danger pull-right"
                          >
                            * Please enter company.
                          </label>
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
                        <label
                          for="txtContactPerson"
                          generated="true"
                          class="error text-danger pull-right"
                        >
                          * Please enter name.
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
                        <label
                          for="txtEmail"
                          generated="true"
                          class="error text-danger pull-right"
                        >
                          * Please enter email.
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
                        <label
                          for="txtMobile"
                          generated="true"
                          class="error text-danger pull-right"
                        >
                          * Please enter mobile.
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

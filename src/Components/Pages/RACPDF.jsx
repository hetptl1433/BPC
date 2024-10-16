import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import {
  createRAS,
  createRASData,
  getRAC,
  getRACData,
} from "../../Functions/RAC";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useParams } from "react-router-dom";
import rh1 from "../../assets/images/Extra/50.jpg";
import rh2 from "../../assets/images/Extra/bpc.jpg";



const initialState = {
  Organization: "",
  EmployeeCode: 0,
  Date: "",
  FullName: "",
  Designation: "",
  Department: "",
  Section: "",
  EmailID: "",
  MobileNo: 0,
  Reporting: "",
  DOB: "",
  DateofJoining: "",
  PreviousExperience: "",
  Educational: "",
  Achievement: "",
  Areaofinterest: "",
  Problem: "",
  Additionalresponsibility: "",
  Information: "",
  IsActive: true, // Assuming the default value is true
};

const RACPDF = () => {
  const location = useLocation();
  const [updateForm, setUpdateForm] = useState(false);
  const {id} =useParams();
  const query = new URLSearchParams(location.search);
  const [language, setLanguage]= useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isToastVisible, setToastVisibility] = useState(false);
  const [submiited, setSubmitted] = useState(false);
  const [activityDetails, setActivityDetails] = useState({
    name: "",
    frequency: "",
    timePerFrequency: "",
    remarks: "",
  });

  // State to manage the list of activities
  const [activityList, setActivityList] = useState([]);
  const [formData, setFormData] = useState({
    Organization: "",
    EmployeeCode: "0",
    Date: "",
    FullName: "",
    Designation: "",
    Department: "",
    Section: "",
    EmailID: "",
    MobileNo: "0",
    Reporting: "",
    DOB: "",
    DateofJoining: "",
    PreviousExperience: "",
    Educational: "",
    Achievement: "",
    Areaofinterest: "",
    Problem: "",
    Additionalresponsibility: "",
    Information: "",
    IsActive: true,
  });


  // Handle changes to form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Handle adding a new activity to the list

  const handleAddActivity = () => {
    const errors = validateActivity();

    // If there are validation errors, display them as alerts
    if (Object.keys(errors).length > 0) {
      if (errors.ActivityName) {
        alert(errors.ActivityName);
      } else if (errors.frequency) {
        alert(errors.frequency);
      } else if (errors.timePerFrequency) {
        alert(errors.timePerFrequency);
      }
      return; // Prevent further execution if validation fails
    }

    // If no errors, proceed to add the activity
    setActivityList((prevList) => [
      ...prevList,
      { ...activityDetails, id: prevList.length + 1 },
    ]);
    setActivityDetails({
      name: "",
      frequency: "",
      timePerFrequency: "",
      remarks: "",
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = validate();
  //   setFormErrors(errors);
  //   setIsSubmit(true);

  //   if (Object.keys(errors).length === 0) {
  //     const formdata = new FormData();
  //     formdata.append("Organization", formData.Organization);
  //     formdata.append("EmployeeCode", formData.EmployeeCode);
  //     formdata.append("Date", formData.Date);
  //     formdata.append("FullName", formData.FullName);
  //     formdata.append("Designation", formData.Designation);
  //     formdata.append("Department", formData.Department);
  //     formdata.append("Section", formData.Section);
  //     formdata.append("EmailID", formData.EmailID);
  //     formdata.append("MobileNo", formData.MobileNo);
  //     formdata.append("Reporting", formData.Reporting);
  //     formdata.append("DOB", formData.DOB);
  //     formdata.append("DateofJoining", formData.DateofJoining);
  //     formdata.append("PreviousExperience", formData.PreviousExperience);
  //     formdata.append("Educational", formData.Educational);
  //     formdata.append("Achievement", formData.Achievement);
  //     formdata.append("Areaofinterest", formData.Areaofinterest);
  //     formdata.append("Problem", formData.Problem);
  //     formdata.append(
  //       "Additionalresponsibility",
  //       formData.Additionalresponsibility
  //     );
  //     formdata.append("Information", formData.Information);
  //     formdata.append("IsActive", formData.IsActive);

  //     try {
  //       const response = await createRAS(formdata);

  //       toast.success("Your data is submmited successfully");

  //       // Send each activity in the activityList to the API
  //       for (const activity of activityList) {
  //         const activityFormData = new FormData();
  //         activityFormData.append("EmailID", formData.EmailID);
  //         activityFormData.append("Name", activity.name);
  //         activityFormData.append("Frequency", activity.frequency);
  //         activityFormData.append(
  //           "TimeperFrequency",
  //           activity.timePerFrequency
  //         );
  //         activityFormData.append("Remarks", activity.remarks);
  //         activityFormData.append("IsActive", true); // Assuming all activities are active

  //         try {
  //           const activityResponse = await createRASData(activityFormData);
  //         } catch (activityError) {
  //           console.error("Error posting activity:", activityError);
  //         }
  //       }

  //       // Optionally, clear the form data and activity list after submission
  //       setFormData(initialState);
  //       setActivityList([]);
  //       setSubmitted(true);
  //     } catch (error) {
  //       console.log("Error from server:", error);
  //     }
  //   } else {
  //     console.log("Form has errors:", errors);
  //   }
  // };

  useEffect(()=>{
    const handleTog_edit = (_id) => {
      setIsSubmit(false);
      setUpdateForm(true);

      setFormErrors(false);

      getRAC(_id)
        .then((res) => {
          console.log("ok",res);
          setFormData((prevFormData) => ({
            ...prevFormData,
            Organization: res.data.Organization,
            EmployeeCode: res.data.EmployeeCode,
            Date: res.data.Date,
            FullName: res.data.FullName,
            Designation: res.data.Designation,
            Department: res.data.Department,
            Section: res.data.Section,
            EmailID: res.data.EmailID,
            MobileNo: res.data.MobileNo,
            Reporting: res.data.Reporting,
            DOB: res.data.DOB,
            DateofJoining: res.data.DateofJoining,
            PreviousExperience: res.data.PreviousExperience,
            Educational: res.data.Educational,
            Achievement: res.data.Achievement,
            Areaofinterest: res.data.Areaofinterest,
            Problem: res.data.Problem,
            Additionalresponsibility: res.data.Additionalresponsibility,
            Information: res.data.Information,
            IsActive: res.data.IsActive,
          }));
          console.log("ewe",formData);
          setLanguage(res.data.language);
          // Use res.EmailID directly here
          return getRACData(res.data.EmailID);
        })
        .then((res) => {
          console.log("fwefw",res.data);
          setActivityList(res.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    handleTog_edit(id);
  }, [id])


   
  const validate = () => {
    const errors = {};

    if (!formData.Organization) {
      errors.Organization = "Organization Name is required!";
    }

    if (!formData.EmailID) {
      errors.EmailID = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.EmailID)
    ) {
      errors.EmailID = "Invalid email address";
    }

    if (!formData.MobileNo) {
      errors.MobileNo = "Required";
    } else if (!/^\d{10}$/.test(formData.MobileNo)) {
      errors.MobileNo = "Mobile number must be 10 digits long";
    }

    if (!formData.FullName) {
      errors.FullName = "Full Name is required!";
    }

    return errors;
  };
  const validateActivity = () => {
    const errors = {};

    if (!activityDetails.name) {
      errors.ActivityName = "Activity Name is required!";
    }
    if (!activityDetails.frequency) {
      errors.frequency = "Activity Frequency is required!";
    }
    if (!activityDetails.timePerFrequency) {
      errors.timePerFrequency = "Activity Time Per Frequency is required!";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <div>
          <section>
            <div className="container">
              <header id="headerMain">
                <div
                  className="pageContainer d-flex justify-content-between"
                  id="pc-screen"
                >
                  <div
                    className="logo"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Link to="/">
                      <img
                        src={rh1}
                        style={{
                          width: "auto",
                          height: "110px",
                          background: "white",
                          padding: "6px 12px",
                          borderRadius: "15px",
                        }}
                        className="lazyloaded"
                        alt="Logo 1"
                      />
                    </Link>
                  </div>
                  <div
                    className="middle-menu"
                    style={{
                      textAlign: "center",
                      border: "2px solid black",
                      padding: "10px",
                    }}
                  >
                    <h1>BARODA PRODUCTIVITY COUNCIL</h1>
                    <p>(An ISO 9001 : 2015 Organization)</p>
                  </div>
                  <div className="right_menu">
                    <div
                      className="logo"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Link to="/">
                        <img
                          src={rh2}
                          style={{
                            width: "auto",
                            height: "110px",
                            background: "white",
                            padding: "6px 12px",
                            borderRadius: "15px",
                          }}
                          className="lazyloaded"
                          alt="Logo 2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </section>
        </div>
      </div>
      <Container className="yoform">
        <ToastContainer />

        <form id="AddNewsform">
          <input name="__RequestVerificationToken" type="hidden" />
          {/* Header Start */}
          <section>
            <div className="container">
              <header id="headerMain">
                <div className="table-responsive">
                  <table className="table table-bordered header_table">
                    <tbody>
                      <tr>
                        <th
                          rowSpan="2"
                          className="header_th"
                          style={{
                            backgroundColor: "white",
                            verticalAlign: "middle",
                            textAlign: "center",
                            padding: "0px",
                            fontSize: "22px",
                          }}
                        >
                          ROUTINE ACTIVITY SHEET {" "}
                          <p>Selected Language: {language}</p>
                        </th>
                        <td style={{ padding: "0px" }}>Revision </td>
                        <td>C</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0px" }}>Document No.</td>
                        <td style={{ padding: "0px" }}>7.5.1.017(b)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </header>
            </div>
          </section>
          {/* Header End */}
          {/* Organization Section Start */}
          <section>
            <div className="container">
              <div
                className="company_name"
                style={{ paddingBottom: "5px", paddingTop: "10px" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <label className="lbf">
                      <b>
                        <span id="orgName">
                          {language === "Hindi"
                            ? "संगठन का नाम"
                            : language === "Gujarati"
                            ? "સંસ્થા નું નામ"
                            : "Name of the Organization"}
                        </span>
                      </b>

                      <small style={{ color: "red" }}>*</small>
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      className="input_control form-control Organization_input"
                      id="txtorganization"
                      name="Organization"
                      placeholder={
                        language === "Hindi"
                          ? "संस्थान का नाम दर्ज करें"
                          : language === "Gujarati"
                          ? "સંસ્થાનું નામ દાખલ કરો"
                          : "Enter Organization Name"
                      }
                      type="text"
                      value={formData.Organization}
                      onChange={handleChange}
                    />
                    {formErrors.Organization && (
                      <span className="has-error text-danger pull-right">
                        {formErrors.Organization}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <label style={{ fontWeight: 400 }}>
                    {language === "Hindi"
                      ? "कर्मचारी कोड:"
                      : language === "Gujarati"
                      ? "કર્મચારી કોડ:"
                      : "Employee Code:"}
                  </label>

                  <input
                    autoComplete="off"
                    data-val="true"
                    data-val-number="The field EmployeeCode must be a number."
                    data-val-required="The EmployeeCode field is required."
                    id="txtemployeecode"
                    name="EmployeeCode"
                    placeholder={
                      language === "Hindi"
                        ? "कर्मचारी कोड दर्ज करें"
                        : language === "Gujarati"
                        ? "કર્મચારી કોડ દાખલ કરો"
                        : "Enter Employee Code"
                    }
                    type="text"
                    value={formData.EmployeeCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 date d-flex justify-end">
                  <label style={{ fontWeight: 400 }}>
                    {language === "Hindi"
                      ? "तारीख:"
                      : language === "Gujarati"
                      ? "તારીખ:"
                      : "Date:"}
                  </label>

                  <input
                    id="txtdate"
                    name="Date"
                    placeholder={
                      language === "Hindi"
                        ? "तारीख दर्ज करें"
                        : language === "Gujarati"
                        ? "તારીખ દાખલ કરો"
                        : "Enter Date"
                    }
                    type="date"
                    value={formData.Date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Organization Section End */}
          {/* Detail Information Section Start */}
          <section>
            <div className="container">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  style={{ marginTop: "10px" }}
                >
                  <tbody>
                    <tr>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "पूरा नाम"
                          : language === "Gujarati"
                          ? "पूरું નામ"
                          : "Full Name"}
                        <small style={{ color: "red" }}>*</small>
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtfname"
                          name="FullName"
                          placeholder={
                            language === "Hindi"
                              ? "पूरा नाम दर्ज करें"
                              : language === "Gujarati"
                              ? "પૂર્ણ નામ દાખલ કરો"
                              : "Enter Full Name"
                          }
                          type="text"
                          value={formData.FullName}
                          onChange={handleChange}
                        />

                        {formErrors.FullName && (
                          <span className="has-error text-danger">
                            {formErrors.FullName}
                          </span>
                        )}
                      </td>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "पद"
                          : language === "Gujarati"
                          ? "હોદ્દો"
                          : "Designation"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtdesignation"
                          name="Designation"
                          placeholder={
                            language === "Hindi"
                              ? "पद दर्ज करें"
                              : language === "Gujarati"
                              ? "પદ દાખલ કરો"
                              : "Enter Designation"
                          }
                          type="text"
                          value={formData.Designation}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "विभाग"
                          : language === "Gujarati"
                          ? "વિભાગ"
                          : "Department"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtdepartment"
                          name="Department"
                          placeholder={
                            language === "Hindi"
                              ? "विभाग दर्ज करें"
                              : language === "Gujarati"
                              ? "વિભાગ દાખલ કરો"
                              : "Enter Department"
                          }
                          type="text"
                          value={formData.Department}
                          onChange={handleChange}
                        />
                      </td>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "अनुभाग"
                          : language === "Gujarati"
                          ? "વિભાગ"
                          : "Section"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtsection"
                          name="Section"
                          placeholder={
                            language === "Hindi"
                              ? "खंड दर्ज करें"
                              : language === "Gujarati"
                              ? "વિભાગ દાખલ કરો"
                              : "Enter Section"
                          }
                          type="text"
                          value={formData.Section}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "ईमेल आईडी"
                          : language === "Gujarati"
                          ? "ઈમેલ આઈડી"
                          : "Email ID"}
                        <small style={{ color: "red" }}>*</small>
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtemail"
                          name="EmailID"
                          placeholder={
                            language === "Hindi"
                              ? "ईमेल दर्ज करें"
                              : language === "Gujarati"
                              ? "ઇમેલ દાખલ કરો"
                              : "Enter Email"
                          }
                          type="email"
                          value={formData.EmailID}
                          onChange={handleChange}
                        />
                        {formErrors.EmailID && (
                          <span className="has-error text-danger">
                            {formErrors.EmailID}
                          </span>
                        )}
                      </td>

                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "मोबाइल नंबर"
                          : language === "Gujarati"
                          ? "મોબાઇલ નંબર"
                          : "Mobile No."}
                        <small style={{ color: "red" }}>*</small>
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control detail_input"
                          id="txtmobile"
                          name="MobileNo"
                          placeholder={
                            language === "Hindi"
                              ? "मोबाइल नंबर दर्ज करें"
                              : language === "Gujarati"
                              ? "મોબાઇલ નંબર દાખલ કરો"
                              : "Enter Mobile No"
                          }
                          type="text"
                          value={formData.MobileNo}
                          onChange={handleChange}
                        />
                        {formErrors.MobileNo && (
                          <span className="has-error text-danger">
                            {formErrors.MobileNo}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg" scope="row">
                        {language === "Hindi"
                          ? "किसे रिपोर्ट करें: (नाम और पद)"
                          : language === "Gujarati"
                          ? "કાંએ રિપોર્ટ કરવું: (નામ અને હોદ્દો)"
                          : "Reporting to whom: (Name and Designation)"}
                      </th>

                      <td>:</td>
                      <td colSpan={4}>
                        <input
                          className=" w-97 form-control input_control   "
                          id="txtreporting"
                          name="Reporting"
                          placeholder={
                            language === "Hindi"
                              ? "जिसे रिपोर्ट करें उसका नाम दर्ज करें"
                              : language === "Gujarati"
                              ? "જેને રિપોર્ટ કરો તેનું નામ દાખલ કરો"
                              : "Enter Reporting To"
                          }
                          type="text"
                          value={formData.Reporting}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="table-responsive">
                <div style={{ marginTop: "10px" }}>
                  <label>
                    <b>
                      {language === "Hindi"
                        ? "व्यक्तिगत डेटा:"
                        : language === "Gujarati"
                        ? "વ્યક્તિગત ડેટા:"
                        : "Personal Data:"}
                    </b>
                  </label>
                </div>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        1
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "जन्मतिथि और वर्ष में आयु"
                          : language === "Gujarati"
                          ? "જન્મતારીખ અને વર્ષોમાં વય"
                          : "Date of Birth & Age in years"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control"
                          name="DOB"
                          placeholder={
                            language === "Hindi"
                              ? "जन्म तिथि और आयु दर्ज करें"
                              : language === "Gujarati"
                              ? "જન્મ તારીખ અને વય દાખલ કરો"
                              : "Enter DOB & Age"
                          }
                          type="text"
                          value={formData.DOB}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        2
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "जोइनिंग की तारीख"
                          : language === "Gujarati"
                          ? "જોડાણની તારીખ"
                          : "Date of Joining"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          id="txtdateofjoining"
                          name="DateofJoining"
                          placeholder={
                            language === "Hindi"
                              ? "जॉइनिंग की तारीख दर्ज करें"
                              : language === "Gujarati"
                              ? "જોઇનિંગ ની તારીખ દાખલ કરો"
                              : "Enter Date of Joining"
                          }
                          type="text"
                          value={formData.DateofJoining}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        3
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "यदि कोई पिछला अनुभव"
                          : language === "Gujarati"
                          ? "જો કોઈ અગાઉનો અનુભવ"
                          : "Previous Experience if any"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          id="txtexperience"
                          name="PreviousExperience"
                          value={formData.PreviousExperience}
                          onChange={handleChange}
                          placeholder={
                            language === "Hindi"
                              ? "पिछला अनुभव दर्ज करें"
                              : language === "Gujarati"
                              ? "અગાઉનો અનુભવ દાખલ કરો"
                              : "Enter Previous Experience"
                          }
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        4
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "शैक्षिक योग्यता"
                          : language === "Gujarati"
                          ? "શૈક્ષણિક કવલિફિકેશન"
                          : "Educational Qualification"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          name="Educational"
                          placeholder={
                            language === "Hindi"
                              ? "शैक्षणिक योग्यता दर्ज करें"
                              : language === "Gujarati"
                              ? "શૈક્ષણિક લાયકાત દાખલ કરો"
                              : "Enter Educational Qualification"
                          }
                          type="text"
                          value={formData.Educational}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        5
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "कोई विशेष उपलब्धि"
                          : language === "Gujarati"
                          ? "કોઈ વિશેષ સિદ્ધિ"
                          : "Any Special Achievement"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          name="Achievement"
                          value={formData.Achievement}
                          onChange={handleChange}
                          placeholder={
                            language === "Hindi"
                              ? "उपलब्धि दर्ज करें"
                              : language === "Gujarati"
                              ? "સફળતા દાખલ કરો"
                              : "Enter Achievement"
                          }
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        6
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "रुचि का क्षेत्र"
                          : language === "Gujarati"
                          ? "રુચીનું ક્ષેત્ર"
                          : "Area of Interest"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          id="txtareaofinterest"
                          name="Areaofinterest"
                          value={formData.Areaofinterest}
                          onChange={handleChange}
                          placeholder={
                            language === "Hindi"
                              ? "रुचि का क्षेत्र दर्ज करें"
                              : language === "Gujarati"
                              ? "હિત જ્હોય દાખલ કરો"
                              : "Enter Area of Interest"
                          }
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        7
                      </th>
                      <th className="header_bg">
                        {language === "Hindi"
                          ? "किसी समस्या का सामना करना"
                          : language === "Gujarati"
                          ? "કોઈ સમસ્યાનો સામનો"
                          : "Any Problem Being Faced"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control input_control "
                          id="txtproblem"
                          name="Problem"
                          placeholder={
                            language === "Hindi"
                              ? "समस्या दर्ज करें"
                              : language === "Gujarati"
                              ? "સમસ્યા દાખલ કરો"
                              : "Enter Problem"
                          }
                          value={formData.Problem}
                          onChange={handleChange}
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="header_bg mahiti" scope="row">
                        8
                      </th>
                      <th
                        className="header_bg"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {language === "Hindi"
                          ? "कोई विचार या कोई बदलाव सुझावित / कोई अतिरिक्त जिम्मेदारी जो आप साझा करना चाहते हैं?"
                          : language === "Gujarati"
                          ? "કોઈ વિચાર અથવા કોઈ ફેરફાર સૂચવ્યો / કોઈ વધારાની જવાબદારી જે તમે શેર કરવા માગો છો?"
                          : "Any idea or any change suggested / any additional responsibility you want to share?"}
                      </th>

                      <td>:</td>
                      <td>
                        <input
                          className="form-control  w-500"
                          id="txtresponsibility"
                          name="Additionalresponsibility"
                          placeholder={
                            language === "Hindi"
                              ? "अतिरिक्त जिम्मेदारी दर्ज करें"
                              : language === "Gujarati"
                              ? "અતિરિક્ત જવાબદારી દાખલ કરો"
                              : "Enter Additional Responsibility"
                          }
                          type="text"
                          value={formData.Additionalresponsibility}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div>
                <label>
                  <b>
                    {language === "Hindi"
                      ? "रूटीन गतिविधि चार्ट:"
                      : language === "Gujarati"
                      ? "રૂટિન પ્રવૃત્તિ ચાર્ટ:"
                      : "Routine Activity Chart:"}
                  </b>
                </label>
              </div>
              <div className="table-responsive">
                <div className="chart">
                  <div className="row w-100">
                    <div className="col-md-1">
                      {" "}
                      <label style={{ marginRight: "30px" }}>
                        {language === "Hindi"
                          ? "आवृत्ति:"
                          : language === "Gujarati"
                          ? "આવૃત્તિ:"
                          : "Frequency:"}
                      </label>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <table className="routin_header">
                          <thead>
                            <tr>
                              <th className="header_bg" scope="col">
                                D= Daily
                              </th>
                              <th className="header_bg" scope="col">
                                W= Weekly
                              </th>
                              <th className="header_bg" scope="col">
                                F= Fortnightly
                              </th>
                              <th className="header_bg" scope="col">
                                M= Monthly
                              </th>
                              <th className="header_bg" scope="col">
                                Y= Yearly
                              </th>
                              <th className="header_bg" scope="col">
                                O= Occasionally
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ color: "black", margin: "10px 0px" }}>
                {language === "Hindi"
                  ? "टिप्पणी: <b>C</b>=कंप्यूटर  <b>M</b>= मैनुअल <b>COM</b>= कंप्यूटर + मैनुअल का संयोजन"
                  : language === "Gujarati"
                  ? "Remark: <b>C</b>=કંપ્યુટર  <b>M</b>= મેન્યુઅલ <b>COM</b>= કમ્પ્યુટર + મેન્યુઅલ નું સંયોજન"
                  : "Remark: <b>C</b>=Computer  <b>M</b>= Manual <b>COM</b>= Combination &nbsp;of &nbsp;Computer &nbsp; + &nbsp;Manual"}
              </p>

              {/* <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label className="add_lable">
                        Name of activity:{" "}
                        <small style={{ color: "red" }}>*</small>
                      </label>
                      <input
                        className="form-control"
                        id="txtName"
                        name="name"
                        placeholder={
                          language === "Hindi"
                            ? "गतिविधि का नाम दर्ज करें"
                            : language === "Gujarati"
                            ? "ક્રિયા નું નામ દાખલ કરો"
                            : "Enter Name of Activity"
                        }
                        type="text"
                        value={activityDetails.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label className="add_lable">
                        {language === "Hindi"
                          ? "आवृत्ति:"
                          : language === "Gujarati"
                          ? "આવૃત્તિ:"
                          : "Frequency:"}
                        <small style={{ color: "red" }}>*</small>
                      </label>

                      <input
                        className="form-control"
                        id="txtFrequency"
                        name="frequency"
                        placeholder={
                          language === "Hindi"
                            ? "आवृत्ति दर्ज करें"
                            : language === "Gujarati"
                            ? "આવર્તન દાખલ કરો"
                            : "Enter Frequency"
                        }
                        type="text"
                        value={activityDetails.frequency}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label className="add_lable">
                        {language === "Hindi"
                          ? "आवृत्ति के अनुसार समय:"
                          : language === "Gujarati"
                          ? "આવૃત્તિ અનુસાર સમય:"
                          : "Time per Frequency:"}
                        <small style={{ color: "red" }}>*</small>
                      </label>

                      <input
                        className="form-control"
                        id="txtTimeperFrequency"
                        name="timePerFrequency"
                        placeholder={
                          language === "Hindi"
                            ? "प्रत्येक आवृत्ति के लिए समय दर्ज करें"
                            : language === "Gujarati"
                            ? "આવર્તન માટેનો સમય દાખલ કરો"
                            : "Enter Time per Frequency"
                        }
                        type="text"
                        value={activityDetails.timePerFrequency}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="form-group">
                      <label className="add_lable">
                        {language === "Hindi"
                          ? "टिप्पणियाँ:"
                          : language === "Gujarati"
                          ? "ટિપ્પણીઓ:"
                          : "Remarks:"}
                      </label>

                      <input
                        className="form-control"
                        id="txtRemarks"
                        name="remarks"
                        placeholder={
                          language === "Hindi"
                            ? "टिप्पणियाँ दर्ज करें"
                            : language === "Gujarati"
                            ? "ટીકાઓ દાખલ કરો"
                            : "Enter Remarks"
                        }
                        type="text"
                        value={activityDetails.remarks}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn_add">
                  <input
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #8080804a",
                      borderRadius: "8px",
                      padding: "8px",
                      color: "black",
                      marginTop: "0px",
                    }}
                    id="addrow"
                    onClick={handleAddActivity}
                    name="Submit"
                    value="Add New Activity"
                    type="button"
                  />
                </div>
              </div> */}
              <div className="table-responsive fgff">
                <table
                  className="table table-bordered"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col" className="header_bg">
                        {language === "Hindi"
                          ? "क्रम संख्या"
                          : language === "Gujarati"
                          ? "ક્રમ નંબર"
                          : "Sr No."}
                      </th>
                      <th scope="col" className="header_bg">
                        {language === "Hindi"
                          ? "गतिविधि का नाम"
                          : language === "Gujarati"
                          ? "ક્રિયાની નામ"
                          : "Name of activity"}
                      </th>
                      <th scope="col" className="header_bg">
                        {language === "Hindi"
                          ? "आवृत्ति"
                          : language === "Gujarati"
                          ? "આવૃત્તિ"
                          : "Frequency"}
                      </th>
                      <th scope="col" className="header_bg">
                        {language === "Hindi"
                          ? "आवृत्ति के अनुसार समय (मिनटों में)"
                          : language === "Gujarati"
                          ? "આવૃત્તિ મુજબ સમય (મિનિટમાં)"
                          : "Time per Frequency in minutes"}
                      </th>
                      <th scope="col" className="header_bg">
                        {language === "Hindi"
                          ? "टिप्पणियाँ"
                          : language === "Gujarati"
                          ? "ટિપ્પણીઓ"
                          : "Remarks"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityList && activityList.length > 0 ? (
                      activityList.map((activity, idx) => (
                        <tr key={activity.id}>
                          <td>{idx + 1}</td>
                          <td>{activity.Name}</td>
                          <td>{activity.Frequency}</td>
                          <td>{activity.TimeperFrequency}</td>
                          <td>{activity.Remarks}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="form-group">
                <label className="add_lable">
                  {language === "Hindi"
                    ? "अतिरिक्त जानकारी:"
                    : language === "Gujarati"
                    ? "અતિરિક્ત માહિતી:"
                    : "Additional Information:"}
                </label>

                <textarea
                  className="form-control"
                  cols="20"
                  id="txtinformation"
                  name="Information"
                  value={formData.Information}
                  onChange={handleChange}
                  placeholder={
                    language === "Hindi"
                      ? "अतिरिक्त जानकारी दर्ज करें"
                      : language === "Gujarati"
                      ? "અતિરિક્ત માહિતી દાખલ કરો"
                      : "Enter Additional Information"
                  }
                  rows="2"
                ></textarea>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="submit_btn">
                <input
                  className="btn_sub btn-success no-print"
                  id="SaveData"
                  name="Print"
                  value="Print"
                  type="submit"
                  onClick={() => window.print()}
                />
              </div>
            </div>
          </section>

          {/* Buttons End */}
        </form>
        <section>
          <div className="container">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead style={{ fontWeight: "bold" }}>
                  <tr>
                    <th
                      scope="row"
                      className="header_bg"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Prepared by - Shilpa Shah
                    </th>
                    <th
                      className="header_bg"
                      style={{ textAlign: "center", whiteSpace: "nowrap" }}
                    >
                      Approved by - G P Namdeo
                    </th>
                    <th
                      className="header_bg"
                      style={{ textAlign: "right", whiteSpace: "nowrap" }}
                    >
                      Date of Revision - 20.06.2019
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default RACPDF;

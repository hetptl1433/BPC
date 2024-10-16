import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { createRAS, createRASData } from "../../../Functions/RAC";
import { toast, ToastContainer } from "react-toastify";

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
const FormBodyHindi = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const [isToastVisible, setToastVisibility] = useState(false);
  const [submiited, setSubmitted]= useState(false);
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
    const validationErrors = validateActivity();
    setIsSubmit(true);

    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
     setErrors({}); // Clear errors after successful submission
     setIsSubmit(false);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validate();
  setFormErrors(errors);
  setIsSubmit(true);

  if (Object.keys(errors).length === 0) {
    const formdata = new FormData();
    formdata.append("Organization", formData.Organization);
    formdata.append("EmployeeCode", formData.EmployeeCode);
    formdata.append("Date", formData.Date);
    formdata.append("FullName", formData.FullName);
    formdata.append("Designation", formData.Designation);
    formdata.append("Department", formData.Department);
    formdata.append("Section", formData.Section);
    formdata.append("EmailID", formData.EmailID);
    formdata.append("MobileNo", formData.MobileNo);
    formdata.append("Reporting", formData.Reporting);
    formdata.append("DOB", formData.DOB);
    formdata.append("DateofJoining", formData.DateofJoining);
    formdata.append("PreviousExperience", formData.PreviousExperience);
    formdata.append("Educational", formData.Educational);
    formdata.append("Achievement", formData.Achievement);
    formdata.append("Areaofinterest", formData.Areaofinterest);
    formdata.append("Problem", formData.Problem);
    formdata.append(
      "Additionalresponsibility",
      formData.Additionalresponsibility
    );
    formdata.append("Information", formData.Information);
    formdata.append("IsActive", formData.IsActive);



    try {
      const response = await createRAS(formdata);
   
      toast.success("Your data is submmited successfully");

      // Send each activity in the activityList to the API
      for (const activity of activityList) {
        const activityFormData = new FormData();
        activityFormData.append("EmailID", formData.EmailID);
        activityFormData.append("Name", activity.name);
        activityFormData.append("Frequency", activity.frequency);
        activityFormData.append("TimeperFrequency", activity.timePerFrequency);
        activityFormData.append("Remarks", activity.remarks);
        activityFormData.append("IsActive", true); // Assuming all activities are active

        try {
          const activityResponse = await createRASData(activityFormData);
         
        } catch (activityError) {
          console.error("Error posting activity:", activityError);
        }
      }

      // Optionally, clear the form data and activity list after submission
      setFormData(initialState);
      setActivityList([]);
      setSubmitted(true);
    } catch (error) {
      console.log("Error from server:", error);
    }
  } else {
    console.log("Form has errors:", errors);
  }
};

  const validate = () => {
    const errors = {};

    if (!formData.Organization) {
      errors.Organization = "Organizatioquired!";
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
      errors.ActivityName = "required!";
    }
    if (!activityDetails.frequency) {
      errors.frequency = " required!";
    }
    if (!activityDetails.timePerFrequency) {
      errors.timePerFrequency = "required!";
    }

    return errors;
  };

  return (
    <Container className="yoform">
      <ToastContainer />
      <form id="AddNewsform" onSubmit={handleSubmit}>
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
                        रूटीन गतिविधि पत्रक (हिंदी)
                      </th>
                      <td style={{ padding: "0px" }}>संशोधन</td>
                      <td>C</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0px" }}>दस्तावेज़ नंबर</td>
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
                    <b>संगठन का नाम:</b>
                    <small style={{ color: "red" }}>*</small>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    className="input_control form-control Organization_input"
                    id="txtorganization"
                    name="Organization"
                    placeholder="संगठन का नाम दर्ज करें"
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
                <label style={{ fontWeight: 400 }}>कर्मचारी कोड:</label>
                <input
                  autoComplete="off"
                  data-val="true"
                  data-val-number="कर्मचारी कोड एक संख्या होनी चाहिए।"
                  data-val-required="कर्मचारी कोड आवश्यक है।"
                  id="txtemployeecode"
                  name="EmployeeCode"
                  placeholder="कर्मचारी कोड दर्ज करें"
                  type="text"
                  value={formData.EmployeeCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 date d-flex justify-end">
                <label style={{ fontWeight: 400 }}>तारीख:</label>
                <input
                  id="txtdate"
                  name="Date"
                  placeholder="तारीख दर्ज करें"
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
                      पूरा नाम<small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtfname"
                        name="FullName"
                        placeholder="पूरा नाम दर्ज करें"
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
                      पदनाम
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtdesignation"
                        name="Designation"
                        placeholder="पदनाम दर्ज करें"
                        type="text"
                        value={formData.Designation}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg" scope="row">
                      विभाग
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtdepartment"
                        name="Department"
                        placeholder="विभाग दर्ज करें"
                        type="text"
                        value={formData.Department}
                        onChange={handleChange}
                      />
                    </td>
                    <th className="header_bg" scope="row">
                      सेक्शन
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtsection"
                        name="Section"
                        placeholder="सेक्शन दर्ज करें"
                        type="text"
                        value={formData.Section}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg" scope="row">
                      ईमेल आईडी<small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtemail"
                        name="EmailID"
                        placeholder="ईमेल दर्ज करें"
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
                      मोबाइल नंबर<small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtmobile"
                        name="MobileNo"
                        placeholder="मोबाइल नंबर दर्ज करें"
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
                      रिपोर्टिंग किसे: (नाम और पदनाम)
                    </th>
                    <td>:</td>
                    <td colSpan={4}>
                      <input
                        className="w-97 form-control input_control"
                        id="txtreporting"
                        name="Reporting"
                        placeholder="रिपोर्टिंग किसे"
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
        {/* Detail Information Section End */}

        {/* Personal Data Section Start */}
        <section>
          <div className="container">
            <div className="table-responsive">
              <div style={{ marginTop: "10px" }}>
                <label>
                  <b>व्यक्तिगत जानकारी:</b>
                </label>
              </div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      1
                    </th>
                    <th className="header_bg">जन्म तिथि और आयु (वर्षों में)</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        name="DOB"
                        placeholder="जन्म तिथि और आयु दर्ज करें"
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
                    <th className="header_bg">कार्य में शामिल होने की तिथि</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        id="txtdateofjoining"
                        name="DateofJoining"
                        placeholder="कार्य में शामिल होने की तिथि दर्ज करें"
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
                    <th className="header_bg">पिछला अनुभव (यदि कोई हो)</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        id="txtexperience"
                        name="PreviousExperience"
                        value={formData.PreviousExperience}
                        onChange={handleChange}
                        placeholder="पिछला अनुभव दर्ज करें"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      4
                    </th>
                    <th className="header_bg">शैक्षिक योग्यता</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        name="Educational"
                        placeholder="शैक्षिक योग्यता दर्ज करें"
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
                    <th className="header_bg">आधार कार्ड संख्या</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        id="txtaadhaar"
                        name="AadharNo"
                        placeholder="आधार कार्ड संख्या दर्ज करें"
                        type="text"
                        value={formData.AadharNo}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      6
                    </th>
                    <th className="header_bg">पैन कार्ड संख्या</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        id="txtpan"
                        name="PanNo"
                        placeholder="पैन कार्ड संख्या दर्ज करें"
                        type="text"
                        value={formData.PanNo}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Personal Data Section End */}
        <div>
          <label>
            <b>नियमित गतिविधि चार्ट:</b>
          </label>
        </div>
        <div className="table-responsive">
          <div className="chart">
            <div className="row w-100">
              <div className="col-md-1">
                <label style={{ marginRight: "30px" }}>आवृत्ति:</label>
              </div>
              <div className="col-md-8">
                <div>
                  <table className="routin_header">
                    <thead>
                      <tr>
                        <th className="header_bg" scope="col">
                          D= दैनिक
                        </th>
                        <th className="header_bg" scope="col">
                          W= साप्ताहिक
                        </th>
                        <th className="header_bg" scope="col">
                          F= पखवाड़े में एक बार
                        </th>
                        <th className="header_bg" scope="col">
                          M= मासिक
                        </th>
                        <th className="header_bg" scope="col">
                          Y= वार्षिक
                        </th>
                        <th className="header_bg" scope="col">
                          O= अवसरानुसार
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
          टिप्पणी: <b>C</b>=कंप्यूटर  <b>M</b>= मैनुअल <b>COM</b>= कंप्यूटर +
          मैनुअल का संयोजन
        </p>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="form-group">
                <label className="add_lable">
                  गतिविधि का नाम: <small style={{ color: "red" }}>*</small>
                </label>
                <input
                  className="form-control"
                  id="txtName"
                  name="name"
                  placeholder="गतिविधि का नाम दर्ज करें"
                  type="text"
                  value={activityDetails.name}
                  onChange={handleInputChange}
                  required
                />
                {isSubmit && (
                  <>
                    {errors.ActivityName && (
                      <p className="text-danger">{errors.ActivityName}</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="form-group">
                <label className="add_lable">
                  आवृत्ति: <small style={{ color: "red" }}>*</small>
                </label>
                <input
                  className="form-control"
                  id="txtFrequency"
                  name="frequency"
                  placeholder="आवृत्ति दर्ज करें"
                  type="text"
                  value={activityDetails.frequency}
                  onChange={handleInputChange}
                  required
                />
                {isSubmit && (
                  <>
                    {errors.frequency && (
                      <p className="text-danger">{errors.frequency}</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="form-group">
                <label className="add_lable">
                  आवृत्ति प्रति समय (मिनटों में):{" "}
                  <small style={{ color: "red" }}>*</small>
                </label>
                <input
                  className="form-control"
                  id="txtTimeperFrequency"
                  name="timePerFrequency"
                  placeholder="आवृत्ति प्रति समय दर्ज करें"
                  type="text"
                  value={activityDetails.timePerFrequency}
                  onChange={handleInputChange}
                  required
                />
                {isSubmit && (
                  <>
                    {errors.timePerFrequency && (
                      <p className="text-danger">{errors.timePerFrequency}</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="form-group">
                <label className="add_lable">टिप्पणी:</label>
                <input
                  className="form-control"
                  id="txtRemarks"
                  name="remarks"
                  placeholder="टिप्पणी दर्ज करें"
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
              value="नई गतिविधि जोड़ें"
              type="submit"
            />
          </div>
        </div>
        <div className="table-responsive fgff">
          <table
            className="table table-bordered"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <thead>
              <tr>
                <th scope="col" className="header_bg">
                  क्रम संख्या
                </th>
                <th scope="col" className="header_bg">
                  गतिविधि का नाम
                </th>
                <th scope="col" className="header_bg">
                  आवृत्ति
                </th>
                <th scope="col" className="header_bg">
                  आवृत्ति प्रति समय (मिनटों में)
                </th>
                <th scope="col" className="header_bg">
                  टिप्पणी
                </th>
              </tr>
            </thead>
            <tbody>
              {activityList.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.name}</td>
                  <td>{activity.frequency}</td>
                  <td>{activity.timePerFrequency}</td>
                  <td>{activity.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary">
                  प्रस्तुत करें
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </Container>
  );
};

export default FormBodyHindi;

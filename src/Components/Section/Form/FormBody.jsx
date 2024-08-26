import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { createRAS, createRASData } from "../../../Functions/RAC";
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
const FormBody = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isToastVisible, setToastVisibility] = useState(false);
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

    console.log("Submitting form with data:", formdata);

    try {
      const response = await createRAS(formdata);
      console.log("Response from server:", response);
      setToastVisibility(true);

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
          console.log("Activity Response from server:", activityResponse);
        } catch (activityError) {
          console.error("Error posting activity:", activityError);
        }
      }

      // Optionally, clear the form data and activity list after submission
      // setFormData(initialState);
      // setActivityList([]);
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
      errors.Organization = "Organization Name is required!";
    }

    if (!formData.EmailID) {
      errors.Email = "Email is required!";
    }

    if (!formData.MobileNo) {
      errors.Mobile = "Mobile is required!";
    }

    if (!formData.FullName) {
      errors.FullName = "Full Name is required!";
    }

    return errors;
  };

  return (
    <Container className="yoform">
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
                        ROUTINE ACTIVITY SHEET (ENGLISH)
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
                  {" "}
                  <label className="lbf">
                    <b>Name of the Organization:</b>
                    <small style={{ color: "red" }}>*</small>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    className="input_control form-control Organization_input"
                    id="txtorganization"
                    name="Organization"
                    placeholder="Enter Organization Name"
                    type="text"
                    value={formData.Organization}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-md-6">
                <label style={{ fontWeight: 400 }}>Employee Code:</label>
                <input
                  autoComplete="off"
                  data-val="true"
                  data-val-number="The field EmployeeCode must be a number."
                  data-val-required="The EmployeeCode field is required."
                  id="txtemployeecode"
                  name="EmployeeCode"
                  placeholder="Enter Employee Code"
                  type="text"
                  value={formData.EmployeeCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 date d-flex justify-end">
                <label style={{ fontWeight: 400 }}>Date:</label>
                <input
                  id="txtdate"
                  name="Date"
                  placeholder="Enter Date"
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
                      Full Name <small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtfname"
                        name="FullName"
                        placeholder="Enter Full Name"
                        type="text"
                        value={formData.FullName}
                        onChange={handleChange}
                      />
                    </td>
                    <th className="header_bg" scope="row">
                      Designation
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtdesignation"
                        name="Designation"
                        placeholder="Enter Designation"
                        type="text"
                        value={formData.Designation}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg" scope="row">
                      Department
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtdepartment"
                        name="Department"
                        placeholder="Enter Department"
                        type="text"
                        value={formData.Department}
                        onChange={handleChange}
                      />
                    </td>
                    <th className="header_bg" scope="row">
                      Section
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtsection"
                        name="Section"
                        placeholder="Enter Section"
                        type="text"
                        value={formData.Section}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg" scope="row">
                      Email ID <small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        id="txtemail"
                        name="EmailID"
                        placeholder="Enter Email"
                        type="email"
                        value={formData.EmailID}
                        onChange={handleChange}
                      />
                    </td>
                    <th className="header_bg" scope="row">
                      Mobile No. <small style={{ color: "red" }}>*</small>
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control detail_input"
                        data-val="true"
                        data-val-number="The field MobileNo must be a number."
                        data-val-required="The MobileNo field is required."
                        id="txtmobile"
                        name="MobileNo"
                        placeholder="Enter Mobile No"
                        type="text"
                        value={formData.MobileNo}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg" scope="row">
                      Reporting to whom:(Name and Designation)
                    </th>
                    <td>:</td>
                    <td colSpan={4}>
                      <input
                        className=" w-97 form-control input_control   "
                        id="txtreporting"
                        name="Reporting"
                        placeholder="Enter Reporting To"
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
                  <b>Personal Data:</b>
                </label>
              </div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      1
                    </th>
                    <th className="header_bg">
                      Date of Birth &amp; Age in years
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control"
                        name="DOB"
                        placeholder="Enter DOB &amp; Age"
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
                    <th className="header_bg">Date of Joining</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        id="txtdateofjoining"
                        name="DateofJoining"
                        placeholder="Enter Date of Joining"
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
                    <th className="header_bg">Previous Experience if any</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        id="txtexperience"
                        name="PreviousExperience"
                        value={formData.PreviousExperience}
                        onChange={handleChange}
                        placeholder="Enter Previous Experience"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      4
                    </th>
                    <th className="header_bg">Educational Qualification</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        name="Educational"
                        placeholder="Enter Educational Qualification"
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
                    <th className="header_bg">Any special Achievement</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        name="Achievement"
                        value={formData.Achievement}
                        onChange={handleChange}
                        placeholder="Enter Achievement"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      6
                    </th>
                    <th className="header_bg">Area of interest</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        id="txtareaofinterest"
                        name="Areaofinterest"
                        value={formData.Areaofinterest}
                        onChange={handleChange}
                        placeholder="Enter Area of interest"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="header_bg mahiti" scope="row">
                      7
                    </th>
                    <th className="header_bg">Any problem being faced</th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control input_control "
                        id="txtproblem"
                        name="Problem"
                        placeholder="Enter problem"
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
                    <th className="header_bg" style={{ whiteSpace: "nowrap" }}>
                      Any idea or any change suggested / any additional
                      responsibility you want to share?
                    </th>
                    <td>:</td>
                    <td>
                      <input
                        className="form-control  w-500"
                        id="txtresponsibility"
                        name="Additionalresponsibility"
                        placeholder="Enter additional responsibility"
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
                <b>Routine Activity Chart:</b>
              </label>
            </div>
            <div className="table-responsive">
              <div className="chart">
                <div className="row w-100">
                  <div className="col-md-1">
                    {" "}
                    <label style={{ marginRight: "30px" }}>Frequency:</label>
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
              Remark: <b>C</b>=Computer  <b>M</b>= Manual <b>COM</b>=
              Combination &nbsp;of &nbsp;Computer &nbsp; + &nbsp;Manual
            </p>
            <div className="card-body">
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
                      placeholder="Enter Name of activity"
                      type="text"
                      value={activityDetails.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="form-group">
                    <label className="add_lable">
                      Frequency: <small style={{ color: "red" }}>*</small>
                    </label>
                    <input
                      className="form-control"
                      id="txtFrequency"
                      name="frequency"
                      placeholder="Enter Frequency"
                      type="text"
                      value={activityDetails.frequency}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="form-group">
                    <label className="add_lable">
                      Time per Frequency:{" "}
                      <small style={{ color: "red" }}>*</small>
                    </label>
                    <input
                      className="form-control"
                      id="txtTimeperFrequency"
                      name="timePerFrequency"
                      placeholder="Enter Time per Frequency"
                      type="text"
                      value={activityDetails.timePerFrequency}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="form-group">
                    <label className="add_lable">Remarks:</label>
                    <input
                      className="form-control"
                      id="txtRemarks"
                      name="remarks"
                      placeholder="Enter Remarks"
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
            </div>
            <div className="table-responsive fgff">
              <table
                className="table table-bordered"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <thead>
                  <tr>
                    <th scope="col" className="header_bg">
                      Sr No.
                    </th>
                    <th scope="col" className="header_bg">
                      Name of activity
                    </th>
                    <th scope="col" className="header_bg">
                      Frequency
                    </th>
                    <th scope="col" className="header_bg">
                      Time per Frequency in minutes
                    </th>
                    <th scope="col" className="header_bg">
                      Remarks
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
            <div className="form-group">
              <label className="add_lable">Additional Information:</label>
              <textarea
                className="form-control"
                cols="20"
                id="txtinformation"
                name="Information"
                value={formData.Information}
                onChange={handleChange}
                placeholder="Enter Additional Information"
                rows="2"
              ></textarea>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="submit_btn">
              <input
                className="btn_sub"
                id="SaveData"
                name="Submit"
                value="Submit"
                type="submit"
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
  );
};

export default FormBody;

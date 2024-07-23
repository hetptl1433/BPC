import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormBody = () => {
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
    Name: "",
    Frequency: "",
    TimeperFrequency: "",
    Remarks: "",
    Information: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data submitted:", formData);
  };

  return (
    <Container className="yoform">
      <form
        action="/Home/AddRASEnglish"
        enctype="multipart/form-data"
        id="AddNewsform"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          name="__RequestVerificationToken"
          type="hidden"
          value="it6KJKB1rLXE8NTqFbyIl3dpqeDd7YeltiLP9fkOGMOIuRlfPYCSl-J2GTh1tg0BNBJC-Y5ZCdRqaf5EW91sflqIi6GuXRDJvfZpAeZBjkQ1"
        />
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
                        id="txtdateofbirth"
                        name="DOB"
                        placeholder="Enter DOB &amp; Age"
                        type="text"
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
                        id="txteducational"
                        name="Educational"
                        placeholder="Enter Educational Qualification"
                        type="text"
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
                        id="txtachievement"
                        name="Achievement"
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
                      name="Name"
                      placeholder="Enter Name of activity"
                      type="text"
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
                      name="Frequency"
                      placeholder="Enter Frequency"
                      type="text"
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
                      name="TimeperFrequency"
                      placeholder="Enter Time per Frequency"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="form-group">
                    <label className="add_lable">Remarks:</label>
                    <input
                      className="form-control"
                      id="txtRemarks"
                      name="Remarks"
                      placeholder="Enter Remarks"
                      type="text"
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
                  onClick={() => {
                    /* Add your function here */
                  }}
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
                <tbody id="dvdata">{/* Populate table rows here */}</tbody>
              </table>
            </div>
            <div className="form-group">
              <label className="add_lable">Additional Information:</label>
              <textarea
                className="form-control"
                cols="20"
                id="txtinformation"
                name="Information"
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

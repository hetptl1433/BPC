import React, { useState } from "react";
import { Link } from "react-router-dom";

const RouteTabs = () => {
  // State to track the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div>
      <div className="container">
        <div className="exTab1 d-flex justify-content-center">
          <ul
            className="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
            style={{ marginTop: "15px" }}
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={() => setSelectedLanguage("English")}
              >
                English
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => setSelectedLanguage("Gujarati")}
              >
                Gujarati
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                onClick={() => setSelectedLanguage("Hindi")}
              >
                Hindi
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {/* English Tab Content */}
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="mail_para">
              <p>English</p>
              <p>
                The routine activity sheet is designed by Baroda Productivity
                Council in such a way that it captures all the essentials of the
                persons. It consists of three parts. First part is the basic
                data related to the person, his position in the organization.
                The second part depicts his personal data – Date of birth, his
                total experience, his association with HIL, Dahej, Educational
                qualification, his special achievement during his life, his area
                of interest to work in HIL, Dahej, the problem faced to perform
                his duties, if the person has any idea or change suggestion or
                additional responsibility to share. The third part consist of
                the narration of the activities being performed by the person
                with time to do and the frequency of doing the activity such as
                daily, weekly, fortnightly, monthly, half yearly/yearly.
              </p>
            </div>
            <div className="sec_para">
              <p>
                1. The RAS is filled by the employee by himself- this enables to
                understand the duties and responsibility.
              </p>
              <p>
                2. Educational qualification shall reflect the level/knowledge
                of the person –is rightly placed in the organization.
              </p>
              <p>
                3. His association with M/s HIL, Dahej (no of years) shall
                reveal his loyalty, skill (unskilled) level and work culture
                permanence.
              </p>
              <p>
                4. Any special achievement during the life of the employee shall
                reveal the personality traits such as leadership, perseverance,
                ambition, creativity (not taking things for granted or believing
                in status quo).
              </p>
              <p>
                5. The problem faced to perform his duties enables bringing
                forth the genuine (perceived) problems. To improve upon any
                system, it is utmost important to identify the problem. The
                mother of improvement is the problem. If the problem is
                identified and root cause of the problem is analyzed, it is easy
                to find the solution. As such, the problem can be defined as the
                gap between the actual vs. expected.
              </p>
              <p>
                6. The idea for any change reflects the person’s creativity; he
                is sensitive to the environment and is a keen observer.
              </p>
            </div>
            <div className="third_para">
              <p style={{ fontSize: "20px" }}>
                The RAS is studied and analyzed for the person’s role in value
                addition in the process or he is just a headcount in the
                organization.
              </p>
              <p style={{ fontSize: "20px" }}>
                <b> Personal discussion:</b> For each of the positions, the
                faculty will have a personal discussion with the person so as to
                understand his activities, his role in the value chain, time
                element, and frequency of the activity.
              </p>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              {/* Link with the selected language as a query parameter */}
              <Link
                to={`/form?language=${selectedLanguage}`}
                className="btn btn-primary"
              >
                View Form
              </Link>
            </div>
          </div>
          {/* Gujarati Tab Content */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="mail_para">
              <p>Gujarati</p>
              <p>
                The routine activity sheet is designed by Baroda Productivity
                Council in such a way that it captures all the essentials of the
                persons. It consists of three parts. First part is the basic
                data related to the person, his position in the organization.
                The second part depicts his personal data – Date of birth, his
                total experience, his association with HIL, Dahej, Educational
                qualification, his special achievement during his life, his area
                of interest to work in HIL, Dahej, the problem faced to perform
                his duties, if the person has any idea or change suggestion or
                additional responsibility to share. The third part consist of
                the narration of the activities being performed by the person
                with time to do and the frequency of doing the activity such as
                daily, weekly, fortnightly, monthly, half yearly/yearly.
              </p>
            </div>
            <div className="sec_para">
              <p>
                1. The RAS is filled by the employee by himself- this enables to
                understand the duties and responsibility.
              </p>
              <p>
                2. Educational qualification shall reflect the level/knowledge
                of the person –is rightly placed in the organization.
              </p>
              <p>
                3. His association with M/s HIL, Dahej (no of years) shall
                reveal his loyalty, skill (unskilled) level and work culture
                permanence.
              </p>
              <p>
                4. Any special achievement during the life of the employee shall
                reveal the personality traits such as leadership, perseverance,
                ambition, creativity (not taking things for granted or believing
                in status quo).
              </p>
              <p>
                5. The problem faced to perform his duties enables bringing
                forth the genuine (perceived) problems. To improve upon any
                system, it is utmost important to identify the problem. The
                mother of improvement is the problem. If the problem is
                identified and root cause of the problem is analyzed, it is easy
                to find the solution. As such, the problem can be defined as the
                gap between the actual vs. expected.
              </p>
              <p>
                6. The idea for any change reflects the person’s creativity; he
                is sensitive to the environment and is a keen observer.
              </p>
            </div>
            <div className="third_para">
              <p style={{ fontSize: "20px" }}>
                The RAS is studied and analyzed for the person’s role in value
                addition in the process or he is just a headcount in the
                organization.
              </p>
              <p style={{ fontSize: "20px" }}>
                <b> Personal discussion:</b> For each of the positions, the
                faculty will have a personal discussion with the person so as to
                understand his activities, his role in the value chain, time
                element, and frequency of the activity.
              </p>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Link
                to={`/form?language=${selectedLanguage}`}
                className="btn btn-primary"
              >
                View Form
              </Link>
            </div>
          </div>
          {/* Hindi Tab Content */}
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="mail_para">
              <p>Hindi</p>
              <p>
                The routine activity sheet is designed by Baroda Productivity
                Council in such a way that it captures all the essentials of the
                persons. It consists of three parts. First part is the basic
                data related to the person, his position in the organization.
                The second part depicts his personal data – Date of birth, his
                total experience, his association with HIL, Dahej, Educational
                qualification, his special achievement during his life, his area
                of interest to work in HIL, Dahej, the problem faced to perform
                his duties, if the person has any idea or change suggestion or
                additional responsibility to share. The third part consist of
                the narration of the activities being performed by the person
                with time to do and the frequency of doing the activity such as
                daily, weekly, fortnightly, monthly, half yearly/yearly.
              </p>
            </div>
            <div className="sec_para">
              <p>
                1. The RAS is filled by the employee by himself- this enables to
                understand the duties and responsibility.
              </p>
              <p>
                2. Educational qualification shall reflect the level/knowledge
                of the person –is rightly placed in the organization.
              </p>
              <p>
                3. His association with M/s HIL, Dahej (no of years) shall
                reveal his loyalty, skill (unskilled) level and work culture
                permanence.
              </p>
              <p>
                4. Any special achievement during the life of the employee shall
                reveal the personality traits such as leadership, perseverance,
                ambition, creativity (not taking things for granted or believing
                in status quo).
              </p>
              <p>
                5. The problem faced to perform his duties enables bringing
                forth the genuine (perceived) problems. To improve upon any
                system, it is utmost important to identify the problem. The
                mother of improvement is the problem. If the problem is
                identified and root cause of the problem is analyzed, it is easy
                to find the solution. As such, the problem can be defined as the
                gap between the actual vs. expected.
              </p>
              <p>
                6. The idea for any change reflects the person’s creativity; he
                is sensitive to the environment and is a keen observer.
              </p>
            </div>
            <div className="third_para">
              <p style={{ fontSize: "20px" }}>
                The RAS is studied and analyzed for the person’s role in value
                addition in the process or he is just a headcount in the
                organization.
              </p>
              <p style={{ fontSize: "20px" }}>
                <b> Personal discussion:</b> For each of the positions, the
                faculty will have a personal discussion with the person so as to
                understand his activities, his role in the value chain, time
                element, and frequency of the activity.
              </p>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Link
                to={`/form?language=${selectedLanguage}`}
                className="btn btn-primary"
              >
                View Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteTabs;

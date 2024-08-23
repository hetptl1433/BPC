import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchContactPersons } from "../../../Functions/ContentContact"; // Adjust the path as necessary

const Bodsection = () => {
  const [contactPersons, setContactPersons] = useState([]);

  useEffect(() => {
    const getContactPersons = async () => {
      try {
        const data = await fetchContactPersons();
        setContactPersons(data);
      } catch (error) {
        console.error("Error fetching contact persons:", error);
      }
    };

    getContactPersons();
  }, []);

  return (
    <div>
      <section className="bod_section">
        <div className="pageContainer animation-element slide-left in-view">
          <div className="bod_top_text">
            <h2 className="heading32 pb-3 lh-1">Contact Person Details:</h2>
            <div className="row bodbox">
              {contactPersons
                .sort((a, b) => a.SortOrder - b.SortOrder) // Ensure correct order
                .map((person) => (
                  <div
                    key={person._id}
                    className="col-lg-4 col-md-4 inner_bodybox"
                  >
                    <h1 className="heading18 ee">{person.Name}</h1>
                    <h2 className="heading16 ee">
                      <p>{person.Designation}</p>
                      <Link to={`mailto:${person.Email}`}>{person.Email}</Link>
                    </h2>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bodsection;

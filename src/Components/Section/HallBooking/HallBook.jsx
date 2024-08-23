import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchHallBooking } from "../../../Functions/HallBooking";

const HallBookingCard = ({ id, imageSrc, title, bookNowUrl }) => (
  <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 all digital tab_content flex-container">
    <Link to={`/Home/HallBookingDetail/${id}`} className="custom-card"></Link>
    <div className="card card-custom bg-white border-white">
      <Link to={`/Home/HallBookingDetail/${id}`} className="custom-card">
        <div className="card-custom-img">
          <img src={imageSrc} alt={title} />
        </div>
      </Link>
      <div className="card-body" style={{ overflowY: "auto" }}>
        <Link to={`/Home/HallBookingDetail/${id}`} className="custom-card">
          <div className="card-text">
            <p>{title}</p>
          </div>
        </Link>
        <Link
          className="readmoreRed"
          style={{ width: "50%", textAlign: "right" }}
          to={`/BookNow/${id}`}
        >
          Rate Card
        </Link>
        <Link
          className="readmoreRed"
          style={{ width: "50%", float: "left" }}
          to={`/BookNow/${id}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
);

const HallBook = () => {
  const [hallBookings, setHallBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHallBooking();
        if (Array.isArray(response.data)) {
          setHallBookings(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch hall bookings:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="resource-news">
      <section className="resources_news blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer container">
          <h3 className="heading32 pb-3">Hall Booking</h3>
          <div className="row pt-4 news-row">
            {hallBookings.length > 0 ? (
              hallBookings.map((booking) => (
                <HallBookingCard
                  key={booking._id}
                  id={booking._id}
                  imageSrc={`${process.env.REACT_APP_API_URL_BPC}/${booking.Icon}`}
                  title={booking.Name}
                  bookNowUrl={`/BookNow/${booking._id}`}
                />
              ))
            ) : (
              <p>No hall bookings available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallBook;

import React from "react";
import hb1 from "../../../assets/images/Extra/df6c785c9b5940c7ad82038028f29694.jpg";

const hallBookings = [
  {
    id: 4,
    imageSrc: hb1,
    title: "Seminar Hall",
    bookNowUrl: "/BookNow",
  },
];

const HallBookingCard = ({ id, imageSrc, title, bookNowUrl }) => (
  <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 all digital tab_content flex-container">
    <a href={`/Home/HallBookingDetail/${id}`} className="custom-card"></a>
    <div className="card card-custom bg-white border-white">
      <a href={`/Home/HallBookingDetail/${id}`} className="custom-card">
        <div className="card-custom-img">
          <img src={imageSrc} alt={title} />
        </div>
      </a>
      <div className="card-body" style={{ overflowY: "auto" }}>
        <a href={`/Home/HallBookingDetail/${id}`} className="custom-card">
          <div className="card-text">
            <p>{title}</p>
          </div>
        </a>
        <a
          className="readmoreRed"
          style={{ width: "50%", textAlign: "right" }}
          href={`/Home/HallBookingDetail/${id}`}
        >
          Rate Card
        </a>
        <a
          className="readmoreRed"
          style={{ width: "50%", float: "left" }}
          href={bookNowUrl}
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
);

const HallBook = () => (
  <div className="resource-news">
    <section className="resources_news blogbox animation-element capability bounce-up in-view">
      <div className="pageContainer container">
        <h3 className="heading32 pb-3">Hall Booking</h3>
        <div className="row pt-4 news-row">
          {hallBookings.map((booking) => (
            <HallBookingCard key={booking.id} {...booking} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HallBook;

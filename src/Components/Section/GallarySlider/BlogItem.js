import React from "react";
import SimpleGallery from "./SimpleGallery"; // Assuming SimpleGallery is in the same folder

const BlogItem = ({ imageUrl, title, galleryID }) => {
  const images = [
    {
      largeURL: `${process.env.REACT_APP_API_URL_BPC}/${imageUrl}`,
      thumbnailURL: `${process.env.REACT_APP_API_URL_BPC}/${imageUrl}`,
      width: 800,
      height: 600,
    },
  ];

  return (
    <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 blog-item">
      <div className="card card-custom bg-white border-white">
        <div className="card-custom-img">
          <SimpleGallery galleryID={galleryID} images={images} />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

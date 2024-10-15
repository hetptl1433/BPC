import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listImages } from "../../../Functions/Gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Lightbox styles

const ResourceBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Loader state

  useEffect(() => {
    listImages().then((res) => {
      console.log(res.data);
      setBlogs(res.data);
      preloadImages(res.data); // Preload images
    });
  }, []);

  const preloadImages = (blogs) => {
    blogs.forEach((blog) => {
      const img = new Image();
      img.src = `${process.env.REACT_APP_API_URL_BPC}/${blog.image}`;
    });
  };

  const filterBlogs = (category) => {
    setActiveTab(category);
  };

  const shouldDisplayBlog = (blogCategory) => {
    return activeTab === "all" || activeTab === blogCategory;
  };

  const openLightbox = (index) => {
    setIsLoading(true); // Start loading before opening
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Stop loading once image is loaded
  };

  const blogImages = blogs.map(
    (blog) => `${process.env.REACT_APP_API_URL_BPC}/${blog.image}`
  );

  return (
    <div className="resource-blogs">
      <section className="resources_blogs blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer ">
          <h3 className="heading32 pb-3">Our Posts</h3>
          <div className="row pb-3">
            <div className="col-lg-12 blogtab">
              {/* Filter buttons for each category */}
              <Link
                to="#"
                className={`Button ${activeTab === "all" ? "Active" : ""}`}
                onClick={() => filterBlogs("all")}
              >
                All
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "Infrastructure" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("Infrastructure")}
              >
                Infrastructure
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "EventRoom" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("EventRoom")}
              >
                Event Room
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "digital_transTrainingProgram" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("digital_transTrainingProgram")}
              >
                Training Program
              </Link>
              <Link
                to="#"
                className={`Button ${activeTab === "Award13" ? "Active" : ""}`}
                onClick={() => filterBlogs("Award13")}
              >
                Award Ceremony BPAIKC 2013-14
              </Link>
              <Link
                to="#"
                className={`Button ${activeTab === "Award15" ? "Active" : ""}`}
                onClick={() => filterBlogs("Award15")}
              >
                Award Ceremony BPAIKC 2015-16
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "AwardGH15" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("AwardGH15")}
              >
                Award Ceremony GHKC-Gre Env 2015
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "digital_transAwardCeremonyGHKC-GreEnv2016-17"
                    ? "Active"
                    : ""
                }`}
                onClick={() =>
                  filterBlogs("digital_transAwardCeremonyGHKC-GreEnv2016-17")
                }
              >
                Award Ceremony GHKC-GreEnv 2016-17
              </Link>
              <Link
                to="#"
                className={`Button ${
                  activeTab === "AwardCeremony" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("AwardCeremony")}
              >
                Award Ceremony
              </Link>
            </div>
          </div>
          <div className="row pb-75 blog-row" id="gallery">
            {/* Display blogs based on active category */}
            {blogs.map(
              (blog, index) =>
                shouldDisplayBlog(blog.title) && (
                  <BlogItem
                    key={blog._id}
                    imageUrl={blog.image}
                    title={blog.title}
                    onClick={() => openLightbox(index)}
                  />
                )
            )}
          </div>
        </div>
      </section>

      {/* Full-screen lightbox slider with loader */}
      {isOpen && (
        <div>
          {isLoading && <div className="loader">Loading...</div>} {/* Loader */}
          <Lightbox
            mainSrc={blogImages[photoIndex]}
            nextSrc={blogImages[(photoIndex + 1) % blogImages.length]}
            prevSrc={
              blogImages[
                (photoIndex + blogImages.length - 1) % blogImages.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onImageLoad={handleImageLoad} // Callback to stop loader
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + blogImages.length - 1) % blogImages.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % blogImages.length)
            }
          />
        </div>
      )}
    </div>
  );
};

// Blog item component for displaying blog image and title
const BlogItem = ({ imageUrl, title, onClick }) => {
  return (
    <div
      className={`col-lg-3 col-md-3 col-xl-3 col-sm-6 blog-item ${title} tab_content flex-container`}
    >
      <div className="card card-custom bg-white border-white">
        <div className="card-custom-img">
          <button onClick={onClick} className="card-custom-img imgClass">
            <img
              src={`${process.env.REACT_APP_API_URL_BPC}/${imageUrl}`}
              alt="Blog Image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceBlogs;

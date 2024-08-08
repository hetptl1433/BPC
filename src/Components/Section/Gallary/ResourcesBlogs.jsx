import React, { useEffect, useState } from "react";
import { listImages } from "../../../Functions/Gallery";

const ResourceBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    listImages().then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  const [activeTab, setActiveTab] = useState("all");

  const filterBlogs = (category) => {
    setActiveTab(category);
  };

  const shouldDisplayBlog = (blogCategory) => {
    return activeTab === "all" || activeTab === blogCategory;
  };

  return (
    <div className="resource-blogs">
      <section className="resources_blogs blogbox animation-element capability bounce-up in-view">
        <div className="pageContainer container">
          <h3 className="heading32 pb-3">Our Posts</h3>
          <div className="row pb-3">
            <div className="col-lg-12 blogtab">
              <a
                href="#"
                className={`Button ${activeTab === "all" ? "Active" : ""}`}
                onClick={() => filterBlogs("all")}
              >
                All
              </a>
              <a
                href="#"
                className={`Button ${
                  activeTab === "Infrastructure" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("Infrastructure")}
              >
                Infrastructure
              </a>
              <a
                href="#"
                className={`Button ${
                  activeTab === "EventRoom" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("EventRoom")}
              >
                Event Room
              </a>
              <a
                href="#"
                className={`Button ${
                  activeTab === "digital_transTrainingProgram" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("digital_transTrainingProgram")}
              >
                Training Program
              </a>
              <a
                href="#"
                className={`Button ${activeTab === "Award13" ? "Active" : ""}`}
                onClick={() => filterBlogs("Award13")}
              >
                Award Ceremony BPAIKC 2013-14
              </a>
              <a
                href="#"
                className={`Button ${activeTab === "Award15" ? "Active" : ""}`}
                onClick={() => filterBlogs("Award15")}
              >
                Award Ceremony BPAIKC 2015-16
              </a>
              <a
                href="#"
                className={`Button ${
                  activeTab === "AwardGH15" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("AwardGH15")}
              >
                Award Ceremony GHKC-Gre Env 2015
              </a>
              <a
                href="#"
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
              </a>
              <a
                href="#"
                className={`Button ${
                  activeTab === "AwardCeremony" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("AwardCeremony")}
              >
                Award Ceremony
              </a>
            </div>
          </div>
          <div className="row pb-75 blog-row" id="gallery">
            {blogs.map(
              (blog) =>
                shouldDisplayBlog(blog.title) && (
                  <BlogItem
                    key={blog._id}
                    imageUrl={blog.image}
                    title={blog.title}
                  />
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogItem = ({ imageUrl, title }) => {
  return (
    <div
      className={`col-lg-3 col-md-3 col-xl-3 col-sm-6 blog-item ${title} tab_content flex-container`}
    >
      <div className="card card-custom bg-white border-white">
        <div className="card-custom-img">
          <a href={imageUrl} className="card-custom-img imgClass">
            <img
              src={`${process.env.REACT_APP_API_URL_BPC}/${imageUrl}`}
              alt="Blog Image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceBlogs;

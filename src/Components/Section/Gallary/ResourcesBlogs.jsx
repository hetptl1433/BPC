import React, { useState } from "react";
import rb1 from "../../../assets/images/Extra/db6604375908438fb42e960528c5e9da.jpg";
import rb2 from "../../../assets/images/Extra/f5a44a4c3e744a95ad68dedc94f7958d.jpg";
import rb3 from "../../../assets/images/Extra/5232daf0c6bd4239945b337e6d7720e6.jpg";

const ResourceBlogs = () => {
  // Dummy data (replace with actual data fetched from API or state)
  const blogs = [
    {
      id: 1,
      imageUrl: rb1,
      category: "digital_transTrainingProgram",
    },
    {
      id: 2,
      imageUrl: rb2,
      category: "digital_transTrainingProgram",
    },
    {
      id: 3,
      imageUrl: rb3,
      category: "digital_transTrainingProgram",
    },
  ];

  // State to manage active tab
  const [activeTab, setActiveTab] = useState("all"); // Default to show all blogs

  // Function to filter blogs based on selected category
  const filterBlogs = (category) => {
    setActiveTab(category); // Update active tab state
  };

  // Function to check if a blog should be displayed based on active tab
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
                href="javascript:void(0);"
                className={`Button ${activeTab === "all" ? "Active" : ""}`}
                onClick={() => filterBlogs("all")}
              >
                All
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transInfrastructure" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("Infrastructure")}
              >
                Infrastructure
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transEventRoom" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("EventRoom")}
              >
                Event Room
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transTrainingProgram" ? "Active" : ""
                }`}
                onClick={() => filterBlogs("digital_transTrainingProgram")}
              >
                Training Program
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transAwardCeremonyBPAIKC2013-14"
                    ? "Active"
                    : ""
                }`}
                onClick={() => filterBlogs("Award13")}
              >
                Award Ceremony BPAIKC 2013-14
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transAwardCeremonyBPAIKC2015-16"
                    ? "Active"
                    : ""
                }`}
                onClick={() => filterBlogs("Award15")}
              >
                Award Ceremony BPAIKC 2015-16
              </a>
              <a
                href="javascript:void(0);"
                className={`Button ${
                  activeTab === "digital_transAwardCeremonyGHKC-GreEnv2015"
                    ? "Active"
                    : ""
                }`}
                onClick={() => filterBlogs("AwardGH15")}
              >
                Award Ceremony GHKC-Gre Env 2015
              </a>
              <a
                href="javascript:void(0);"
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
                href="javascript:void(0);"
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
            {/* Render BlogItem components for each blog item */}
            {blogs.map(
              (blog) =>
                shouldDisplayBlog(blog.category) && (
                  <BlogItem
                    key={blog.id}
                    imageUrl={blog.imageUrl}
                    category={blog.category}
                  />
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// BlogItem component to render each blog item
const BlogItem = ({ imageUrl, category }) => {
  return (
    <div
      className={`col-lg-3 col-md-3 col-xl-3 col-sm-6 blog-item digital-item all ${category} tab_content flex-container`}
    >
      <div className="card card-custom bg-white border-white">
        <div className="card-custom-img">
          <a href={imageUrl} className="card-custom-img imgClass">
            <img src={imageUrl} alt="Blog Image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceBlogs;

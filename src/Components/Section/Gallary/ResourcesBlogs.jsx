import React, { useState } from "react";

const ResourceBlogs = () => {
  // Dummy data (replace with actual data fetched from API or state)
  const blogs = [
    {
      id: 1,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/db6604375908438fb42e960528c5e9da.jpg",
      category: "digital_transTrainingProgram",
    },
    {
      id: 2,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/f5a44a4c3e744a95ad68dedc94f7958d.jpg",
      category: "digital_transTrainingProgram",
    },
    {
      id: 3,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5232daf0c6bd4239945b337e6d7720e6.jpg",
      category: "digital_transTrainingProgram",
    },
    {
      id: 4,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/89182463cc1a40bea7b23f1f5c640c4a.jpg",
      category: "AwardCeremony",
    },
    {
      id: 5,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/4bb45073add7447aa139fde865bfad0f.jpg",
      category: "Infrastructure",
    },
    {
      id: 6,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/26e576a8af8c46e2b4d7003d5e9e7bff.jpg",
      category: "EventRoom",
    },
    {
      id: 7,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/9fcf8655032c427f965bf0750ebb6cfd.jpg",
      category: "Award13",
    },
    {
      id: 8,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/f35de9b70ea146ed807638d3bbc0bffd.jpg",
      category: "Award13",
    },
    {
      id: 9,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/c0a27e4012454b45a9e13141ad7676d4.jpg",
      category: "Award13",
    },
    {
      id: 10,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/fff0e86561a8495a96044318bca780b5.jpg",
      category: "Award15",
    },
    {
      id: 11,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/f773d35a497447d1906e7693dd26f335.jpg",
      category: "Award15",
    },
    {
      id: 12,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/ad83d85ff1584a428cd6b8c0c6e81caf.jpg",
      category: "Award15",
    },
    {
      id: 13,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/d762ddc313df40c8a27b448094d8a76d.jpg",
      category: "Award15",
    },
    {
      id: 14,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/7d84d873741c4b72b73a18a25c9ea936.jpg",
      category: "Award15",
    },
    {
      id: 15,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5c5c60b0843a4890aedac75bd931fab9.jpg",
      category: "Award15",
    },
    {
      id: 16,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/6012c4ff48e54ebaa68de5a08c66f960.jpg",
      category: "Award15",
    },
    {
      id: 17,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/9c617e50a6284374b04ec23fd9c1c0ed.jpg",
      category: "Award15",
    },
    {
      id: 18,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/7c877241f21846aca30b0a04d478fd95.jpg",
      category: "AwardGH15",
    },
    {
      id: 19,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/0b527cf90fbc45e58766660477223254.jpg",
      category: "AwardGH15",
    },
    {
      id: 20,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/1461b2a74e3546d7be18a0e94c8e1224.jpg",
      category: "AwardGH15",
    },
    {
      id: 21,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/7b136bc190ca485c835104b6263e999b.jpg",
      category: "AwardGH15",
    },
    {
      id: 22,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5c2873455be6434890c3f6ad48ce6d40.jpg",
      category: "AwardGH15",
    },
    {
      id: 23,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/771818a31c9e4f9c81d93653ed0ab247.jpg",
      category: "AwardGH16",
    },
    {
      id: 24,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/b3e370b99c284a77ba1d34a192edbe7d.jpg",
      category: "AwardGH16",
    },
    {
      id: 25,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/0c4ec863128b4454a543c54fec972c83.jpg",
      category: "AwardGH16",
    },
    {
      id: 26,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/27c3267bb1644532b2d77f5ba989c82a.jpg",
      category: "AwardGH16",
    },
    {
      id: 27,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/a461588f0b24453fbb7c92ce7b02a390.jpg",
      category: "AwardGH16",
    },
    {
      id: 28,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/56c9de9377d34c58b2b11df569bd8c19.jpg",
      category: "AwardGH16",
    },
    {
      id: 29,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/b848c4037e5f4834b6794ace74f36297.jpg",
      category: "AwardGH16",
    },
    {
      id: 30,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/6d45f7c4ab2d43be9f3de4e2c5ac4c7c.jpg",
      category: "AwardGH16",
    },
    {
      id: 31,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/c36c096b770c44c886a357050cb36871.jpg",
      category: "AwardGH16",
    },
    {
      id: 32,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/33a06b5478b4411aa5368c5fa2518deb.jpg",
      category: "AwardGH16",
    },
    // New items with category AwardCeremony
    {
      id: 33,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/a0756fcf72b14285ba4d35d06e968261.jpg",
      category: "AwardCeremony",
    },
    {
      id: 34,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/2211fdb8626a436f99da3043c937d5d6.jpg",
      category: "AwardCeremony",
    },
    {
      id: 35,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/8f543421e3344ffda57dde235c32b684.jpg",
      category: "AwardCeremony",
    },
    {
      id: 36,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5a503e77efe94f3da25223310c80f3cd.jpg",
      category: "AwardCeremony",
    },
    {
      id: 37,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/52507a764ccc45829ac8c740d46c376e.jpg",
      category: "AwardCeremony",
    },
    {
      id: 38,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/eaecf8551bdd4bc98ac2d185eadbf0c3.jpg",
      category: "AwardCeremony",
    },
    {
      id: 39,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/4d02a8376fbb4c04827532903dcb8184.jpg",
      category: "AwardCeremony",
    },
    {
      id: 40,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/a1ae105c8de24e4ea76965c222366eef.jpg",
      category: "AwardCeremony",
    },
    {
      id: 41,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5789f5e2b5204122a26104f0fa92cf4e.jpg",
      category: "AwardCeremony",
    },
    {
      id: 42,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/75eca4093bf54d8b8d01effb18dcd07c.jpg",
      category: "AwardCeremony",
    },
    {
      id: 43,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/62c5712263514e6593f5b8fa1c422a06.jpg",
      category: "AwardCeremony",
    },
    {
      id: 44,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/088ed0127cfd492992252d94647a3de9.jpg",
      category: "AwardCeremony",
    },
    {
      id: 45,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/510f11efe310473987a6e7744fc8ee2a.jpg",
      category: "AwardCeremony",
    },
    {
      id: 46,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/9aa1c13e198145d18c4bd2acb8937549.jpg",
      category: "AwardCeremony",
    },
    {
      id: 47,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/9d2892370b8a4ea98014d97248fcecac.jpg",
      category: "AwardCeremony",
    },
    {
      id: 48,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/cbea03368f5b4f1183aa696cab78767c.jpg",
      category: "AwardCeremony",
    },
    {
      id: 49,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/5e56e5b1a7a94e5ea6fd28df3b05007b.jpg",
      category: "AwardCeremony",
    },
    {
      id: 50,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/905fca949e444976a37664c2caa82e50.jpg",
      category: "AwardCeremony",
    },
    {
      id: 51,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/52188ebe8d8b4352ac16c5c5a88fffc2.jpg",
      category: "AwardCeremony",
    },
    {
      id: 52,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/e01aa40489b94dfbba82e3abff53a3d2.jpg",
      category: "AwardCeremony",
    },
    {
      id: 53,
      imageUrl:
        "http://bpcindia.org/Upload/PhotoGallery/21fa05eba4284096a07ddf83a9178781.jpg",
      category: "AwardCeremony",
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

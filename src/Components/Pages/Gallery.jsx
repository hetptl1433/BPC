import React from "react";
import GalleryBanner from "../Section/Gallary/GalleryBanner";
import ParaSection from "../Section/Gallary/ParaSection";
import ResourceBlogs from "../Section/Gallary/ResourcesBlogs";
import Banner6 from "../Section/Home/Banner6";

const Gallery = () => {
  return (
    <div>
      <GalleryBanner></GalleryBanner>
      <ParaSection></ParaSection>
      <ResourceBlogs></ResourceBlogs>
      <Banner6></Banner6>
    </div>
  );
};

export default Gallery;

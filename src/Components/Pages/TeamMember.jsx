import React from "react";
import TeamBanner from "../Section/TeamMember/TeamBanner";
import TeamBody from "../Section/TeamMember/TeamBody";
import TeamPhotos from "../Section/TeamMember/TeamPhotos";

const TeamMember = () => {
  return (
    <div>
      <TeamBanner></TeamBanner>
      <TeamBody></TeamBody>
      <TeamPhotos></TeamPhotos>
    </div>
  );
};

export default TeamMember;

import FullService from "@/components/FullService/FullService";
import Statistics from "@/components/Statistics/Statistics";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import React from "react";
import SocialNetworkBlock from "../../components/SocialNetworkBlock/SocialNetworkBlock";

const AboutUs = () => {
  return (
    <div>
      <WelcomeBanner />
      <Statistics />
      <FullService />
      <SocialNetworkBlock />
    </div>
  );
};
export default AboutUs;

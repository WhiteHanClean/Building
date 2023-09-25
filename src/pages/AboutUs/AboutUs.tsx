import FounderQuoteBanner from "@/components/FounderQuoteBanner/FounderQuoteBanner";
import FullService from "@/components/FullService/FullService";
import Statistics from "@/components/Statistics/Statistics";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <WelcomeBanner />
      <Statistics />
      <FounderQuoteBanner/>
      <FullService />
    </div>
  );
};
export default AboutUs;

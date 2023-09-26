import Company from "@/components/Company/Company";
import FounderQuoteBanner from "@/components/FounderQuoteBanner/FounderQuoteBanner";
import FullService from "@/components/FullService/FullService";
import Statistics from "@/components/Statistics/Statistics";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import React, { useEffect, useState } from "react";
import SocialNetworkBlock from "../../components/SocialNetworkBlock/SocialNetworkBlock";

const AboutUs = () => {
  const [width, setWidth] = useState(0); // Initialize with an initial width value

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>
      <WelcomeBanner />
      <Statistics />
      <Company />
      <FounderQuoteBanner />
      <FullService />
      {width <= 768 ? "" : <SocialNetworkBlock />}
    </div>
  );
};

export default AboutUs;

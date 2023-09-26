import Company from "@/components/Company/Company";
import FullService from "@/components/FullService/FullService";
import Statistics from "@/components/Statistics/Statistics";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import React, { useEffect, useState } from "react";
import SocialNetworkBlock from "../../components/SocialNetworkBlock/SocialNetworkBlock";

const AboutUs = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <WelcomeBanner />
      <Statistics />
      <Company/>
      <FullService />
      {width <= 768 ? "" : <SocialNetworkBlock />}
    </div>
  );
};
export default AboutUs;

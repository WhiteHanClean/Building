import Benefits from "@/components/Benefits/Benefits";
import Conditions from "@/components/Conditions/Conditions";
import Consultation from "@/components/Consultation/Consultation";
import ListingHero from "@/components/ListingHero/ListingHero";
import Questions from "@/components/Questions/Questions";
import React from "react";

const Accommodation = () => {
  return (
    <div>
      <ListingHero />
      <Conditions/>
      <Benefits />
      <Questions/>
      <Consultation/>
    </div>
  );
};

export default Accommodation;

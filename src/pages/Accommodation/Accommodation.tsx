import Benefits from "@/components/Benefits/Benefits";
import Consultation from "@/components/Consultation/Consultation";
import ListingHero from "@/components/ListingHero/ListingHero";
import Questions from "@/components/Questions/Questions";
import React from "react";

const Accommodation = () => {
  return (
    <div>
      <ListingHero />
      <Benefits />
      <Questions/>
      <Consultation/>
    </div>
  );
};

export default Accommodation;

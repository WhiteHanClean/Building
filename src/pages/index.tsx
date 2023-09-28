import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Questions from "@/components/Questions/Questions";
import Slider from "@/components/Slider/Slider";
import TypesOfServices from "@/components/TypesOfServices/TypesOfServices";
import Service from "@/components/Services/Service";
import Stages from "@/components/Stages/Stages";
import BuildBanner from "@/components/BuildBanner/BuildBanner";
import Statistics from "@/components/Statistics/Statistics";
import Consultation from "@/components/Consultation/Consultation";
import Benefits from "@/components/Benefits/Benefits";
import SocialNetworkBlock from "@/components/SocialNetworkBlock/SocialNetworkBlock";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Property Library Phuket</title>
        <meta
          name="Property Library Phuket"
          content="Property Library Phuket"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <BuildBanner />
      <Statistics />
      <Slider />
      <TypesOfServices />
      <Stages/>
      <Service />
      <SocialNetworkBlock/>
      <Questions/>
      <Consultation />
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
<<<<<<< HEAD
import Slider from '@/components/Slider/Slider'
=======
import TypesOfServices from "@/components/TypesOfServices/TypesOfServices";
import Service from "@/components/Services/Service";
import BuildBanner from "@/components/BuildBanner/BuildBanner";
import Statistics from "@/components/Statistics/Statistics";
import Consultation from "@/components/Consultation/Consultation";
>>>>>>> 384e8d16d20913ba8776c24effe4660d8613f24e

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

<<<<<<< HEAD
      <Slider/>
=======
      <BuildBanner />

      <TypesOfServices />
      <Statistics />
      <Service />
      <Consultation />
>>>>>>> 384e8d16d20913ba8776c24effe4660d8613f24e
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import Service from "@/components/Services/Service";
import BuildBanner from "@/components/BuildBanner/BuildBanner";
import Statistics from "@/components/Statistics/Statistics";

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
      <Statistics/>
      <Service />
    </>
  );
}

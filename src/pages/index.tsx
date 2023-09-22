import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import Slider from '@/components/Slider/Slider'

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

      <Slider/>
    </>
  );
}

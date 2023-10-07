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
import SocialNetworkBlock from "@/components/SocialNetworkBlock/SocialNetworkBlock";
import axios from "axios";
import { RealEstate } from "@/redux/api";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<{
  allOffers: RealEstate[];
  error?: any;
}> = ({ allOffers, error }) => {

  console.log(allOffers)
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

      {/* {!error ? ( */}
      {allOffers && <Slider allOffers={allOffers} />}

      {/* ) : ( */}
      {/* <p>Error: {error.message}</p>
      )} */}

      <TypesOfServices />
      <Stages />
      <Service />
      <SocialNetworkBlock />
      <Questions />
      <Consultation />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data: allOffers } = await axios.get(
      "https://propertylibphuket-production.up.railway.app/realEstates/"
    );

    return {
      props: {
        allOffers,
      },
    };
  } catch (error: any) {
    return {
      props: {
        allOffers: null,
        error: error.message as string,
      },
    };
  }
}

export default Home;

import { GetStaticProps } from "next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllOffers } from "../redux/libraryPhukeSlice";

type RealEstate = {
  _id: string;
  title: string;
  price: number;
  roomsAmount: number;
  landArea: number;
  builtUpArea: number;
  kitchenArea: number;
  floor: string;
  bathroomAmount: number;
  balconyAmount: number;
  buildingType: string;
  yearBuilt: number;
  description: string;
  hasRestaraunt: boolean;
  hasParking: boolean;
  hasSpa: boolean;
  hasCommunalPool: boolean;
  hasGym: boolean;
  hasClub: boolean;
  images: any[];
  __v: number;
};

export type RealEstateArray = RealEstate[];

const getStaticProps: GetStaticProps<{
  realEstates: RealEstateArray;
}> = async () => {
  try {
    const response = await axios.get(
      "https://propertylibphuket-production.up.railway.app/realEstates/"
    );
    const realEstates: RealEstateArray = response.data;
    console.log(realEstates);
    const dispatch = useDispatch();
    dispatch(setAllOffers(realEstates));

    return {
      props: {
        realEstates,
      },
    };
  } catch (error) {
    console.error("Ошибка при выполнении GET-запроса:", error);

    return {
      props: {
        realEstates: [],
      },
    };
  }
};

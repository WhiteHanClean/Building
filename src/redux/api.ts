import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface RealEstate {
  _id: string;
  title: string;
  price: number;
  roomsAmount: number;
  landArea: number;
  builtUpArea: number;
  kitchenArea: string;
  floor: string;
  bathroomAmount: string;
  balconyAmount: string;
  buildingType: string;
  yearBuilt: string;
  description: string;
  location: string;
  hasRestaurant: boolean; // Fixed typo
  hasParking: boolean;
  hasSpa: boolean;
  hasCommunalPool: boolean;
  hasGym: boolean;
  hasClub: boolean;
  __v: number;
  mainImage: string;
  alt: string;
}

export interface FilterParams {
  currentPage?: number;
  buildingType?: string;
  location?: string;
  roomsAmount?: number;
  // Additional characteristics
  builtUpArea?: number;
  landArea?: number;
  price?: number;
}

interface IGet {
  filterParams?: FilterParams;
  currentPage: number;
  isRent?: boolean;
}

export const api = createApi({
  reducerPath: "libraryPhuket",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://propertylibphuket-production.up.railway.app/",
  }),
  tagTypes: ["Reals"],
  endpoints: (builder) => ({
    getAllOffers: builder.query<RealEstate[], void>({
      query: () => "realEstates/",
      providesTags: ["Reals"],
    }),

    getFilteredOffers: builder.query<RealEstate[], IGet>({
      query: ({ currentPage, isRent, filterParams }) => ({
        url: `realEstates/`,
        params: {
          ...filterParams,
          _page: currentPage,
          _limit: 9,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    getUnFilteredOffers: builder.query<RealEstate[], IGet>({
      query: ({ currentPage, isRent }) => ({
        url: `realEstates/`,
        params: {
          _page: currentPage,
          _limit: 9,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    // getOneOffers: builder.query<RealEstate[], { id: string }>({
    //   query: ({ id }) => `realEstates/_id=${id}`,
    //   providesTags: ["Reals"],
    // }),
  }),
});

export const {
  useGetAllOffersQuery,
  useGetFilteredOffersQuery,
  // useGetOneOffersQuery,
  useGetUnFilteredOffersQuery,
} = api;

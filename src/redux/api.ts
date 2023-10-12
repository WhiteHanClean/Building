import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MainFormParams } from "./store";


export type Location = {
  _id: string;
  title: string;
  __v: number;
};

export type LocationResponse = Location[];

interface IImages {
  url: string;
}
export interface RealEstate {
  _id: string;
  title: string;
  price: number;
  roomsAmount: number;
  roomsAmountFrom: number;
  roomsAmountTo: number;
  landArea: number;
  landAreaFrom: number;
  landAreaTo: number;
  builtUpArea: number;
  kitchenArea: string;
  floor: string;
  priceSquereFrom: number,
  priceSquereTo: number,
  badroomsAmountFrom: number,
  beachLian: number,
  beachBang: number,
  badroomsAmountTo: number,
  priceMillionBahtFrom: number,
  priceMillionBahtTo: number,
  bathroomAmount: string;
  balconyAmount: string;
  buildingType: string;
  builtUpAreaFrom: number;
  builtUpAreaTo: number;
  yearBuilt: string;
  description: string;
  location: Location;
  hasRestaurant: boolean; // Fixed typo
  hasParking: boolean;
  hasSpa: boolean;
  hasCommunalPool: boolean;
  hasGym: boolean;
  hasClub: boolean;
  __v: number;
  mainImage: string;
  alt: string;
  images: IImages[];
  pricePerSquareMeter: string;
}

export interface IPaginate {
  isRent?: boolean;
}

export interface FilterParams {
  currentPage?: number;
  limit?: number;
  buildingType?: string;
  location?: string;
  roomsAmount?: number;
  // Additional characteristics
  builtUpArea?: number;
  landArea?: number;
  price?: number;
  isFilter: boolean;
}

interface IGet {
  filterParams?: FilterParams;
  currentPage: number;
  isRent?: boolean;
  limit: number;
}

export const api = createApi({
  reducerPath: "libraryPhuket",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://propertylibphuket-production.up.railway.app/",
  }),
  // reactHooksModule({ unstable__sideEffectsInRender: true })
  tagTypes: ["Reals"],
  endpoints: (builder) => ({
    getAllOffers: builder.query<RealEstate[], void>({
      query: () => "realEstates/",
      providesTags: ["Reals"],
    }),
   
    getFilteredOffers: builder.query<RealEstate[], IGet>({
      query: ({ currentPage, isRent, filterParams, limit }) => ({
        url: `realEstates/`,
        params: {
          ...filterParams,
          _page: currentPage,
          _limit: limit,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    getUnFilteredOffers: builder.query<RealEstate[], IGet>({
      query: ({ currentPage, isRent, limit }) => ({
        url: `realEstates/`,
        params: {
          _page: currentPage,
          _limit: limit,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    getPaginateOffers: builder.query<RealEstate[], IGet>({
      query: ({ isRent, filterParams, limit }) => ({
        url: `realEstates/`,
        params: {
          ...filterParams,
          _limit: limit,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    getPaginateOffersWithFilter: builder.query<RealEstate[], IGet>({
      query: ({ isRent, limit }) => ({
        url: `realEstates/`,
        params: {
          _limit: limit,
          isRent: isRent ?? false, // Default to false if isRent is not provided
        },
        providesTags: ["Reals"],
      }),
    }),

    getOneOffers: builder.query<RealEstate[], { id: string }>({
      query: ({ id }) => `realEstates/${id}`,
      providesTags: ["Reals"],
    }),

    getLocation: builder.query<LocationResponse, void>({
      query: () => `locations`,
      providesTags: ["Reals"],
    }),
  }),
});

export const setFormMain = (mainForm: MainFormParams) => ({
  type: 'mainFormSearch',
  payload: mainForm,
});

export const {
  useGetLocationQuery,
  useGetAllOffersQuery,
  useGetOneOffersQuery,
  useGetFilteredOffersQuery,
  useGetUnFilteredOffersQuery,
  useGetPaginateOffersQuery,
  useGetPaginateOffersWithFilterQuery,
} = api;

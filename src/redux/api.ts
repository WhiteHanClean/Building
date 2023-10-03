import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


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
    hasRestaraunt: boolean;
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
    buildingType?: string;
    location?: string;
    roomsAmount?: number;
    //Дополнительные характеристики
    builtUpArea?: number;
    landArea?: number;
    price?: number;
    isRent?: boolean;
}

export const api = createApi({
    reducerPath: 'libraryPhuket',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://propertylibphuket-production.up.railway.app/' }),
    endpoints: (builder) => ({
        getAllOffers: builder.query<RealEstate[], void>({
            query: () => 'realEstates/',
        }),
        getFilteredOffers: builder.query<RealEstate[], FilterParams>({
            query: (filterParams) => ({
                url: 'realEstates/',
                params: filterParams,
            }),
        }),
    }),
});

export const { useGetAllOffersQuery, useGetFilteredOffersQuery } = api;

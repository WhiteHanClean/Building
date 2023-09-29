import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface RealEstate {
    _id: string;
    title: string;
    price: number;
    roomsAmount: number;
    landArea: number;
    builtUpArea: number;
    kitchenArea: string;
    floor: string;
    Location: string;
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

interface LibraryPhuketState {
    allOffers: RealEstate[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface FilterParams {
    buildingType: string;
    district: string;
    roomsAmount: string;
    price: {
        min: number;
        max: number;
    };
}

export const fetchFilteredOffers = createAsyncThunk<RealEstate[], FilterParams>('libraryPhuket/fetchFilteredOffers', async (filterParams, thunkAPI) => {
    try {
        const response = await axios.get('https://propertylibphuket-production.up.railway.app/realEstates/', {
            params: filterParams,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const fetchAllOffers = createAsyncThunk<RealEstate[]>('libraryPhuket/fetchAllOffers', async () => {
    try {
        const response = await axios.get('https://propertylibphuket-production.up.railway.app/realEstates/');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const initialState: LibraryPhuketState = {
    allOffers: [],
    status: 'idle',
    error: null,
};

const libraryPhuketSlice = createSlice({
    name: 'libraryPhuket',
    initialState,
    reducers: {
        setAllOffers: (state, action) => {
            state.allOffers = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllOffers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllOffers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allOffers = action.payload;
            })
            .addCase(fetchAllOffers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || 'Неизвестная ошибка';
            })
            .addCase(fetchFilteredOffers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFilteredOffers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allOffers = action.payload;
            })
            .addCase(fetchFilteredOffers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || 'Неизвестная ошибка';
            });
    },
});

export const { setAllOffers } = libraryPhuketSlice.actions;

export default libraryPhuketSlice.reducer;

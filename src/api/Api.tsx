// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // заменить
  endpoints: (builder) => ({
    getObjects: builder.query<Array<object>, number>({
      query: (page) => `objects?page=${page}`, // Заменить
    }),
  }),
});

export const { useGetObjectsQuery } = api;

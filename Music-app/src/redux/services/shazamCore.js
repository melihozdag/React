import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "eae8ab941dmsh1af02302746bf02p132fe5jsn7dbd44c6197a"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/list",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

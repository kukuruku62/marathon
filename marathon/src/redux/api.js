import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const eventsAPI = createApi({
  reducerPath: "eventsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (build) => ({
    getAllEvents: build.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const events = await fetchWithBQ("events");
          const mainAdvertisingData = await fetchWithBQ("events/mainsponsors");
          return {
            data: {
              eventsData: events.data,
              advertisingData: mainAdvertisingData.data,
            },
          };
        } catch (error) {
          throw new Error("Failed to fetch data");
        }
      },
    }),
    getSingleEvent: build.query({
      query: (id) => `events/${id}`,
    }),
  }),
});

export const { useGetAllEventsQuery, useGetSingleEventQuery } = eventsAPI;

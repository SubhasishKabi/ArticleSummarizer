import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});
//redux toolkit query automatically creates an hook(custom) out of the endpoints

export const { useLazyGetSummaryQuery } = articleApi;

//reducerPath: This property specifies the slice name for the API reducer

// In summary, the reducers in createSlice define the individual reducer functions for a specific slice of the state,
// while reducerPath in createApi is a configuration option that sets the path for the API-related reducer within the
// Redux store's state tree.
/*
createApi: This function is part of the Redux Toolkit Query package (@reduxjs/toolkit/query). 
It is used to create an API slice, which helps in handling API requests and managing the corresponding state 
in a Redux store.The createApi function takes an object with configuration options and returns an API slice object.

The createApi function allows you to define endpoints, define query endpoints for fetching data, 
and perform mutations. It generates a set of actions, reducers, and selectors for interacting with the API endpoints. 
It integrates well with Redux Toolkit's store setup and provides a streamlined way to handle API-related 
functionality
*/

/*
createSlice: This function is used to create a Redux slice, which defines a portion of the Redux state and 
the corresponding actions and reducers for that slice. It is typically used for managing application state 
unrelated to API calls.

The createSlice function takes an object with configuration options, including the name, 
initialState, and reducers, and returns an object containing the generated actions and reducer for that slice. 
It helps in reducing boilerplate code by automatically generating action creators and action types.

With createSlice, you define the initial state and a set of reducer functions that define 
how the state should be updated in response to dispatched actions. It provides a simple and concise way to define 
the Redux slice and manage the associated actions and reducers.
 */

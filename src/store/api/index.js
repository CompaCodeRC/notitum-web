import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from "cookies-next";
import general from './general';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_HOST,
        prepareHeaders: (headers) => {
            const token = getCookie("user-token");
            if (token) {
                headers.set("user-token", token);
            }
            return headers;
        }
    }),
    tagTypes: ["userProfile"],
    endpoints: (builder) => ({
        ...general(builder),
    }),
});

export const {
    //General
    useGetCurrenciesQuery,
    useGetTickerQuery,
} = apiSlice;

export default apiSlice;
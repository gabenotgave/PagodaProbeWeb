import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://redux-toolkit.js.org/rtk-query/overview
export const pagodaProbeApi = createApi({
    reducerPath: "pagodaProbeApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.PAGODA_PROBE_API_ENDPOINT }),
    endpoints: (builder) => ({
        getDocketCaseByNumber: builder.query({
            query: (number) => `docketcase/getcasebydocketnumber?docketNumber=${number}`
        }),
        getPersonByName: builder.query({
            query: ({
                firstName,
                middleInitial,
                lastName,
                birthDate,
                state,
                county
            }) => `person/getpersonbyname?firstName=${firstName ?? ''}&middleInitial=${middleInitial ?? ''}&lastName=${lastName ?? ''}&birthdate=${birthDate ?? ''}&state=${state ?? ''}&county=${county ?? ''}`
        })
    })
});

export const { useGetDocketCaseByNumberQuery, useGetPersonByNameQuery } = pagodaProbeApi;

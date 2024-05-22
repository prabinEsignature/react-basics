import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
    }),
    contact: builder.query<Contact, number>({
      query: (id) => `/contacts/${id}`,
    }),
    addContact: builder.mutation<void, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
    }),
    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

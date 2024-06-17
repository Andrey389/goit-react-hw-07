import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./filtersSlice";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, statusFilters],
  (contacts, textFilter) => {
    return contacts.filter((contact) =>
      contact.status.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

// export const getName = state => state.contacts.items.name;

// export const getNumber = state => state.contacts.items.phone;

// export const getId = state => state.contacts.items.id;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
);

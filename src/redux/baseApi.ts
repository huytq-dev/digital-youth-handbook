<<<<<<< HEAD
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/config';
import { authService } from '@/features/auth/auth.service';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = authService.getAccessToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
=======
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithToast } from './baseQueryWithToast';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithToast,
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
  tagTypes: ['Auth', 'Common'],
  keepUnusedDataFor: 60,
  endpoints: () => ({}),
});


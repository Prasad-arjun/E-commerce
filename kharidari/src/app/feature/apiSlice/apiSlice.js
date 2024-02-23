import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints:(builder)=>({
    getProduct:builder.query({
    query:(postId)=>`${postId}`,
    }),
    getShopProducts:builder.query({
      query:(()=>"")
    })
    
  })
});

export const {useGetProductQuery,useGetShopProductsQuery}=apiSlice;

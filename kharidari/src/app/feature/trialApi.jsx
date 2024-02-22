import React from "react";
import { useGetPostsQuery } from "./apiSlice/apiSlice";

function TrialApi() {
const {data ,error ,isLoading}=useGetPostsQuery(); 

  return (
    <>
        
    </>
  );
}

export default TrialApi;

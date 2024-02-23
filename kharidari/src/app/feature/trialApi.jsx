import React from "react";
import { useGetProductQuery } from "./apiSlice/apiSlice";

function TrialApi() {
const {data ,error ,isLoading}=useGetProductQuery(); 

  return (
    <>
        
    </>
  );
}

export default TrialApi;

import "../index.css";
import React from "react";
import cartIsEmptySVG from "../assets/cartIsEmptyImage.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function CartIsEmpty() {
  return (
    <div className="h-auto w-full center flex-col ">
      <img
        src={cartIsEmptySVG}
        alt="cart is empty image"
        className="max-h-[70vh] opacity-35 "
      />

      <div className="absolute center flex-col">
        <h1 className="text-5xl font-mono p-4">Your cart is empty!!</h1>
        <Link to="/shop">
          <button className="h-10 w-[110%]  border boder-1 border-black  text-lg rounded-md hover:bg-black hover:text-white">
         <ArrowBackIcon/>  Countine shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartIsEmpty;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { SnackBar } from "../utils.js/SnackBar";
const ProductCard = ({ productName, price, url, bgcolor, detail }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickSnackbar = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    navigate("/productDetails", {
      state: {
        productName,
        price,
        url,
        bgcolor,
        detail,
      },
    });
  };
  return (
    <>
      <SnackBar open={open} onClose={handleClose} />
      <div
        className="p-1 m-2 h-[60%] w-[20vw] flex flex-col justify-around items-center  rounded-lg"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="h-[70%] w-full center">
          <img
            src={url}
            className="h-[25vh] hover:scale-105"
            onClick={handleClick}
          />
        </div>
        <div className="h-[30%] w-full flex flex-col justify-center items-center font-semibold">
          <div className="p-3 relative font-semibold">
            <p>{productName}</p>
          </div>
          <div className=" w-[90%] flex flex-row-reverse justify-between items-center">
            <IconButton
              sx={{ color: "black" }}
              aria-label="add to shopping cart"
              size="large"
              onClick={handleClickSnackbar}
            >
              <AddShoppingCartIcon />
            </IconButton>
            <p>
              {price}
              <CurrencyRupeeIcon fontSize="small" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;

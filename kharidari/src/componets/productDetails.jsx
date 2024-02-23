import * as React from "react";
import "../index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation } from "react-router-dom";
import { SnackBar } from "../utils.js/SnackBar";
import Rating from "@mui/material/Rating";
const ProductDetails = () => {
  const location = useLocation();
  const { productName, price, url, bgcolor, detail, rating } =
    location.state || {};

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <SnackBar open={open} onClose={handleClose} />
      <div className="h-[80vh] w-[100%] center">
        <div className="h-[90%] w-[60%] center ">
          <div
            className="w-[50%] h-[80%] center rounded-l-md border border-1 border-zinc-200"
            style={{ backgroundColor: bgcolor }}
          >
            {/* product image */}
            <img src={url} alt={productName} className="h-[60vh] w-auto p-6" />
          </div>
          <div className="w-[50%] h-[80%] p-6 font-sans bg-[#f9f9f7] rounded-r-md flex flex-col items-start justify-center">
            {/* product details  */}
            <p className="p-1 font-medium text-xl">{productName}</p>
            <p className="p-1 line-clamp-4">{detail}</p>
            <div className="p-1 mt-2 w-[80%] flex justify-between items-center font-semibold ">
              <p>
                Price: <CurrencyRupeeIcon fontSize="extra-small" />
                {price}
              </p>
              <IconButton onClick={handleClick}>
                <AddShoppingCartIcon
                  fontSize="medium"
                  sx={{ color: "black" }}
                />
              </IconButton>
            </div>
            <div className="flex items-center justify-center">
              <p className="p-1 items-center ">Reviews :</p>
              <Rating
                value={rating}
                sx={{ fontSize: "large", marginTop: "1" }}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

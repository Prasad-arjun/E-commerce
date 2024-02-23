import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Paper from "@mui/material/Paper";
import { SnackBar } from "../utils.js/SnackBar";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/feature/cart/cartSlice";
const ProductCard = ({
  productName,
  price,
  url,
  detail,
  rating,
  productId,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        detail,
        rating,
        productId,
      },
    });
  };
  const setCartData = () => {
    const data = {
      productId: productId,
      productData: {
        productName: productName,
        price: price,
        url: url,
        detail: detail,
        rating: rating,
      },
    };
    dispatch(addToCart(data));
    handleClickSnackbar();
  };
  return (
    <>
      <SnackBar open={open} onClose={handleClose} />
      <div
        className="p-1 m-2 h-[60%] w-[25vw] flex flex-col flex-wrap justify-around items-center rounded-lg "
        style={{ backgroundColor: "" }}
      >
        <Paper elevation={3}>
          <div className="max-h-[70%] min-h-[35vh]  w-full min-w-[25vw] center border border-1 border-gray-500">
            <img
              src={url}
              className="h-[25vh] hover:scale-105"
              onClick={handleClick}
            />
          </div>
          <div className="h-[30%] w-full flex flex-col justify-center items-center font-semibold border border-l-1 border-t-0 border-gray-500">
            <div className="p-3 w-full relative text-center font-semibold">
              <p className="line-clamp-1">{productName}</p>
            </div>
            <div className=" w-[80%] flex flex-row-reverse justify-between items-center">
              <IconButton
                sx={{ color: "black" }}
                aria-label="add to shopping cart"
                size="large"
                onClick={setCartData}
              >
                <AddShoppingCartIcon />
              </IconButton>
              <p>
                <CurrencyRupeeIcon fontSize="small" />
                {price}
              </p>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};
export default ProductCard;

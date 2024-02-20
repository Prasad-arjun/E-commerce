import "../index.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const ProductCard = ({ productName, price,url,bgcolor}) => {
  return (
    <>
      <div className="p-1 h-[60%] w-[20vw] flex flex-col justify-around items-center bg-${bgcolor} rounded-lg" style={{ backgroundColor: bgcolor }}>
        <div className="h-[70%] w-full center">
          <img src={url} className="h-[25vh]" />
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

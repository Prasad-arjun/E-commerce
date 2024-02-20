import "../index.css";
import iphone from "../assets/iphone.png";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const SubProductList = ({ productName, price }) => {
  return (
    <>
      <div className=" h-[30%] w-[20%] flex flex-col justify-around items-center bg-[#7acbcfe0] rounded-lg">
        <div className="h-[70%] w-full center">
          <img src={iphone} className="h-[90%]" />
        </div>
        <div className="h-[32%]  w-full flex flex-col justify-center items-center font-semibold">
          <p className="relative text-sm right-2  font-semibold">
            Iphone 15 128 GB oncean blue
          </p>
          <div className=" w-[90%] text-sm  flex flex-row-reverse justify-between items-center">
            <IconButton
              sx={{ color: "black", fontSize: "1rem" }}
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
            <p>
              72,990
              <CurrencyRupeeIcon sx={{ fontSize: "1rem" }} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubProductList;

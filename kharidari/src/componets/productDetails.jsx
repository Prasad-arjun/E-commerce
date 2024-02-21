import "../index.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useLocation } from "react-router-dom";
const ProductDetails = () => {
  const location = useLocation();
  const { productName, price, url, bgcolor, detail } = location.state || {};

  return (
    <>
      <div className="h-[80vh] w-[100%] center">
        <div className="h-[90%] w-[60%] center">
          <div
            className="w-[50%] h-[80%] center rounded-l-md"
            style={{ backgroundColor: bgcolor }}
          >
            {/* product image */}
            <img src={url} alt={productName} className="h-[60vh] w-auto p-6" />
          </div>
          <div className="w-[50%] h-[80%] p-6 font-sans bg-[#f9f9f7] rounded-r-md flex flex-col items-start justify-center">
            {/* product details  */}
            <p className="p-1 font-medium text-xl">{productName}</p>
            <p className="p-1 ">{detail}</p>
            <p className="p-1 font-semibold ">
              Price: <CurrencyRupeeIcon fontSize="extra-small" />
              {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

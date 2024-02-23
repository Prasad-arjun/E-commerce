import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItemCount,
  decrementItemCount,
} from "../app/feature/cart/cartSlice";
import { OrderSummary } from "./orderSummary";

function CartItemsShowCase() {
  const cartValue = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  let total = 0; 
  let totalItemCount=0;
  const IncrementnoOfProduct = (productId) => {
    dispatch(incrementItemCount({ productId }));
  };
  const DecrementnoOfProduct = (productId) => {
    dispatch(decrementItemCount({ productId }));
  };
  console.log(cartValue);
  return (
    <div className="h-auto w-[80%]  mt-5  flex justify-evenly">
      <div className="h-auto w-[60%] relative right-[15vw]">
        <div className="h-[10vh] w-[100%] flex items-center justify-start p-4 bg-[#f5f5f7] text-left border border-1 border-black rounded-t-md">
          <p className="text-2xl">Item list</p>
        </div>
        {Object.entries(cartValue).map(([productId, value]) => (
          (total += value.price * value.count),
          (totalItemCount+=value.count),
          <div
            className="center min-h-[20vh] h-auto border border-1 border-black border-t-0 rounded-b-md p-4"
            key={productId}
          >
            <div className="w-[70%] flex justify-between items-center ">
              <img src={value.url} alt="product image" className="w-[20%]" />
              <p className="w-[75%] p-2">{value.productName}</p>
            </div>
            <div className="w-[30%] h-auto flex flex-col items-center justify-between">
              <div className="flex items-center justify-evenly w-[100%]">
                <button onClick={() => DecrementnoOfProduct(productId)}>
                  <RemoveIcon
                    fontSize="medium"
                    className="hover:cursor-pointer"
                  />
                </button>
                <p>{value.count}</p>
                <button onClick={() => IncrementnoOfProduct(productId)}>
                  <AddIcon fontSize="medium" className="hover:cursor-pointer" />
                </button>
              </div>
              <p className="mt-4">
                {value.count} x {value.price} = <CurrencyRupeeIcon fontSize="extra-small" />
                {value.price * value.count}
              </p>
            </div>
          </div>
        ))}
      </div>
       <div className="w-[40%] h-auto fixed  right-0 center">
        <OrderSummary total={total} totalItemCount={totalItemCount}/>
      </div>
    </div>
   
 
  );
}

export default CartItemsShowCase;

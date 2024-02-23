import "../index.css";
import { useSelector } from "react-redux";
import CartIsEmpty from "../componets/cartIsEmpty";
import CartItemsShowCase from "../componets/cartItemsShowCase";

const Cart = () => {
  const cartValue = useSelector((state) => state.cart.value);
  const isEmptyCart = (obj) => {
    return Object.keys(obj).length === 0;
  };
  return (
    <>
      {isEmptyCart(cartValue) ? (
        <div className="w-[100%] h-auto  center">
          <CartIsEmpty />
        </div>
      ) : (
        <div className="w-[100vw] h-auto  center">
          <CartItemsShowCase />
        </div>
      )}
    </>
  );
};

export default Cart;

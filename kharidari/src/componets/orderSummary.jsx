import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export const OrderSummary = ({ total, totalItemCount }) => {
  console.log("Rs", total);
  console.log("totalItemCount", totalItemCount);
  return (
    <>
      <div className=" h-[35vh]  min-w-[80%]    border border-1 border-black border-t-0 rounded-md">
        <div className="h-[10vh] w-[100%] flex items-center justify-start p-4 bg-[#f5f5f7] text-left border border-1 border-y-black">
          <p className="text-2xl">Order summary</p>
        </div>
        <div className="font-medium text-md ">
          <div className=" flex items-center justify-between p-3">
            <p>Products</p>
            <p>{totalItemCount}</p>
          </div>
          <div className=" flex items-center justify-between p-3">
            <p>Total</p>
            <p>
              <CurrencyRupeeIcon fontSize="small" />{total}
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center border border-1 border-t-black">
          <button  className="mt-2 border border-1 border-black w-[30%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white">Check out</button>
        </div>
      </div>
    </>
  );
};

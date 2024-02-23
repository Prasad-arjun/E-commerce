import "../index.css";
import { useState } from "react";
import HeroImage1 from "../assets/HeroImage1.jpg";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ProductCard from "../componets/productCard";
import { useGetProductQuery } from "../app/feature/apiSlice/apiSlice";
import { Loading } from "../utils.js/loading";
import Footer from "./footer";

function Home() {
  const [category, setCategory] = useState("");
  const handleCategory = (category) => {
    setCategory(category);
  };
  const { data,isLoading, isSuccess } = useGetProductQuery(category);

  return (
    <>
      <div className="h-[85.5vh] w-[100vw] center bg-[#f9f9f9]">
        <div className="w-[90%] h-[95%] bg-[#f5f5f7] shadow-sm rounded-lg flex items-center justify-between">
          <div className="w-[50%]">
            {/* left div*/}
            <h1 className="text-5xl font-mono p-6 m-2">
              <span className="font-bold  boujee-text">Curated </span>
              Collections, Unbeatable
              <span className="font-bold boujee-text"> Deals</span>
            </h1>
            <p className="p-6 m-2 relative bottom-6">
              Discover curated collections, enjoy unbeatable deals. Shop now for
              quality and value in one place!
            </p>
            <Link to="/shop">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "0.8rem",
                  left: "2rem",
                  bottom: "1rem",
                  ":hover": {
                    bgcolor: "#101010e8", // theme.palette.primary.main
                    color: "white",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
                className="p-6 m-2"
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="w-[50%]  flex items-end justify-end bg-[#f5f5f7]">
            {/* right div*/}
            <img src={HeroImage1} className="h-[80vh]" />
          </div>
        </div>
      </div>
      <div className="h-auto w-[100%] bg-[#f9f9f9]  center">
        <div className="w-[95%] h-[90%] center flex-col  p-12 m-2">
          <h1 className=" text-3xl font-mono ">Featured Products</h1>
          <h1 className="h-[0.1vh] w-[100%] mb-4 mt-2 bg-black"></h1>
          <div className=" w-[50%] h-[40%] m-8 flex items-center justify-between">
            <button
              className="border border-1 border-black w-[15%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white"
              onClick={() => handleCategory("/")}
            >
              All
            </button>
            <button
              className="border border-1 border-black w-[15%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white"
              onClick={() => handleCategory("/category/electronics")}
            >
              Electronics
            </button>
            <button
              className="border border-1 border-black w-[15%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white"
              onClick={() => handleCategory("/category/men's clothing")}
            >
              Men's
            </button>
            <button
              className="border border-1 border-black w-[15%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white"
              onClick={() => handleCategory("/category/women's clothing")}
            >
              Women's
            </button>
            <button
              className="border border-1 border-black w-[15%] h-9 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75 hover:scale-105 focus:bg-black focus:text-white"
              onClick={() => handleCategory("/category/jewelery")}
            >
              Jewelery
            </button>
          </div>
          <div className="flex flex-wrap justify-evenly items-start mt-10 ">
            {isLoading ? (
              <div className=" w-[100%] h-[100%] center">
                <Loading />{" "}
              </div>
            ) : (
              isSuccess &&
              Object.values(data).map((item, index) => (
                <ProductCard
                  key={index}
                  productName={item.title}
                  price={Math.round(item.price * 82.88)}
                  url={item.image}
                  detail={item.description}
                  rating={item.rating.rate}
                  productId={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
}
export default Home;

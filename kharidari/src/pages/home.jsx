import "../index.css";
import HeroImage1 from "../assets/HeroImage1.jpg"
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ProductCard from "../componets/productCard";
const product = {
  product1: {
    name: "iphone 15 pro max blue 12GB",
    price: "72380",
    url:"../src/assets/iphone.png",
    bgcolor:"#d3fbd9"
  },
  product2: {
    name: "Apple watch with leather strap",
    price: "42380",
    url:"../src/assets/watch.png",
    bgcolor:"#ffe4bd"
  },
  product3: {
    name: "Mackbook pro 16GB RAM silver",
    price: "172380",
    url:"../src/assets/laptop.png",
    bgcolor:"#d9abfd"
  },
  product4: {
    name: "Sony Bravia ",
    price: "72380",
    url:"../src/assets/tv.png",
    bgcolor:"#fdf0ab"
  },
};

function Home() {
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
      <div className="h-[100vh] bg-[#f9f9f9]  center">
        <div className="w-[90%] h-[95%] p-6 m-2">
          <h1 className="pb-6 mb-2 text-3xl font-mono">Featured Products</h1>
          <div className="flex justify-between items-start mb-3">
          {Object.values(product).map((item, index) => (
        <ProductCard
          key={index}
          productName={item.name}
          price={item.price}
          url={item.url} 
          bgcolor={item.bgcolor}
        />
      ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

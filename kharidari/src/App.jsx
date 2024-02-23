import "./index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Feature from "./pages/feature";
import Account from "./pages/account";
import Cart from "./pages/cart";
import Recommnedation from "./pages/recommended";
import ProductDetails from "./componets/productDetails";
import { useSelector } from "react-redux";
function App() {
  const cartValue = useSelector((state) => state.cart.value);
  const totalItemCount = Object.values(cartValue).reduce(
    (acc, item) => acc + item.count,
    0
  );
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.purple}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <div className="h-24 w-[100%] center bg-[#f9f9f9]">
        <nav className="h-[90%] w-[95%] centerEvenly ">
          <div className="h-auto w-[50%] flex justify-around items-center ">
            {/*left nav content*/}
            <Link to="/">
              <header className="text-3xl font-semibold font-mono">
                Kharidari
              </header>
            </Link>

            <Link to="/" className="navText">
              Home
            </Link>
            <Link to="/shop" className="navText">
              Shop
            </Link>
            <Link to="/featured" className="navText disabled">
              Featured
            </Link>
            <Link to="/recommended" className="navText">
              Recommended
            </Link>
          </div>
          <div className="h-auto w-[50%] flex justify-end items-center">
            {/* right nav content */}
            <div className="flex items-center justify-around w-[75%]">
              <input
                type="search"
                placeholder="Search product..."
                className="h-9 w-72 p-2 focus:outline-none border-[#7c7c7c] border-[0.1rem] text-sm icon"
              />
              <Link to="/cart" className="">
                <StyledBadge
                  badgeContent={totalItemCount}
                  color="secondary"
                 
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              </Link>
              <Link to="/account">
                <Avatar sx={{ bgcolor: deepOrange[600] }}>AP</Avatar>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/featured" element={<Feature />} />
        <Route path="/recommended" element={<Recommnedation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

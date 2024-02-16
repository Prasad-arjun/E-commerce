import "../index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
function Nav() {
  return (
    <>
      <div className="h-24 w-[100%] center bg-[#f9f9f9]">
        <nav className="h-[90%] w-[95%] centerEvenly ">
          <div className="h-auto w-[50%] flex justify-around items-center ">
            {/*left nav content*/}
            <Link to="/home"> <header className="text-3xl font-semibold font-mono">
              Kharidari
            </header></Link>
           
            <Link to="/home" className="navText">
              Home
            </Link>
            <Link to="/shop" className="navText">
              Shop
            </Link>
            <Link to="/featured" className="navText">
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
                <ShoppingCartIcon />
              </Link>
              <Link to="/account">
                {" "}
                <Avatar sx={{ bgcolor: deepOrange[600] }}>AP</Avatar>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
    </>
  );
}

export default Nav;

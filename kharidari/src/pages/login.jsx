import "../index.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { profileVisibility } from "../app/feature/auth/authSlice";
const Login = () => {
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");
  const dispatch = useDispatch();
  const loginData={auth:true ,email:lemail}
  const handLoginSubmit = (event) => {
    event.preventDefault();
    if (lpassword.length > 6 && /[a-zA-Z]/.test(lpassword)) {
      console.log("valid password");
    } else {
      console.log("invalid password");
    }
    if (lemail === "test@gmail.com" && lpassword === "test@123") {
      dispatch(profileVisibility(loginData));
    }
  };

  return (
    <>
      <div className="h-[90vh] w-full center flex-col">
        <p className="text-3xl">Login</p>
        <h1 className="h-[0.1vh] w-[90%] mb-4 mt-2 bg-zinc-600"></h1>
        <div className="h-[80%] w-[30%] ">
          <form
            className="h-full w-full flex flex-col items-center justify-start"
            onSubmit={handLoginSubmit}
          >
            <div className="flex flex-col w-full justify-between pl-4 mb-2 ">
              <label className="text-lg ">Enter email</label>
              <input
                required={true}
                onChange={(e) => setLEmail(e.target.value)}
                type="email"
                placeholder="samaltmon21@gmail.com"
                className="h-8 w-[90%] p-2  border border-1 border-zinc-500  focus:border-blue-500 focus:border-2 focus:outline-none rounded placeholder:text-lg placeholder:p-1"
              />
            </div>
            <div className="flex flex-col w-full justify-between pl-4 mt-4">
              <label className="text-lg ">Enter password</label>
              <input
                required={true}
                onChange={(e) => setLPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="h-8 w-[90%] p-2  border border-1 border-zinc-500  focus:border-blue-500 focus:border-2 focus:outline-none rounded placeholder:text-lg placeholder:p-1"
              />
            </div>
            <p className=" relative right-[5.8rem] p-2">
              New to Kharidari ?{" "}
              <Link to="/register" className="underline text-blue-500">
                Register
              </Link>
            </p>
            <button
              type="submit"
              className="border border-1 border-black w-[35%] h-9 mt-5 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75  focus:bg-black focus:text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

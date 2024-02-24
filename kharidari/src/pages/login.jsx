import "../index.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="h-[90vh] w-full center flex-col">
        <p className="text-3xl">Login</p>
        <h1 className="h-[0.1vh] w-[90%] mb-4 mt-2 bg-zinc-600"></h1>
        <div className="h-[80%] w-[30%] flex flex-col items-center justify-start ">
          <div className="flex flex-col w-full justify-between pl-4 mb-2 ">
            <label className="text-lg ">Enter email</label>
            <input
              type="email"
              placeholder="samaltmon21@gmail.com"
              className="h-8 w-[90%]  border border-1 border-zinc-500  focus:border-blue-500 focus:border-2 focus:outline-none rounded placeholder:text-lg placeholder:p-1"
            />
          </div>
          <div className="flex flex-col w-full justify-between pl-4 mt-4">
            <label className="text-lg ">Enter password</label>
            <input
              type="password"
              placeholder="password"
              className="h-8 w-[90%]  border border-1 border-zinc-500  focus:border-blue-500 focus:border-2 focus:outline-none rounded placeholder:text-lg placeholder:p-1"
            />
          </div>
          <p className=" relative right-[5.8rem] p-2">
            New to Kharidari ?
            <Link to="/register" className="underline text-blue-500">
              Register
            </Link>
          </p>
          <button className="border border-1 border-black w-[35%] h-9 mt-5 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75  focus:bg-black focus:text-white">
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

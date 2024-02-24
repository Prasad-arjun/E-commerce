import "../index.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="h-[90vh] w-full center flex-col">
        <p className="text-3xl">Register</p>
        <h1 className="h-[0.1vh] w-[90%] mb-4 mt-2 bg-zinc-600"></h1>
        <div className="h-[80%] w-[30%] flex flex-col items-center justify-start ">
          <div className="flex flex-col w-[100%]  justify-between pl-4 pt-4 mb-3 ">
            <label className="text-lg mb-1">Enter your name</label>
            <input
              type="text"
              placeholder="Full name"
              className="h-8 w-[90%] mb-1 border border-1 border-zinc-500 rounded focus:border-blue-500 focus:border-2 focus:outline-none ... placeholder:text-lg placeholder:p-1"
            />
          </div>
          <div className="flex flex-col w-full justify-between pl-4 mb-2 ">
            <label className="text-lg ">Enter email</label>
            <input
              type="email"
              placeholder="samaltmon21@gmail.com"
              className="h-8 w-[90%]  border border-1 border-zinc-500 rounded  focus:border-blue-500 focus:border-2 focus:outline-none placeholder:text-lg placeholder:p-1"
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
          <p className=" relative right-[4.5rem] p-2">
            Already have an account ?
            <Link to="/login" className="underline text-blue-500">
              {" "}
              Login
            </Link>{" "}
          </p>
          <button className="border border-1 border-black w-[35%] h-9 mt-5 rounded-md hover:bg-black hover:text-white ease-in-out transition  duration-75  focus:bg-black focus:text-white">
             Register
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

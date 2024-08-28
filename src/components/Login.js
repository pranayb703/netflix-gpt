import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/4fa8749c-7f54-489a-9b60-aa399ccc96ca/US-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0a3be455-b400-40a6-b0a8-1557bb4503dd_medium.jpg"
          alt="Netlix background"
        ></img>
      </div>
      <form className="text-white w-3/12 absolute p-12 bg-black m-auto my-36 right-0 left-0 bg-opacity-80">
        <h1 className="text-2xl font-bold py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <button className="p-4 my-6 w-full bg-red-600 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-sm cursor-pointer hover:underline"
        >
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already a user ? Sign In now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

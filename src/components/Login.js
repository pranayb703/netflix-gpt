import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  //This is form submit function
  const handleButtonClick = () => {
    const errorMessage = checkValidata(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;
    //Here you can call your API to login
    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/12727041?s=96&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log("🚀 ~ .then ~ user:", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user:", user);
          //navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };
  //This is to toggle whether sign in or sign up form
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
      <form
        className="text-white w-3/12 absolute p-12 bg-black m-auto my-36 right-0 left-0 bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl font-bold py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-500"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-3 my-4 w-full bg-gray-500"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-500"
        ></input>
        <p className="font-bold text-red-500 p-2 ">{errorMessage}</p>
        <button
          className="p-3 my-6 w-full bg-red-600 text-white"
          onClick={handleButtonClick}
        >
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

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { LOGOTXT, NETFLIX_LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //console.log(JSON.stringify(user));

  //onAuthStateChange : Firebase API
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        //("🚀 ~ onAuthStateChanged ~ uid:", uid);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        // User is signed out
        navigate("/");
      }

      //Unsubscribe when component unmounts, unsubcribe is the function returned by onAuthStatusChanged API from firebase
      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTClick = () => {
    dispatch(toggleGPTSearchView());
    //navigate("/gpt");
  };
  //"https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZUJP6YZ91dji0qHO-1LebMprKqC8U6_jrdR1fHnzNfGAlDUMJ7QYEwavmNxBepU4zTpCwDE2elKm-RLQWjF2QNmQ6PJa9M.png?r=54a"
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between content-between">
      <img className="w-44" src={NETFLIX_LOGO} alt={LOGOTXT}></img>
      {user && (
        <div className="flex p-2 ">
          <button
            className="px-2 bg-purple-700 rounded-xl mx-4 text-white"
            onClick={handleGPTClick}
          >
            GPT Search
          </button>
          <img className="p-2 h-16" src={user?.photoURL} alt="User-icon"></img>
          <button
            className=" text-white p-2 rounded-lg font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            [ Sign out ]
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

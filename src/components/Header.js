import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(JSON.stringify(user));

  //onAuthStateChange : Firebase API
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        console.log("🚀 ~ onAuthStateChanged ~ uid:", uid);
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
        console.log("onAuthStateChanged");
        dispatch(removeUser());
        // User is signed out
        navigate("/");
      }
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
  //"https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZUJP6YZ91dji0qHO-1LebMprKqC8U6_jrdR1fHnzNfGAlDUMJ7QYEwavmNxBepU4zTpCwDE2elKm-RLQWjF2QNmQ6PJa9M.png?r=54a"
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex  justify-between content-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      ></img>
      {user && (
        <div className="flex p-2 ">
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

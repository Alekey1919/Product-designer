import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../../Firebase";

const useNavbar = () => {
  let location = useLocation();

  const [user, setUser] = useState();

  // AUTH

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const handleAuthentication = () => {
    if (user && window.confirm("Are you sure you want to log out?")) {
      auth.signOut();
    }
  };

  return { user, location, handleAuthentication };
};

export default useNavbar;

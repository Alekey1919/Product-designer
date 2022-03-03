import { useState, useEffect } from "react";
import { auth } from "../../Firebase";

const useDesignbar = () => {
  const [user, setUser] = useState();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 999);
  const [isColorOpened, setIsColorOpened] = useState(false);
  const [isSaveOpened, setIsSaveOpened] = useState(false);
  const [isOverlayOpened, setIsOverlayOpened] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // Sidebar functions

  const openSave = () => {
    setIsSaveOpened((curr) => !curr);
  };

  const openColor = () => {
    setIsColorOpened((curr) => !curr);
  };

  const openOverlay = () => {
    if (user) {
      setIsOverlayOpened((curr) => !curr);
    } else {
      alert("You must be logged in");
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 999);
  });

  return {
    isMobile,
    isColorOpened,
    isSaveOpened,
    isOverlayOpened,
    openColor,
    openSave,
    openOverlay,
  };
};

export default useDesignbar;

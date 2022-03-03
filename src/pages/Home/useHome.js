import { useState, useEffect } from "react";

const useHome = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [overPath, setOverPath] = useState("");

  const openOverlay = (path) => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
    setOverPath(path);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    document.body.style.overflowY = "auto";
  };

  return { isOpen, overPath, openOverlay, closeOverlay };
};

export default useHome;

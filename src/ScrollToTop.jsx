import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // For route change (smooth slide)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // For refresh (force top + smooth)
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);

  return null;
};

export default ScrollToTop;
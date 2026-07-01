import { useEffect } from "react";

const useSlideUpOnScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // remove this line if you want animation only once
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useSlideUpOnScroll;
import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsScrolled(currentScroll > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

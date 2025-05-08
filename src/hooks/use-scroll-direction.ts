import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Determine scroll direction
      const direction = scrollY > lastScrollY ? "down" : "up";

      // Only update direction if there's a significant change
      if (
        scrollY > 10 &&
        Math.abs(scrollY - lastScrollY) > 5 &&
        direction !== scrollDirection
      ) {
        setScrollDirection(direction);
      }

      setLastScrollY(scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollDirection);

    // Clean up
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
}

"use client";

import { useEffect, useRef, useState } from "react";

export function useCarouselScroll<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function update() {
      if (!track) return;
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanScrollPrev(scrollLeft > 4);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);
    }

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scroll(direction: "prev" | "next") {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const amount = track.clientWidth * 0.8 * (direction === "next" ? 1 : -1);
    track.scrollBy({ left: amount, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return { trackRef, canScrollPrev, canScrollNext, scroll };
}

"use client";

import { useEffect } from "react";
import { startCursorPet } from "@/config/cursor-pet";

export default function CursorPet() {
  useEffect(() => {
    startCursorPet();

    return () => {
      if (typeof window === "undefined") return;

      if (window.catExtensionActive) {
        const existingCat = document.querySelector(".cat-container");
        if (existingCat) existingCat.remove();
        window.catExtensionActive = false;
      }

      if (window.catMouseMoveHandler) {
        window.removeEventListener("mousemove", window.catMouseMoveHandler);
      }

      if (window.catAnimFrame) {
        cancelAnimationFrame(window.catAnimFrame);
      }
    };
  }, []);

  return null;
}


"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Select all reveal elements
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    // Create an IntersectionObserver to add the 'visible' class when elements enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all reveal elements
    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useBarReveal() {
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".bar-fill").forEach((el) => {
      (el as HTMLElement).style.animationPlayState = "paused";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  texts:        readonly string[];
  typeSpeed?:   number;
  deleteSpeed?: number;
  pauseMs?:     number;
}

export default function TypeWriter({
  texts,
  typeSpeed   = 120,
  deleteSpeed = 70,
  pauseMs     = 2800,
}: Props) {
  const [display,    setDisplay]  = useState("");
  const [isDeleting, setDeleting] = useState(false);
  const indexRef = useRef(0);
  const charRef  = useRef(0);

  useEffect(() => {
    const current = texts[indexRef.current];

    const tick = () => {
      if (!isDeleting) {
        if (charRef.current < current.length) {
          setDisplay(current.slice(0, ++charRef.current));
          setTimeout(tick, typeSpeed);
        } else {
          setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        if (charRef.current > 0) {
          setDisplay(current.slice(0, --charRef.current));
          setTimeout(tick, deleteSpeed);
        } else {
          indexRef.current = (indexRef.current + 1) % texts.length;
          setDeleting(false);
        }
      }
    };

    const t = setTimeout(tick, typeSpeed);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  return (
    <span>
      {display}
      <span className="cursor" aria-hidden="true">▮</span>
    </span>
  );
}
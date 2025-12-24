
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  cardWidth = 250,
  cardHeight = 250,
}: {
  items: {
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      if (speed === "slow") duration = "80s";
      
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{
        height: `${cardHeight}px`
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="relative rounded-2xl flex-shrink-0 overflow-hidden flex items-center justify-center"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`
            }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={item.image}
                alt={`Student ${idx + 1}`}
                width={cardWidth - 20}
                height={cardHeight - 20}
                className="object-cover rounded-lg"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
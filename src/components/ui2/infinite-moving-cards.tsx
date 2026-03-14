


"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ProfileCard } from "../professoionalComponents/ProfileCard";

interface ProfileData {
  name: string;
  profilePicture: string;
  company: string;
  jobTitle: string;
  linkedinUrl: string;
  details: {
    icon: string;
    text: string;
    badge?: string;
  }[];
  careerProgression: {
    before: {
      companyLogo: string;
      companyName: string;
      designation: string;
    };
    after: {
      companyLogo: string;
      companyName: string;
      designation: string;
    };
  };
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  cardWidth = 350,
  cardHeight = 350,
}: {
  items: ProfileData[];
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
      if (direction === "right") {
        containerRef.current.style.setProperty("--scroll-direction", "reverse");
      } else {
        containerRef.current.style.setProperty("--scroll-direction", "normal");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "40s";
          break;
        case "normal":
          duration = "60s";
          break;
        case "slow":
          duration = "120s";
          break;
        default:
          duration = "80s";
      }
      containerRef.current.style.setProperty("--scroll-duration", duration);
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
          start && "infinite-scroll-animation",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDirection: 'var(--scroll-direction)',
          animationDuration: 'var(--scroll-duration)'
        }}
      >
        {items.map((profile, idx) => (
          <li
            key={idx}
            className="relative flex-shrink-0"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`
            }}
          >
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LoadingPage.css";

const LoadingPage = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const satelliteRef = useRef(null);
  const orbitRef = useRef(null);
  const loadingTextRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);
  const flashRef = useRef(null);
  const zoomRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const satellite = satelliteRef.current;
    const orbit = orbitRef.current;
    const loadingText = loadingTextRef.current;
    const progress = progressRef.current;
    const percent = percentRef.current;
    const flash = flashRef.current;
    const zoom = zoomRef.current;

    if (!loader || !satellite) return;

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      /*
       * ----------------------------------------
       * INITIAL STATE
       * ----------------------------------------
       */

      gsap.set(satellite, {
        opacity: 0,
        scale: 0.15,
        rotation: -12,
        x: 0,
        y: 0,
      });

      gsap.set(orbit, {
        opacity: 0,
        scale: 0.4,
        rotation: -20,
      });

      gsap.set(loadingText, {
        opacity: 0,
        y: 20,
      });

      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(percent, {
        opacity: 0,
        y: 15,
      });

      gsap.set(zoom, {
        scale: 0,
        opacity: 0,
      });

      /*
       * ----------------------------------------
       * MAIN LOADER TIMELINE
       * ----------------------------------------
       */

      const tl = gsap.timeline();

      // Satellite appears
      tl.to(satellite, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Orbit appears
      tl.to(
        orbit,
        {
          opacity: 0.5,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Small floating movement
      tl.to(satellite, {
        y: -12,
        duration: 0.7,
        ease: "sine.inOut",
      });

      tl.to(satellite, {
        y: 0,
        duration: 0.7,
        ease: "sine.inOut",
      });

      // Loading text
      tl.to(
        loadingText,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Percentage appears
      tl.to(
        percent,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      /*
       * ----------------------------------------
       * PROGRESS
       * ----------------------------------------
       */

      tl.to(
        progress,
        {
          scaleX: 1,
          duration: 2.2,
          ease: "power2.inOut",
        },
        "-=0.1"
      );

      // Counter from 0 -> 100
      tl.to(
        counter,
        {
          value: 100,
          duration: 2.2,
          ease: "power2.inOut",

          onUpdate: () => {
            if (percentRef.current) {
              percentRef.current.textContent = `${Math.floor(
                counter.value
              )}%`;
            }
          },
        },
        "<"
      );

      /*
       * ----------------------------------------
       * SATELLITE ZOOM
       * ----------------------------------------
       */

      tl.to(
        orbit,
        {
          scale: 1.8,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.1"
      );

      // Satellite starts moving toward viewer
      tl.to(
        satellite,
        {
          scale: 18,
          rotation: 8,
          opacity: 1,
          duration: 1.35,
          ease: "power4.in",
        },
        "<"
      );

      /*
       * ----------------------------------------
       * ZOOM TRANSITION
       * ----------------------------------------
       */

      tl.to(
        zoom,
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power4.in",
        },
        "-=0.8"
      );

      // Flash
      tl.to(
        flash,
        {
          opacity: 1,
          duration: 0.12,
          ease: "power1.out",
        },
        "-=0.25"
      );

      tl.to(flash, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      /*
       * ----------------------------------------
       * REMOVE LOADER
       * ----------------------------------------
       */

      tl.to(loader, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="portfolio-loader">
      {/* Paper texture */}
      <div className="loader-paper" />

      {/* Small top label */}
      <div className="loader-top">
        <span>SACHIN YADAV</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      {/* Center */}
      <div className="loader-center">
        <div className="satellite-stage">
          {/* Orbit */}
          <svg
            ref={orbitRef}
            className="satellite-orbit"
            viewBox="0 0 500 500"
            aria-hidden="true"
          >
            <ellipse
              cx="250"
              cy="250"
              rx="190"
              ry="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="80"
              ry="190"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          {/* Satellite */}
          <svg
            ref={satelliteRef}
            className="satellite"
            viewBox="0 0 300 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Loading"
          >
            {/* Left solar panel */}
            <rect
              x="12"
              y="76"
              width="72"
              height="58"
              stroke="currentColor"
              strokeWidth="2"
            />

            <line
              x1="36"
              y1="76"
              x2="36"
              y2="134"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="60"
              y1="76"
              x2="60"
              y2="134"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="12"
              y1="105"
              x2="84"
              y2="105"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Right solar panel */}
            <rect
              x="216"
              y="76"
              width="72"
              height="58"
              stroke="currentColor"
              strokeWidth="2"
            />

            <line
              x1="240"
              y1="76"
              x2="240"
              y2="134"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="264"
              y1="76"
              x2="264"
              y2="134"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="216"
              y1="105"
              x2="288"
              y2="105"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Main satellite body */}
            <rect
              x="84"
              y="48"
              width="132"
              height="116"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* Inner body */}
            <rect
              x="100"
              y="64"
              width="100"
              height="84"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Antenna */}
            <line
              x1="150"
              y1="48"
              x2="150"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="150"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* Bottom antenna */}
            <line
              x1="150"
              y1="164"
              x2="150"
              y2="190"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="150"
              cy="196"
              r="4"
              fill="currentColor"
            />

            {/* Satellite details */}
            <circle
              cx="120"
              cy="88"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <circle
              cx="180"
              cy="88"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <rect
              x="120"
              y="108"
              width="60"
              height="20"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Signal */}
            <path
              d="M102 28C113 18 126 13 140 12"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M198 28C187 18 174 13 160 12"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          {/* Satellite shadow */}
          <div className="satellite-shadow" />
        </div>

        {/* Loading information */}
        <div className="loader-info">
          <div ref={loadingTextRef} className="loading-title">
            INITIALIZING EXPERIENCE
            <span className="loading-dots">
              <i>.</i>
              <i>.</i>
              <i>.</i>
            </span>
          </div>

          <div className="loader-progress">
            <div ref={progressRef} className="loader-progress-fill" />
          </div>

          <div className="loader-percent">
            <span ref={percentRef}>0%</span>
            <span>WELCOME</span>
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="loader-bottom">
        <span>SOFTWARE ENGINEER</span>
        <span>FULL STACK / WEB / AI</span>
      </div>

      {/* Zoom circle */}
      <div ref={zoomRef} className="loader-zoom" />

      {/* White flash */}
      <div ref={flashRef} className="loader-flash" />
    </div>
  );
};

export default LoadingPage;
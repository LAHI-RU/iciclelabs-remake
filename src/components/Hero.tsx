// src/components/Hero.tsx
import { ArrowDownCircle } from "lucide-react";

// 1. Import your hero background image
import heroBgImage from "../assets/bg2.png"; // <-- This is correct

// 2. Define your gradient
// THIS IS THE ONLY CHANGE:
// We are using rgba() to add transparency (0.7 = 70%, 0.5 = 50%)
// This tints the image instead of hiding it.
const heroGradient =
  "linear-gradient(137.14deg, rgba(4, 24, 40, 0.7) 5.5%, rgba(87, 183, 235, 0.5) 93.88%)";

export default function Hero() {
  return (
    <header
      id="page-top"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      // 3. Apply the styles inline (This code is unchanged)
      style={{
        backgroundImage: `${heroGradient}, url(${heroBgImage})`,
      }}
    >
      {/* This scrim/overlay is no longer needed since the gradient is transparent
        We'll keep your bg-black/30 for a little extra contrast
      */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container (This code is unchanged) */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-4">
        <div className="max-w-3xl text-center text-white">
          {/* Main Heading (This code is unchanged) */}
          <h1
            className="
              mb-6 font-bold 
              text-3xl sm:text-5xl lg:text-7xl
            "
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Innovation Perfected by AI
          </h1>

          {/* Subheading (This code is unchanged) */}
          <p
            className="
              mb-10 font-light
              text-lg sm:text-xl lg:text-2xl
            "
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            Driving digital innovation through data-driven insights and
            cutting-edge technology.
          </p>

          {/* Scroll-down Link (This code is unchanged) */}
          <a
            href="#about"
            className="
              inline-flex flex-col items-center text-white
              opacity-70 transition-opacity hover:opacity-100
            "
          >
            <span className="mb-2">More About Us</span>
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </header>
  );
}

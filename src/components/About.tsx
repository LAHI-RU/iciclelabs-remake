// src/components/About.tsx

// 1. Import your about background image
import aboutBgImage from '../assets/bg3.png'; // <-- Adjust filename if needed

export default function About() {
  return (
    <section 
      id="about" 
      className="
        grid grid-cols-1 lg:grid-cols-2 
        min-h-screen text-white
      "
    >
      {/* Column 1: Text Content */}
      <div className="flex w-full items-center justify-center bg-brand-dark p-8 md:p-16">
        <div className="max-w-lg">
          <h2 className="mb-4 text-3xl font-bold text-brand-blue">
            Who We Are
          </h2>
          <h3 className="mb-6 text-2xl font-semibold">
            We are a team of visionaries, developers, and data scientists
          </h3>
          
          <div className="space-y-4 font-light leading-relaxed text-gray-300">
            <p>
              We thrive on transforming complex challenges into elegant, 
              data-driven solutions. Our expertise spans from bespoke AI 
              integrations to scalable enterprise software, all crafted 
              with precision and a passion for innovation.
            </p>
            <p>
              Our mission is to empower your business by unlocking the 
              full potential of your data, creating intelligent systems 
              that drive growth and efficiency.
            </p>
          </div>

          <a
            href="#service"
            className="
              mt-8 inline-block rounded-md bg-brand-blue 
              px-6 py-3 font-semibold text-white
              transition-transform hover:scale-105
            "
          >
            See Our Services
          </a>
        </div>
      </div>

      {/* Column 2: Image */}
      <div 
        className="
          w-full bg-cover 
          bg-center min-h-[400px] lg:min-h-screen
        "
        // 2. Apply the style inline
        style={{
          backgroundImage: `url(${aboutBgImage})`,
        }}
      />
    </section>
  );
}
// src/components/Services.tsx
import {
  ShieldCheck, // For "AI, Data and Security"
  Cloud, // For "Cloud Solutions"
  Cpu, // For "IoT and Edge"
  Code2, // For "Bespoke Software"
} from "lucide-react";

// Define our services as an array of objects
// This makes it super easy to add, remove, or change services later
const serviceData = [
  {
    Icon: ShieldCheck,
    title: "AI, Data and Security",
    description:
      "Advanced AI-driven security protocols and data encryption to protect your digital assets.",
  },
  {
    Icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable and robust cloud infrastructure, migration, and management services.",
  },
  {
    Icon: Cpu,
    title: "IoT and Edge",
    description:
      "Intelligent IoT solutions and edge computing for real-time data processing at the source.",
  },
  {
    Icon: Code2,
    title: "Bespoke Software",
    description:
      "Custom software development, web applications, and mobile apps tailored to your business.",
  },
];

export default function Services() {
  return (
    <section
      id="service"
      className="w-full bg-brand-dark text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We deliver cutting-edge solutions across the full spectrum of modern
            technology.
          </p>
        </div>

        {/* Service Grid
          - 1 column on mobile (default)
          - 2 columns on medium screens (md:)
          - 4 columns on large screens (lg:)
          This is the modern, responsive replacement for your Bootstrap columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* We map over our serviceData array to create the cards */}
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center text-center
                p-6 rounded-lg border border-gray-700
                bg-white/5  /* A slightly transparent white card background */
                transition-all duration-300
                hover:scale-[1.03] hover:bg-white/10 hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5 rounded-full p-4 
                  bg-brand-blue/10 text-brand-blue
                  transition-all duration-300
                  group-hover:scale-110 group-hover:bg-brand-blue/20
                "
              >
                {/* The "as" prop is a clean way to render a dynamic component */}
                <service.Icon size={40} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

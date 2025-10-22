// src/components/Clients.tsx

// 1. Import your client logos from the src/assets folder
import clientLogo1 from "../assets/client1.png";
import clientLogo2 from "../assets/client2.png";
import clientLogo3 from "../assets/client3.png";
import clientLogo4 from "../assets/client4.png";
// ... import more as needed

// 2. Define client data in an array
const clientData = [
  { src: clientLogo1, alt: "Client 1 Logo" },
  { src: clientLogo2, alt: "Client 2 Logo" },
  { src: clientLogo3, alt: "Client 3 Logo" },
  { src: clientLogo4, alt: "Client 4 Logo" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="
        w-full bg-brand-dark py-16 md:py-24
      " /* <-- CHANGED: bg-white to bg-brand-dark */
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="
            text-3xl md:text-4xl font-bold mb-4
            text-brand-blue
          "
          >
            {" "}
            {/* <-- CHANGED: text-brand-dark to text-brand-blue */}
            Trusted By Industry Leaders
          </h2>
          <p
            className="
            text-lg max-w-2xl mx-auto
            text-gray-400
          "
          >
            {" "}
            {/* <-- CHANGED: text-gray-600 to text-gray-400 */}
            We are proud to partner with innovative companies from around the
            globe.
          </p>
        </div>

        {/* Clients Logo Grid
          - The logo effect is now more pronounced on the dark background
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientData.map((client, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center p-6
                transition-transform duration-300
                hover:scale-110
              "
            >
              <img
                src={client.src}
                alt={client.alt}
                className="
                  max-h-16 w-auto 
                  object-contain
                  filter grayscale /* Default to grayscale */
                  transition-all duration-300
                  opacity-70 /* Slightly faded for a softer look on dark bg */
                  hover:grayscale-0 /* Back to full color */
                  hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

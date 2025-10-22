// src/components/Contact.tsx
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

// 1. Import your map image
import mapImage from '../assets/map.png';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="w-full bg-brand-dark text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>

        {/* Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Column 1: Contact Form */}
          <form className="space-y-6">
            
            {/* Form Group: Name */}
            <div className="relative">
              <User 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={20} 
              />
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full rounded-md border border-gray-700 bg-white/10
                  p-3 pl-12 text-white placeholder:text-gray-500
                  focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
                "
              />
            </div>
            
            {/* Form Group: Email */}
            <div className="relative">
              <Mail 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={20} 
              />
              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full rounded-md border border-gray-700 bg-white/10
                  p-3 pl-12 text-white placeholder:text-gray-500
                  focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
                "
              />
            </div>

            {/* Form Group: Phone */}
            <div className="relative">
              <Phone 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={20} 
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="
                  w-full rounded-md border border-gray-700 bg-white/10
                  p-3 pl-12 text-white placeholder:text-gray-500
                  focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
                "
              />
            </div>

            {/* Form Group: Message */}
            <div className="relative">
              <MessageSquare 
                className="absolute left-4 top-4 text-gray-500" 
                size={20} 
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="
                  w-full rounded-md border border-gray-700 bg-white/10
                  p-3 pl-12 text-white placeholder:text-gray-500
                  focus:border-brand-blue focus:ring-1 focus:ring-brand-blue
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full rounded-md bg-brand-blue px-6 py-3 font-semibold
                text-white transition-transform hover:scale-[1.02]
              "
            >
              Send Message
            </button>
          </form>

          {/* Column 2: Map */}
          {/* We give it a min-height for mobile and rounded corners */}
          <div className="relative w-full rounded-lg overflow-hidden min-h-[400px] lg:h-full">
            
            {/* 2. The Map Image (as a background) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${mapImage})` }}
            />
            
            {/* 3. The Blue Overlay 
                This perfectly replicates your original CSS effect
                (bg-color: rgba(87, 183, 235, 0.8) and mix-blend-mode: color)
            */}
            <div className="absolute inset-0 bg-brand-blue opacity-80 mix-blend-color" />
            
            {/* A subtle dark overlay to help with contrast */}
            <div className="absolute inset-0 bg-black/10" />

          </div>
        </div>

      </div>
    </section>
  );
}
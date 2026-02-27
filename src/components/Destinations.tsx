import { useState } from "react";
import { ArrowRight, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Destination {
  name: string;
  country: string;
  tag: string;
  image: string;
}

const initialDestinations: Destination[] = [
  { name: "Bali", country: "Indonesia", tag: "Trending", image: "/images/dest-bali.jpg" },
  { name: "Paris", country: "France", tag: "Classic", image: "/images/dest-paris.jpg" },
  { name: "Kyoto", country: "Japan", tag: "Cultural", image: "/images/dest-kyoto.jpg" },
  { name: "Marrakech", country: "Morocco", tag: "Exotic", image: "/images/dest-marrakech.jpg" },
];

const Destinations = () => {
  const [expanded, setExpanded] = useState(false);
  const destinations = initialDestinations;

  return (
    <section id="destinations" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
              Popular Destinations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Where to <em>Next?</em>
            </h2>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View all <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={dest.image}
                alt={`${dest.name}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {dest.tag}
              </span>

              {/* Info */}
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display text-2xl font-bold text-card">{dest.name}</h3>
                <p className="text-card/80 text-sm">{dest.country}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden mt-6 flex items-center gap-1 text-primary text-sm font-semibold mx-auto"
        >
          {expanded ? (
            <>Show less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>View all <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </section>
  );
};

export default Destinations;

import { MapPin, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  icon: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
}

const experiences: Experience[] = [
  {
    icon: "🌋",
    title: "Sunrise Trek at Mount Batur",
    location: "Bali, Indonesia",
    rating: 4.9,
    reviews: 328,
    duration: "6 hours",
    price: 75,
  },
  {
    icon: "🍷",
    title: "Private Wine Tasting in Montmartre",
    location: "Paris, France",
    rating: 4.8,
    reviews: 214,
    duration: "3 hours",
    price: 120,
  },
  {
    icon: "🍵",
    title: "Traditional Tea Ceremony",
    location: "Kyoto, Japan",
    rating: 5,
    reviews: 156,
    duration: "2 hours",
    price: 55,
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
            Curated Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Than Just <em>Sightseeing</em>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Immerse yourself in local culture with handpicked experiences led by passionate guides.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <span className="text-4xl mb-4 block">{exp.icon}</span>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {exp.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </div>

              {/* Rating & Duration */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span className="text-primary font-semibold">{exp.rating}</span>
                  <span>({exp.reviews})</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-4" />

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <p className="text-foreground">
                  <span className="font-bold text-lg">${exp.price}</span>
                  <span className="text-muted-foreground text-sm"> / person</span>
                </p>
                <button className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity">
                  Book now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

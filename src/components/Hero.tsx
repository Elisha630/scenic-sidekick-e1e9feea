import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
      <img
        src="/images/hero-santorini.jpg"
        alt="Santorini at sunset with white buildings and blue domes"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay at bottom for fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-card mb-4 drop-shadow-lg">
            Discover the World
          </h1>
          <p className="text-lg md:text-xl text-card/90 font-body max-w-xl mx-auto drop-shadow-md">
            Curated travel experiences to the most beautiful places on Earth
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

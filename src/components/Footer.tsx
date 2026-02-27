import { MapPin } from "lucide-react";

const footerLinks = {
  Explore: ["Destinations", "Experiences", "Travel Guides", "Reviews"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact", "Privacy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-display text-xl font-bold text-footer-heading">Wanderlust</span>
            </div>
            <p className="text-sm leading-relaxed">
              Discover the world's most beautiful places with curated travel experiences.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-base font-semibold text-footer-heading mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-footer-heading transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-footer-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm">© 2026 Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

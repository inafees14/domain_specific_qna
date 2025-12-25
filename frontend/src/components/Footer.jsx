import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <path d="M10 16 L14 20 L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">Axion Research</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Research-driven data science consulting. We prioritize methodology over tools, transparency over speed, and reproducibility over convenience.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@axionresearch.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Principles</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Reproducibility</li>
              <li className="text-sm text-muted-foreground">Transparency</li>
              <li className="text-sm text-muted-foreground">Open Methods</li>
              <li className="text-sm text-muted-foreground">Rigorous Standards</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Axion Research. Built for clarity, not hype.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

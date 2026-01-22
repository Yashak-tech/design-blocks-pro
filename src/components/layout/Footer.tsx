import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-toolbar border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DesignDOM</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-4">
              A pure DOM-based visual design editor. No canvas, no SVG, no external libraries. 
              Just HTML, CSS, and JavaScript creating something beautiful.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-primary transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/editor" className="hover:text-primary transition-colors">
                  Editor
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Competition Entry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 DesignDOM. Built for the DOM Design Competition.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using pure DOM technology
          </p>
        </div>
      </div>
    </footer>
  );
};

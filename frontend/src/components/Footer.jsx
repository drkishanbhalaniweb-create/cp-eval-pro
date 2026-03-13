import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              <span className="text-primary-foreground">CP EVAL </span>
              <span className="text-secondary">PRO</span>
            </Link>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Comprehensive support for C&P examiners, simplifying medical evaluations
              for efficient disability assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#process')}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#why-cp-eval-pro')}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-left"
                >
                  Why CP EVAL PRO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>
                <Link to="/services/medical-record-review" className="hover:text-accent-foreground transition-colors">
                  Pre-screening & Record Review
                </Link>
              </li>
              <li>
                <Link to="/services/dbq-completion" className="hover:text-accent-foreground transition-colors">
                  DBQ Completion
                </Link>
              </li>
              <li>
                <Link to="/services/nexus-letters" className="hover:text-accent-foreground transition-colors">
                  Medical Opinions & Nexus Letters
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="hover:text-accent-foreground transition-colors text-left">
                  VA Addendum Responses
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-accent-foreground/70">
          <p>© {currentYear} CP EVAL PRO. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Serving those who serve our nation's veterans.
          </p>
        </div>
      </div>
    </footer>
  );
};
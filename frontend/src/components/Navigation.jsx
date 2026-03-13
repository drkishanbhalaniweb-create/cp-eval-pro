import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Process', href: '#process' },
    { label: 'Why CP EVAL PRO', href: '#why-cp-eval-pro' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '/resources', isPage: true },
  ];

  const serviceLinks = [
    { label: 'Medical Record Review', href: '/services/medical-record-review' },
    { label: 'DBQ Completion', href: '/services/dbq-completion' },
    { label: 'Nexus Letters', href: '/services/nexus-letters' },
  ];

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
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
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
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-medium'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-primary">CP EVAL </span>
              <span className="text-secondary">PRO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 focus:outline-none">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="cursor-pointer">
                    <Link to={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="cursor-pointer font-semibold border-t" onClick={() => scrollToSection('#services')}>
                  View All Services
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary-hover transition-smooth"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-large max-h-[90vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-border pt-2">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-primary hover:bg-primary-hover transition-smooth mt-4"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
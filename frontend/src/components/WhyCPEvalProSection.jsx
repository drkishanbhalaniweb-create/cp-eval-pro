import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Premium inline SVG icons — no external icon library needed.
// Each icon is hand-crafted in a duotone / bold style to feel distinctive.

const EfficiencyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Lightning bolt — sharp angles, bold weight */}
    <path
      d="M19 3L7 18h9l-3 11 14-15h-9L19 3z"
      fill="currentColor"
      opacity="0.25"
    />
    <path
      d="M19 3L7 18h9l-3 11 14-15h-9L19 3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const QualityIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Medal / award — distinctive shape */}
    <circle cx="16" cy="12" r="8" fill="currentColor" opacity="0.2" />
    <circle cx="16" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    {/* Star inside - perfectly symmetrical */}
    <path
      d="M 16 7.3 L 17.01 10.41 L 20.28 10.41 L 17.64 12.33 L 18.65 15.44 L 16 13.52 L 13.35 15.44 L 14.36 12.33 L 11.72 10.41 L 14.99 10.41 Z"
      fill="currentColor"
      opacity="0.85"
    />
    {/* Ribbon left */}
    <path
      d="M11.5 18.5L9 27l7-3 7 3-2.5-8.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const ExpertiseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Crosshair / target — precision look */}
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" opacity="0.4" />
    <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.8" opacity="0.7" />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
    {/* Crosshair lines */}
    <line x1="16" y1="2" x2="16" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="25" x2="16" y2="30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="2" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="25" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const WhyCPEvalProSection = () => {
  const reasons = [
    {
      Icon: EfficiencyIcon,
      title: 'Efficiency',
      feature: 'We streamline record reviews, DBQ completion, and medical opinions within 36 hours.',
      benefit: 'Ensuring examiners meet VA deadlines stress-free.',
      stats: ['36h Turnaround', '100% On-Time', 'Zero Delays'],
    },
    {
      Icon: QualityIcon,
      title: 'Quality',
      feature: 'Our detailed evaluations.',
      benefit: 'Ensure fair assessments, reducing examiner fatigue and errors.',
      stats: ['Detail-Oriented', 'Error-Free'],
    },
    {
      Icon: ExpertiseIcon,
      title: 'Expertise',
      feature: 'With over 5 years specializing in veteran claims.',
      benefit: 'CP EVAL PRO offers unparalleled expertise in veteran health evaluations and disability claims.',
      stats: ['5+ Years', 'Specialized', 'Veteran-Focused'],
    },
  ];

  return (
    <section id="why-cp-eval-pro" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4 bg-secondary-light text-secondary border-secondary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient-primary">CP EVAL PRO</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the difference that dedication, expertise, and genuine care can make
            in your practice.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const { Icon } = reason;
            return (
              <Card
                key={reason.title}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl gradient-primary shadow-medium flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>

                {/* Feature */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Feature
                  </div>
                  <p className="text-foreground leading-relaxed">{reason.feature}</p>
                </div>

                {/* Benefit */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-1">
                    Benefit
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{reason.benefit}</p>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {reason.stats.map((stat) => (
                      <Badge
                        key={stat}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary-light via-secondary-light to-accent-light border-primary/20 shadow-large">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dedicated to Serving Those Who Serve
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                CP EVAL PRO understands the critical role C&P examiners play in supporting our nation's
                veterans. Our mission is to empower you with the tools and support needed to provide
                exceptional care while maintaining your well-being.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

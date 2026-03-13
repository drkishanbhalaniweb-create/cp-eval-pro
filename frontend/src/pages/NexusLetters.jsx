import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { AuthorBio } from '@/components/AuthorBio';

const NexusLetters = () => {
  const features = [
    'Evidence-based opinions',
    'Service-connection analysis',
    'VA query responses',
    'Comprehensive follow-ups',
    'Citations to medical literature',
    'Support for "At least as likely as not" thresholds'
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent-light text-accent border-accent/20">
                Service Detail
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                What is a <span className="text-gradient-accent">VA Nexus Letter?</span>
              </h1>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="mb-4">
                  <strong>What is a Nexus Letter for VA disability claims?</strong> A Nexus Letter is a highly specialized, evidence-based medical opinion drafted by a qualified healthcare professional. Its primary purpose is to establish a strong medical link (a "nexus") between a veteran's current diagnosed disability and an event, injury, or illness that occurred during their active duty military service. 
                </p>
                <p>
                  To be accepted by the Department of Veterans Affairs, a Nexus Letter must include a comprehensive review of the veteran's C-File (Claims File), specific citations to established medical literature, and a clear statement regarding the likelihood of service connection. The medical rationale must definitively conclude whether it is "at least as likely as not" (a 50% or greater probability) that the current condition was caused or aggravated by military service, providing the crucial bridge necessary for a successful VA disability claim.
                </p>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-12 rounded-2xl border border-border flex items-center justify-center shadow-medium">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-card shadow-large mb-4">
                  <FileText className="w-16 h-16 text-accent" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">Expert</div>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    High-quality medical rationale that stands up to VA scrutiny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why is Evidence-Based Medical Rationale Important?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12 text-balance">
            Developing a legally and medically sound opinion is often the most time-consuming aspect of a C&P examiner's responsibilities. Our clinical team performs the rigorous research necessary to draft independent medical rationale. This allows examiners to simply review, edit, and confidently sign off on opinions that will survive strict VA adjudication scrutiny.
          </p>
          <AuthorBio />
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default NexusLetters;

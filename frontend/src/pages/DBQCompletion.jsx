import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FileCheck, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { AuthorBio } from '@/components/AuthorBio';

const DBQCompletion = () => {
  const features = [
    'VA-compliant documentation',
    'Based on examination findings',
    '24-36 hour turnaround',
    'Thorough and accurate',
    'Adherence to M21-1 requirements',
    'Quality control for obvious errors'
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="lg:order-2">
              <Badge className="mb-4 bg-secondary-light text-secondary border-secondary/20">
                Service Detail
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                How to Complete a <span className="text-gradient-secondary">VA DBQ</span>
              </h1>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="mb-4">
                  <strong>What is a VA DBQ (Disability Benefit Questionnaire)?</strong> A VA DBQ is a standardized medical form used by the Department of Veterans Affairs to systematically gather vital medical information evaluating a veteran's disability. These forms specifically document the severity, exact symptoms, and comprehensive functional impact of a veteran's medical or psychological condition to help rating specialists assign an accurate disability rating.
                </p>
                <p>
                   CP EVAL PRO assists examiners by ensuring expert DBQ completion entirely based on the provider's clinical findings. Completing a DBQ requires strict adherence to M21-1 Adjudication Procedures and VA formatting guidelines. Our team meticulously translates the examiner's clinical notes into the correct DBQ blocks, ensuring no mandatory fields are missed, preventing addendum requests, and delivering fully compliant documentation back to the examiner within a rapid 24-36 hour turnaround window.
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
            <div className="lg:order-1 bg-gradient-to-br from-muted/50 to-background p-12 rounded-2xl border border-border flex items-center justify-center shadow-medium">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-card shadow-large mb-4">
                  <FileCheck className="w-16 h-16 text-secondary" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">24-36h</div>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Consistent, timely turnaround to keep your dashboard clear of pending cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How Do You Meet the 48-Hour C&P Submission Deadline?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12 text-balance">
            We understand the intensive pressure of the VA's mandatory 48-hour case submission window. Our specialized documentation team works in parallel with your daily examination schedule. Once you sign off on your clinical findings, the finalized DBQ documentation is prepared, subjected to quality control for common errors, and returned almost immediately for secure portal upload.
          </p>
          <AuthorBio />
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default DBQCompletion;

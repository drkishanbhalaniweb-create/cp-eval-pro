import React from 'react';
import { Card } from '@/components/ui/card';
import { UserCircle2, CheckCircle } from 'lucide-react';

export const AuthorBio = () => {
  return (
    <Card className="p-6 mt-12 bg-background border-border shadow-sm text-left">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <UserCircle2 className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
            Written by Quality Review Medical Team 
            <CheckCircle className="w-5 h-5 text-success" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Our content is authored and reviewed by experienced medical professionals who specialize in VA Disability Benefits Questionnaires (DBQs) and C&P Examination requirements. With thousands of successful medical record reviews and opinions drafted, our team ensures all information meets the strict evidentiary standards of the Department of Veterans Affairs (M21-1 Adjudication Procedures) to maintain E-E-A-T (Expertise, Experience, Authoritativeness, and Trustworthiness).
          </p>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Clinical Expertise • VA Compliance • Medical Rationale
          </div>
        </div>
      </div>
    </Card>
  );
};

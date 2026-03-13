import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { FileSearch, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { AuthorBio } from '@/components/AuthorBio';

const MedicalRecordReview = () => {
  const features = [
    'Comprehensive record analysis based on VA standards',
    'Critical health issue identification prior to exams',
    'Pre-appointment medical summaries',
    'Time-saving insights for high-volume examiners',
    'Veteran medical history timeline mapping',
    'Identification of direct service-connection evidence'
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
                Service Detail
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                What is a Pre-Exam <span className="text-gradient-primary">Medical Record Review?</span>
              </h1>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="mb-4">
                  <strong>What is a Medical Record Review in the context of a C&P Examination?</strong> A C&P Medical Record Review is the systematic analysis of a veteran's military service records, private medical records, and VA treatment files prior to their Compensation and Pension (C&P) examination. The objective is to identify critical health history, established diagnoses, and evidence of in-service events that establish a service connection. 
                </p>
                <p>
                  Because these files often contain thousands of unstructured PDF pages, a specialized review process is essential. CP EVAL PRO provides concise, structured medical summaries delivered to the examiner before the appointment begins. This pre-screening methodology ensures that the examiner is fully prepared, saves hours of administrative reading time, minimizes the risk of overlooking critical health details, and directly contributes to a highly accurate Disability Benefit Questionnaire (DBQ).
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
                  <FileSearch className="w-16 h-16 text-primary" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">Pre-Exam</div>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Get the critical insights you need before the veteran enters the room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How Does Pre-Screening Optimize the C&P Evaluation Workflow?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center text-balance">
            Our record review process is designed specifically for C&P Examiners who handle excessive case volumes. By providing a clear, chronological roadmap of the veteran's medical history, we allow examiners to focus entirely on the physical examination and clinical interview, rather than getting lost in thousands of pages of PDF records.
          </p>
          <AuthorBio />
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default MedicalRecordReview;

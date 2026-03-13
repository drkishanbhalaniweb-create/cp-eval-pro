import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

const Resources = () => {
  const articles = [
    {
      title: 'Understanding the 48-Hour Submission Window for C&P Exams',
      excerpt: 'How examiners can stay compliant with VA requirements while maintaining a high volume of assessments.',
      date: 'March 10, 2026',
      readTime: '5 min read'
    },
    {
      title: 'Key Evidence for Service Connection in TBI Cases',
      excerpt: 'A deep dive into the medical documentation required to establish a strong nexus for traumatic brain injuries.',
      date: 'March 05, 2026',
      readTime: '8 min read'
    },
    {
      title: 'Common Mistakes in DBQ Completion and How to Avoid Them',
      excerpt: 'The most frequent errors identified by VA quality reviews and strategies for 100% accuracy.',
      date: 'February 28, 2026',
      readTime: '6 min read'
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-primary-light text-primary border-primary/20">
            Learning Center
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Examiner <span className="text-gradient-primary">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights, guides, and updates for C&P Examiners dedicated to serving the veteran community with excellence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-large transition-all duration-300 border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <BookOpen className="w-12 h-12 text-primary/40" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-muted-foreground mb-3 gap-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <button className="text-sm font-bold text-primary flex items-center gap-1 group">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Resources;

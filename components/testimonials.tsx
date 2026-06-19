'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun Patel',
      class: 'Class 12',
      score: '98%ile in JEE Mains',
      text: 'Gurwinder sir&apos;s teaching methodology is exceptional. His focus on conceptual clarity rather than rote learning helped me score 98%ile in JEE Mains. The small batch size ensured all my doubts were cleared.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      class: 'Class 11',
      score: 'Improved from 45% to 82%',
      text: 'I was struggling with mathematics before joining Punjab Classes. Sir&apos;s personalized approach and the weekly doubt sessions transformed my understanding. Highly recommend for serious JEE aspirants!',
      rating: 5,
    },
    {
      name: 'Karan Singh',
      class: 'Class 12',
      score: '96%ile in JEE Mains',
      text: 'The structured curriculum and regular mock tests helped me identify my weak areas and improve systematically. The batch size was perfect - not too crowded, enough interaction with sir.',
      rating: 5,
    },
    {
      name: 'Neha Verma',
      class: 'Class 11',
      score: 'Consistent scorer',
      text: 'Best decision to join this institute. Sir explains even the toughest concepts in such a simple way. The evening batch timing was perfect for my schedule. Worth every penny!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Students Say</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground-light">
            Hear from students who have transformed their JEE preparation with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="text-accent mb-4" size={28} />

              {/* Testimonial Text */}
              <p className="text-foreground-light mb-6 flex-grow italic">{testimonial.text}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>

              {/* Student Info */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-accent font-semibold">{testimonial.class}</p>
                <p className="text-sm text-foreground-light mt-1">{testimonial.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-background border-2 border-border rounded-xl">
            <p className="text-5xl font-bold text-primary mb-3">1000+</p>
            <p className="text-foreground-light text-lg">Students Trained Successfully</p>
          </div>
          <div className="p-8 bg-background border-2 border-border rounded-xl">
            <p className="text-5xl font-bold text-primary mb-3">99%</p>
            <p className="text-foreground-light text-lg">Students Clear JEE Exams</p>
          </div>
          <div className="p-8 bg-background border-2 border-border rounded-xl">
            <p className="text-5xl font-bold text-primary mb-3">4.9/5</p>
            <p className="text-foreground-light text-lg">Average Rating by Students</p>
          </div>
        </div>
      </div>
    </section>
  );
}

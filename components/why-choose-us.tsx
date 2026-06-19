'use client';

import { Users, MessageCircle, BookOpen, Clock, Video, BarChart3 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users size={40} />,
      title: 'Small Batch Size',
      description: 'Only 15-20 students per batch for personalized attention and individual doubt solving',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Expert Faculty',
      description: 'Learn from experienced faculty who have taught at top coaching institutes like ALLEN, AAKASH & BANSAL',
    },
    {
      icon: <Video size={40} />,
      title: 'Live Interactive Classes',
      description: 'Real-time classes with live interaction, screen sharing, and instant Q&A sessions',
    },
    {
      icon: <MessageCircle size={40} />,
      title: 'Doubt Solving Sessions',
      description: 'Dedicated doubt clearing sessions every week to ensure zero confusion',
    },
    {
      icon: <Clock size={40} />,
      title: 'Structured Schedule',
      description: 'Well-planned weekly schedule with balanced theory and problem-solving practice',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Progress Tracking',
      description: 'Regular tests and performance analysis to track your progress and identify improvement areas',
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Punjab Classes?</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto">
            Everything you need to crack JEE Mains & Advanced with personalized mentoring and expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-background-alt rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent bg-opacity-20 text-primary mb-6 group-hover:bg-opacity-30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground-light">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-primary-light rounded-2xl text-white text-center">
          <p className="text-2xl font-bold mb-3">🎯 Limited Seats Available</p>
          <p className="text-lg text-white text-opacity-90">
            Only 15-20 students per batch to ensure quality education and personalized attention. Enroll now!
          </p>
        </div>
      </div>
    </section>
  );
}

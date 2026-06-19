'use client';

import { Award, GraduationCap, Briefcase, Users } from 'lucide-react';

export default function InstructorBio() {
  return (
    <section id="instructor" className="py-20 px-4 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Your Mentor</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground-light max-w-2xl mx-auto">
            Learn from an expert with decades of teaching experience at India&apos;s top coaching institutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary">
                  <div className="text-white text-center">
                    <GraduationCap size={80} className="mx-auto mb-4 opacity-40" />
                    <p className="text-xl font-semibold opacity-60">Gurwinder Singh Sir</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">21+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Gurwinder Singh Sir
            </h3>
            <p className="text-accent font-semibold text-lg mb-8">Senior JEE Coach</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary transition-colors">
                <Award className="text-primary mb-3" size={32} />
                <p className="text-2xl font-bold text-foreground">21+</p>
                <p className="text-foreground-light text-sm">Years Teaching</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary transition-colors">
                <Briefcase className="text-primary mb-3" size={32} />
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-foreground-light text-sm">Top Institutes</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary transition-colors">
                <Users className="text-primary mb-3" size={32} />
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-foreground-light text-sm">Students Trained</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary transition-colors">
                <GraduationCap className="text-primary mb-3" size={32} />
                <p className="text-2xl font-bold text-foreground">99%</p>
                <p className="text-foreground-light text-sm">Success Rate</p>
              </div>
            </div>

            {/* Experience Description */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent text-primary font-bold">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ex-Senior Faculty at ALLEN</h4>
                  <p className="text-foreground-light text-sm">One of India&apos;s premier coaching institutes</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent text-primary font-bold">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ex-Senior Faculty at AAKASH</h4>
                  <p className="text-foreground-light text-sm">Trusted by millions across India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent text-primary font-bold">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ex-Senior Faculty at BANSAL</h4>
                  <p className="text-foreground-light text-sm">Known for advanced problem-solving methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

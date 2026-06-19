'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import InstructorBio from '@/components/instructor-bio';
import WhyChooseUs from '@/components/why-choose-us';
import BatchTimings from '@/components/batch-timings';
import EnrollmentForm from '@/components/enrollment-form';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <InstructorBio />
      <WhyChooseUs />
      <BatchTimings />
      <Testimonials />
      <EnrollmentForm />
      <Footer />
    </main>
  );
}

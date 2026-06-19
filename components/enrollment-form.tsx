'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '11',
    batch: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        class: '11',
        batch: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to know more about Class ${formData.class} batches for ${formData.batch || 'JEE preparation'}. Name: ${formData.name || 'User'}, Phone: ${formData.phone || 'Not provided'}`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="enrollment" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Join Punjab Classes Today</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground-light">
            Book your free demo class now - Limited seats available!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-background-alt rounded-xl p-8 border-2 border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Enrollment</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
                <p className="text-green-800 font-semibold">✓ Thank you! We&apos;ll contact you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors bg-background"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit phone number"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors bg-background"
                />
              </div>

              {/* Class */}
              <div>
                <label htmlFor="class" className="block text-sm font-semibold text-foreground mb-2">
                  Class *
                </label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors bg-background"
                >
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              {/* Batch Preference */}
              <div>
                <label htmlFor="batch" className="block text-sm font-semibold text-foreground mb-2">
                  Preferred Batch (Optional)
                </label>
                <select
                  id="batch"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors bg-background"
                >
                  <option value="">Select a batch</option>
                  <option value="morning">7:00 AM - 8:20 AM</option>
                  <option value="afternoon">4:00 PM - 5:20 PM</option>
                  <option value="evening">5:40 PM - 7:00 PM</option>
                  <option value="lateevening">7:30 PM - 8:50 PM</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-light transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <Send size={20} />
                Submit Details
              </button>

              <p className="text-xs text-foreground-light text-center mt-4">
                By submitting, you agree to receive updates via WhatsApp and phone calls.
              </p>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Limited Seats */}
            <div className="p-6 bg-accent bg-opacity-10 border-2 border-accent rounded-xl">
              <p className="text-2xl font-bold text-primary mb-2">⏰ Limited Seats Per Batch</p>
              <p className="text-foreground-light">
                Only <span className="font-bold text-foreground">15-20 students</span> allowed per batch to ensure personalized attention and quality education.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 bg-primary text-white rounded-xl">
              <p className="text-xl font-bold mb-4">💬 Quick Response on WhatsApp</p>
              <p className="mb-4 text-white text-opacity-90">
                Get your doubts cleared instantly. Our team responds within minutes on WhatsApp.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-3 bg-white text-primary rounded-lg font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>

            {/* Class Schedule */}
            <div className="p-6 bg-background-alt border-2 border-border rounded-xl">
              <p className="text-lg font-bold text-foreground mb-3">📅 Class Schedule</p>
              <ul className="space-y-2 text-foreground-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Classes:</strong> Monday, Wednesday, Friday
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Duration:</strong> 80 minutes per class
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Curriculum:</strong> JEE Mains & Advanced
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <strong>Doubt Sessions:</strong> Weekly
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-6 bg-background border-2 border-border rounded-xl">
              <p className="text-sm italic text-foreground-light mb-4">
                &quot;The small batch size and personal attention from Sir changed my JEE prep journey. I went from 60% to 85% in just 6 months!&quot;
              </p>
              <p className="font-bold text-foreground">- Priya Sharma, Class 12</p>
              <p className="text-accent font-semibold text-sm">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

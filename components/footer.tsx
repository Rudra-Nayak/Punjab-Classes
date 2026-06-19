'use client';

import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold text-accent mb-4">Punjab Classes</h4>
            <p className="text-white text-opacity-80 mb-4">
              Crack JEE - Chase Your Dreams
            </p>
            <p className="text-sm text-white text-opacity-70">
              Premier online coaching for JEE Mains & Advanced with expert faculty and personalized attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#instructor" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  About Instructor
                </a>
              </li>
              <li>
                <a href="#batches" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Batch Timings
                </a>
              </li>
              <li>
                <a href="#enrollment" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>

          {/* Batches */}
          <div>
            <h5 className="text-lg font-bold mb-4">Class Timings</h5>
            <ul className="space-y-2 text-sm">
              <li className="text-white text-opacity-80">
                <span className="font-semibold">Mon, Wed, Fri</span>
              </li>
              <li className="text-white text-opacity-80">
                7:00 AM - 8:20 AM
              </li>
              <li className="text-white text-opacity-80">
                4:00 PM - 5:20 PM
              </li>
              <li className="text-white text-opacity-80">
                5:40 PM - 7:00 PM
              </li>
              <li className="text-white text-opacity-80">
                7:30 PM - 8:50 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white text-opacity-80 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-opacity-80 hover:text-accent transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:info@punjabclasses.com"
                className="flex items-center gap-2 text-white text-opacity-80 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

          {/* Social Links */}
        <div className="border-t border-white border-opacity-20 pt-8 mb-8">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="Website"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="Facebook"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent text-primary rounded-full hover:bg-accent-light transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your JEE Journey?</h3>
          <p className="text-white text-opacity-80 mb-6">
            Limited seats available. Enroll now for the next batch!
          </p>
          <a
            href="#enrollment"
            className="inline-block px-8 py-3 bg-accent text-primary rounded-lg font-bold hover:bg-accent-light transition-colors"
          >
            Book Free Demo Today
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-white text-opacity-70 mb-2">
            © {currentYear} Punjab Classes. All rights reserved.
          </p>
          <p className="text-white text-opacity-60 text-sm">
            Helping students crack JEE Mains & Advanced since 2003
          </p>
        </div>
      </div>
    </footer>
  );
}

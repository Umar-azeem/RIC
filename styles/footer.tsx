"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2E5090] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <Image
                src="/img/logo.png"
                alt="Example image"
                width={500}
                height={300}
              />
            </h3>
            <p className="text-gray-200 text-sm">
              Riphah International College prepares students with transformative
              experience and to be well-rounded leaders.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#F39C12] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/intermediate"
                  className="hover:text-[#F39C12] transition"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-[#F39C12] transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F39C12] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Gujjrat BYpass Road Near Pertroling Chowki BHalwal, Punjab,
                  Pakistan
                </span>
              </div>
              <div className="flex flex-col  gap-3 text-white">
                <a
                  href="https://wa.me/923216021006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2  rounded-xl transition-all"
                >
                  <Phone size={18} className="" />
                  <span>0321-6021006</span>
                </a>
                <a
                  href="https://wa.me/923250123008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl transition-all"
                >
                  <Phone size={18} className="" />
                  <span>0325-0123008</span>
                </a>
                <a
                  href="https://wa.me/923202626913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2   rounded-xl transition-all"
                >
                  <Phone size={18} className="" />
                  <span>0320-2626913</span>
                </a>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/riphahbhalwal/?_rdc=1&_rdr#"
                target="_blank"
                className="hover:text-[#F39C12] transition "
              >
                <Facebook size={24} />
              </a>
              <a
                href="director.bhalwal@ric.edu.pk" className="hover:text-[#F39C12] transition "
              >
                <Mail size={24} />
              </a>

              {/* <a href="#" className="hover:text-[#F39C12] transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#F39C12] transition">
                <Linkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.217586995596!2d72.9248147!3d32.2791275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921bda580480257%3A0x9db29a9c4cc7125c!2sRiphah%20International%20College%2C%20Bhalwal!5e0!3m2!1sen!2s!4v1761959801578!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400 pt-8 text-center text-sm text-gray-200">
          <p>&copy; 2025 Riphah International College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

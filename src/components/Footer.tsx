import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/image.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f4f4] border-t border-black/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Logo & Corporate Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl tracking-tight text-black">
              <img src={logoImage} alt="LocalSM" className="h-9 w-9 object-contain" />
              <span className="localsm-wordmark">
                Local<span className="text-[#f4b000]">SM</span>
              </span>
            </Link>
            <p className="mt-4 text-xs tracking-wider text-black/50 uppercase font-medium">
              To endure, evolve, and empower.
            </p>
            <p className="mt-6 text-sm text-black/60 leading-relaxed font-light">
              Building the hyper-local commerce infrastructure of tomorrow.
            </p>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-5">
              Group Companies
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  LocalSM Delivery
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Janhal
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Local Branding Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-5">
              Corporate
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/culture" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Culture
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm text-black/70 hover:text-[#0055ff] transition-colors duration-200 font-light">
                  Impact & Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-5">
              Corporate Office
            </h4>
            <p className="text-sm text-black/60 font-light leading-relaxed mb-4">
              LocalSM Limited,<br />
              12th Floor, DLF Cyber City,<br />
              Phase 3, Gurugram,<br />
              Haryana - 122002, India
            </p>
            <p className="text-sm text-black/60 font-light">
              <span className="text-black/40">CIN:</span> L74999HR2026PLC099999<br />
              <span className="text-black/40">Email:</span> <a href="mailto:corporate@localsm.com" className="hover:text-[#0055ff] transition-colors">corporate@localsm.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-black/50 font-light">
            © {currentYear} LocalSM Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-black/50 hover:text-black transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-black/50 hover:text-black transition-colors font-light">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-black/50 hover:text-black transition-colors font-light">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

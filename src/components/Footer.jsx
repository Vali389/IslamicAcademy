import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="w-full mt-16"
      style={{ backgroundColor: '#0d1b12' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
              <h3 className="text-xl font-bold text-white">Quran Academy</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner in online Quranic education. Learn the Holy Quran with proper Tajweed from qualified male and female teachers.
            </p>
            <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: "'Times New Roman', serif" }} dir="rtl">
              آن لائن قرآنی تعلیم میں آپ کا قابل اعتماد ساتھی۔
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 1.545a3.837 3.837 0 00-3.35 3.352c-.043.95-.054 1.275-.054 3.103s.011 2.153.054 3.103a3.837 3.837 0 003.35 3.352c.95.043 1.275.054 3.103.054s2.153-.011 3.103-.054a3.837 3.837 0 003.352-3.352c.043-.95.054-1.275.054-3.103s-.011-2.153-.054-3.103a3.837 3.837 0 00-3.352-3.352c-.95-.043-1.275-.054-3.103-.054s-2.153.011-3.103.054zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.545a3.59 3.59 0 110 7.18 3.59 3.59 0 010-7.18z"/>
                </svg>
              </a>
              <a className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white" href="#">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Courses</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/fees" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Fee Structure</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/registration" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Registration</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Our Courses</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Quran Reading (Nazra)</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Quran Memorization (Hifz)</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tajweed Rules</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Islamic Studies</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Arabic Language</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <span>info@quranacademy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <a href="tel:+919866763270" className="hover:text-primary transition-colors">+91 98667 63270</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                <span>24/7 Support Available</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">language</span>
                <span>Worldwide Online Classes</span>
              </li>
            </ul>
            {/* CTA */}
            <Link 
              to="/registration"
              className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform"
            >
              <span>Book Free Trial</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Quran Academy. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isUrdu } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="w-full mt-16"
      style={{ backgroundColor: '#0d1b12' }}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
              <h3 className="text-xl font-bold text-white">{t.academyName}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t.footer.description}
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
              <a 
                className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500 transition-colors text-gray-400 hover:text-white" 
                href="https://wa.me/919866763270"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/" onClick={scrollToTop}>{t.nav.home}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/about" onClick={scrollToTop}>{t.nav.about}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{t.nav.courses}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/fees" onClick={scrollToTop}>{t.nav.fees}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/registration" onClick={scrollToTop}>{isUrdu ? 'رجسٹریشن' : 'Registration'}</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">{t.footer.ourCourses}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{isUrdu ? 'ناظرہ قرآن' : 'Quran Reading (Nazra)'}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{isUrdu ? 'حفظ قرآن' : 'Quran Memorization (Hifz)'}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{isUrdu ? 'تجوید' : 'Tajweed Rules'}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{isUrdu ? 'اسلامی علوم' : 'Islamic Studies'}</Link></li>
              <li><Link className="text-gray-400 hover:text-primary transition-colors" to="/courses" onClick={scrollToTop}>{isUrdu ? 'عربی زبان' : 'Arabic Language'}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">{t.footer.contactUs}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:nisbathacdemy@gmail.com" className="hover:text-primary transition-colors">nisbathacdemy@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <a href="tel:+919866763270" className="hover:text-primary transition-colors">+91 98667 63270</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                <span>{isUrdu ? '24/7 سپورٹ دستیاب' : '24/7 Support Available'}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">event_busy</span>
                <span>{isUrdu ? 'جمعہ چھٹی' : 'Friday Holiday'}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">language</span>
                <span>{isUrdu ? 'دنیا بھر میں آن لائن کلاسز' : 'Worldwide Online Classes'}</span>
              </li>
            </ul>
            {/* CTA */}
            <Link 
              to="/registration"
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform"
            >
              <span>{isUrdu ? 'مفت ٹرائل بک کریں' : 'Book Free Trial'}</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">{isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy'}</a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">{isUrdu ? 'شرائط و ضوابط' : 'Terms of Service'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

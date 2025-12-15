import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}
    >
      <div 
        className="relative flex min-h-[520px] flex-col items-center justify-center gap-8 overflow-hidden p-6 sm:p-10"
        style={{
          background: 'linear-gradient(135deg, #0d1b12 0%, #102216 30%, #11d452 100%)'
        }}
      >
        {/* Decorative Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-gold/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              <span className="material-symbols-outlined text-primary text-lg">verified</span>
              Trusted by 5000+ Students Worldwide
            </span>
          </div>

          {/* Headings */}
          <div className="animate-fade-up-delay-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Learn Qur'an Online With{' '}
              <span className="text-primary">Qualified Ulema</span>
            </h1>
            <h2 
              className="mt-4 text-xl sm:text-2xl font-medium text-white/90"
              style={{ fontFamily: "'Times New Roman', serif" }}
              dir="rtl"
            >
              مستند علماء کی زیر نگرانی قرآن آن لائن سیکھیں
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed text-white/80 animate-fade-up-delay-2">
            Join our global community and embark on a transformative journey of Quranic learning with certified scholars, from the comfort of your home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-up-delay-3">
            <Link 
              to="/registration"
              className="flex h-14 items-center justify-center overflow-hidden rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
            >
              <span>Book Free Demo Class</span>
              <span className="mx-2">|</span>
              <span style={{ fontFamily: "'Times New Roman', serif" }}>مفت ڈیمو کلاس</span>
            </Link>
            <Link 
              to="/contact"
              className="flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              <span>Contact on WhatsApp</span>
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-white/80 text-sm animate-fade-up-delay-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>One-on-One Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Flexible Timings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Male & Female Teachers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

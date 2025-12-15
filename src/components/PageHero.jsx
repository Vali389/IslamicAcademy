// Reusable Page Hero Component for all pages
const PageHero = ({ title, titleUrdu, subtitle, subtitleUrdu }) => {
  return (
    <section 
      className="relative"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}
    >
      <div 
        className="relative flex min-h-[300px] flex-col items-center justify-center gap-4 overflow-hidden p-6 sm:p-10"
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
        <div className="absolute top-0 right-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="z-10 flex flex-col gap-3 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white animate-fade-up">
            {title}
          </h1>
          {titleUrdu && (
            <h2 
              className="text-2xl sm:text-3xl font-medium text-white/90 animate-fade-up-delay-1"
              style={{ fontFamily: "'Times New Roman', serif" }}
              dir="rtl"
            >
              {titleUrdu}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed text-white/80 mt-2 animate-fade-up-delay-2">
              {subtitle}
            </p>
          )}
          {subtitleUrdu && (
            <p 
              className="max-w-2xl mx-auto text-base font-normal leading-relaxed text-white/70 animate-fade-up-delay-3"
              style={{ fontFamily: "'Times New Roman', serif" }}
              dir="rtl"
            >
              {subtitleUrdu}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

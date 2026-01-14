import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const VideosPage = () => {
  const { isUrdu } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubscribe = () => {
    setShowThankYou(true);
    // Redirect to YouTube after showing thank you message
    setTimeout(() => {
      window.open('https://www.youtube.com/@nisbath_?sub_confirmation=1', '_blank');
      setShowThankYou(false); // Close the modal after redirect
    }, 2000);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const videos = [
    {
      id: 1,
      title: isUrdu ? 'قرآن کی تلاوت - حصہ ۱' : 'Quran Recitation - Part 1',
      description: isUrdu 
        ? 'قرآن پاک کی خوبصورت تلاوت سیکھیں'
        : 'Learn beautiful Quran recitation',
      youtubeId: 'p-3virADCko',
      thumbnail: 'https://img.youtube.com/vi/p-3virADCko/maxresdefault.jpg',
      duration: '11:03',
      category: isUrdu ? 'تلاوت' : 'Recitation',
    },
    {
      id: 2,
      title: isUrdu ? 'تجوید کی بنیادی باتیں' : 'Tajweed Basics',
      description: isUrdu 
        ? 'تجوید کے بنیادی قواعد سیکھیں'
        : 'Learn the basic rules of Tajweed',
      youtubeId: 'En00orm71FI',
      thumbnail: 'https://img.youtube.com/vi/En00orm71FI/maxresdefault.jpg',
      duration: '8:45',
      category: isUrdu ? 'تجوید' : 'Tajweed',
    },
    {
      id: 3,
      title: isUrdu ? 'نماز کا طریقہ' : 'How to Pray',
      description: isUrdu 
        ? 'نماز کے مکمل طریقے کی ویڈیو'
        : 'Complete video guide on how to pray',
      youtubeId: '6AGwrMcbfjI',
      thumbnail: 'https://img.youtube.com/vi/6AGwrMcbfjI/maxresdefault.jpg',
      duration: '15:20',
      category: isUrdu ? 'نماز' : 'Prayer',
    },
    {
      id: 4,
      title: isUrdu ? 'سورة الفاتحہ کی تفسیر' : 'Tafseer of Surah Al-Fatiha',
      description: isUrdu 
        ? 'سورة الفاتحہ کی مکمل تفسیر'
        : 'Complete explanation of Surah Al-Fatiha',
      youtubeId: 'aH7QP-Tze5M',
      thumbnail: 'https://img.youtube.com/vi/aH7QP-Tze5M/maxresdefault.jpg',
      duration: '22:15',
      category: isUrdu ? 'تفسیر' : 'Tafseer',
    },
    {
      id: 5,
      title: isUrdu ? 'اسلامی اخلاقیات' : 'Islamic Ethics',
      description: isUrdu 
        ? 'اسلام میں اخلاقیات کی اہمیت'
        : 'Importance of ethics in Islam',
      youtubeId: 'rLfbrLZ5LFE',
      thumbnail: 'https://img.youtube.com/vi/rLfbrLZ5LFE/maxresdefault.jpg',
      duration: '18:30',
      category: isUrdu ? 'اخلاقیات' : 'Ethics',
    },
    {
      id: 6,
      title: isUrdu ? 'حفظ کے طریقے' : 'Memorization Techniques',
      description: isUrdu 
        ? 'قرآن حفظ کرنے کے مؤثر طریقے'
        : 'Effective techniques for Quran memorization',
      youtubeId: 'cARSt51f3Wk',
      thumbnail: 'https://img.youtube.com/vi/cARSt51f3Wk/maxresdefault.jpg',
      duration: '12:45',
      category: isUrdu ? 'حفظ' : 'Hifz',
    },
    {
      id: 7,
      title: isUrdu ? 'دعائیں اور اذکار' : 'Duas and Adhkar',
      description: isUrdu 
        ? 'روزانہ کی اہم دعائیں اور اذکار'
        : 'Important daily supplications and remembrance',
      youtubeId: 'DMuf8FUK-Fo',
      thumbnail: 'https://img.youtube.com/vi/DMuf8FUK-Fo/maxresdefault.jpg',
      duration: '9:55',
      category: isUrdu ? 'دعائیں' : 'Duas',
    },
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      <PageHero 
        title={isUrdu ? 'اسلامی ویڈیوز' : 'Islamic Videos'}
        subtitle={isUrdu 
          ? 'ہماری تعلیمی ویڈیوز دیکھیں اور اسلامی علم حاصل کریں'
          : 'Watch our educational videos and gain Islamic knowledge'}
      />

      <section className="py-16 px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">play_circle</span>
            <h2 className={`text-3xl font-bold text-navy ${isUrdu ? 'urdu-font-2xl' : ''}`}>
              {isUrdu ? 'ہماری ویڈیوز' : 'Our Videos'}
            </h2>
          </div>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isUrdu ? 'urdu-font-base' : ''}`}>
            {isUrdu 
              ? 'ہماری تعلیمی ویڈیوز دیکھیں جو آپ کو قرآن اور اسلامی تعلیمات سیکھنے میں مدد کریں گی۔'
              : 'Watch our educational videos that will help you learn Quran and Islamic teachings.'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 100}>
              <div 
                onClick={() => openVideo(video)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-1 ${isUrdu ? 'urdu-font-lg' : ''}`}>
                    {video.title}
                  </h3>
                  <p className={`text-gray-500 text-sm line-clamp-2 ${isUrdu ? 'urdu-font-sm' : ''}`}>
                    {video.description}
                  </p>

                  {/* Watch Now Button */}
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span className={isUrdu ? 'urdu-font-sm' : ''}>{isUrdu ? 'ابھی دیکھیں' : 'Watch Now'}</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <AnimatedSection delay={700}>
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isUrdu ? 'urdu-font-xl' : ''}`}>
                {isUrdu ? 'ہمارا یوٹیوب چینل سبسکرائب کریں' : 'Subscribe to Our YouTube Channel'}
              </h3>
              <p className={`text-white/80 mb-6 ${isUrdu ? 'urdu-font-base' : ''}`}>
                {isUrdu 
                  ? 'مزید ویڈیوز کے لیے ہمارا یوٹیوب چینل سبسکرائب کریں اور نوٹیفیکیشنز آن کریں۔'
                  : 'Subscribe to our YouTube channel for more videos and turn on notifications.'}
              </p>
              <button 
                onClick={handleSubscribe}
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <span className="material-symbols-outlined">subscriptions</span>
                <span>{isUrdu ? 'سبسکرائب کریں' : 'Subscribe Now'}</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeThankYou}
        >
          <div 
            className="relative bg-white rounded-3xl p-8 max-w-md text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeThankYou}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <span className="material-symbols-outlined text-white text-4xl">favorite</span>
            </div>

            {/* Thank You Message */}
            <h3 className={`text-2xl font-bold text-navy mb-3 ${isUrdu ? 'urdu-font-xl' : ''}`}>
              {isUrdu ? 'سبسکرائب کرنے کا شکریہ!' : 'Thank You for Subscribing!'}
            </h3>
            <p className={`text-gray-600 mb-4 ${isUrdu ? 'urdu-font-base' : ''}`}>
              {isUrdu 
                ? 'آپ کی حمایت کا شکریہ! آپ کو یوٹیوب پر بھیجا جا رہا ہے...'
                : 'We appreciate your support! Redirecting you to YouTube...'}
            </p>

            {/* Loading Animation */}
            <div className="flex items-center justify-center gap-2 text-red-500">
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              <span className={`text-sm ${isUrdu ? 'urdu-font-sm' : ''}`}>
                {isUrdu ? 'ری ڈائریکٹ ہو رہا ہے...' : 'Redirecting...'}
              </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full opacity-50"></div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Video Player */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gray-900">
              <h3 className={`text-white font-bold text-lg ${isUrdu ? 'urdu-font-lg' : ''}`}>{selectedVideo.title}</h3>
              <p className={`text-gray-400 text-sm ${isUrdu ? 'urdu-font-sm' : ''}`}>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CoursesSection from '../components/CoursesSection';
import HowItWorks from '../components/HowItWorks';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

// Why Choose Us Section
const WhyChooseUs = () => {
  const { isUrdu } = useLanguage();
  
  const reasons = isUrdu ? [
    {
      icon: 'verified',
      title: 'مصدقہ اساتذہ',
      description: 'ہمارے تمام اساتذہ اجازت یافتہ ہیں اور برسوں کا تدریسی تجربہ رکھتے ہیں۔',
    },
    {
      icon: 'groups',
      title: 'مرد و خواتین اساتذہ',
      description: 'آرام دہ تعلیم کے لیے الگ مستند مرد اور خواتین اساتذہ دستیاب ہیں۔',
    },
    {
      icon: 'schedule',
      title: 'لچکدار اوقات',
      description: 'اپنے شیڈول کے مطابق کلاس کا وقت منتخب کریں۔ دنیا بھر میں 24/7 دستیاب۔',
    },
    {
      icon: 'translate',
      title: 'دو لسانی تدریس',
      description: 'بہتر سمجھ کے لیے انگریزی اور اردو دونوں زبانوں میں کلاسز۔',
    },
    {
      icon: 'devices',
      title: 'کہیں بھی سیکھیں',
      description: 'کسی بھی آلے سے کلاسز میں شرکت کریں - کمپیوٹر، ٹیبلیٹ، یا موبائل۔',
    },
    {
      icon: 'event_busy',
      title: 'جمعہ چھٹی',
      description: 'ہفتے میں ۶ دن کلاسز۔ جمعہ کا دن چھٹی کا دن ہے۔',
    },
  ] : [
    {
      icon: 'verified',
      title: 'Certified Teachers',
      description: 'All our teachers are certified with Ijazah and have years of teaching experience.',
    },
    {
      icon: 'groups',
      title: 'Male & Female Teachers',
      description: 'Separate qualified male and female teachers available for comfortable learning.',
    },
    {
      icon: 'schedule',
      title: 'Flexible Timings',
      description: 'Choose class timings that suit your schedule. Available 24/7 worldwide.',
    },
    {
      icon: 'translate',
      title: 'Bilingual Teaching',
      description: 'Classes conducted in both English and Urdu for better understanding.',
    },
    {
      icon: 'devices',
      title: 'Learn Anywhere',
      description: 'Access classes from any device - computer, tablet, or smartphone.',
    },
    {
      icon: 'event_busy',
      title: 'Friday Holiday',
      description: '6 days a week classes. Friday is a holiday for all students.',
    },
  ];

  return (
    <section className="py-16 px-4" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-navy">
          {isUrdu ? 'ہمیں کیوں چنیں' : 'Why Choose Us'}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          {isUrdu 
            ? 'ہم جدید تدریسی طریقوں اور روایتی اسلامی اقدار کے ساتھ بہترین قرآنی تعلیم فراہم کرنے کے لیے پرعزم ہیں۔'
            : 'We are committed to providing the best Quranic education with modern teaching methods and traditional Islamic values.'}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-primary/20 shadow-sm hover-lift h-full">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">{reason.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">{reason.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{reason.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

// Testimonials Carousel
const TestimonialsCarousel = () => {
  const { isUrdu } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      quote: isUrdu 
        ? "انفرادی کلاسز نے میرے بیٹے کی ترقی میں حیرت انگیز تبدیلی لائی ہے۔ استاد صبر والے اور انتہائی مستند ہیں۔"
        : "The one-on-one classes have been a game-changer for my son's progress. The teacher is patient and highly qualified.",
      name: 'Ahmed Raza',
      role: isUrdu ? 'والدین، کینیڈا' : 'Parent, Canada',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
    {
      id: 2,
      quote: isUrdu 
        ? "لچکدار اوقات کی وجہ سے میں آخرکار اپنا حفظ کا سفر شروع کر سکی۔ مصروف پیشہ ور افراد کے لیے انتہائی سفارش!"
        : "The flexible timings made it possible for me to finally start my Hifz journey. Highly recommended for busy professionals!",
      name: 'Fatima Ali',
      role: isUrdu ? 'طالبہ، برطانیہ' : 'Student, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
    {
      id: 3,
      quote: isUrdu 
        ? "میری بیٹی نے صرف 3 ماہ میں بہت ترقی کی ہے۔ خاتون استانی بہترین اور بہت حوصلہ افزا ہیں۔"
        : "My daughter has improved so much in just 3 months. The female teacher is excellent and very encouraging.",
      name: 'Sarah Khan',
      role: isUrdu ? 'والدین، امریکہ' : 'Parent, USA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
    {
      id: 4,
      quote: isUrdu 
        ? "بہترین آن لائن قرآن اکیڈمی! تجوید کورس نے میری تلاوت کو کامل بنانے میں مدد کی۔ جزاک اللہ خیر!"
        : "Best online Quran academy! The Tajweed course helped me perfect my recitation. JazakAllah Khair!",
      name: 'Omar Hassan',
      role: isUrdu ? 'طالب علم، آسٹریلیا' : 'Student, Australia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-white to-gold/10" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-navy">
          {isUrdu ? 'ہمارے طلباء کی آراء' : 'What Our Students Say'}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          {isUrdu 
            ? 'ہمارے طلباء اور والدین سے ان کے سیکھنے کے تجربے کے بارے میں سنیں۔'
            : 'Hear from our students and parents about their learning experience.'}
        </p>
      </AnimatedSection>

      {/* Desktop: 4 cards grid */}
      <div className="hidden lg:grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={testimonial.id} delay={index * 100}>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-primary/10 hover-lift h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
              <div className={`flex items-center mt-6 pt-4 border-t border-gray-100 ${isUrdu ? 'flex-row-reverse' : ''}`}>
                <img 
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className={isUrdu ? 'mr-3 text-right' : 'ml-3'}>
                  <p className="font-bold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Mobile/Tablet: Carousel */}
      <div className="lg:hidden max-w-md mx-auto">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${isUrdu ? currentIndex * 100 : -currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-primary/10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className={`flex items-center mt-6 pt-4 border-t border-gray-100 ${isUrdu ? 'flex-row-reverse' : ''}`}>
                    <img 
                      className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className={isUrdu ? 'mr-3 text-right' : 'ml-3'}>
                      <p className="font-bold text-navy">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust Badges Section
const TrustBadges = () => {
  const { isUrdu } = useLanguage();
  
  const badges = isUrdu ? [
    { icon: 'verified_user', text: 'مصدقہ اساتذہ' },
    { icon: 'security', text: 'محفوظ تعلیم' },
    { icon: 'support_agent', text: '24/7 سپورٹ' },
    { icon: 'workspace_premium', text: 'معیاری تعلیم' },
  ] : [
    { icon: 'verified_user', text: 'Certified Teachers' },
    { icon: 'security', text: 'Safe Learning' },
    { icon: 'support_agent', text: '24/7 Support' },
    { icon: 'workspace_premium', text: 'Quality Education' },
  ];

  return (
    <section 
      className="py-8"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw', backgroundColor: '#1A237E' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-white/80 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="material-symbols-outlined text-primary text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section with better colors
const CTASection = () => {
  const { isUrdu } = useLanguage();
  
  return (
    <section className="py-16 px-4" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection>
        <div 
          className="max-w-4xl mx-auto rounded-2xl p-10 text-center text-white relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #11d452 0%, #0d9e3d 50%, #087a2f 100%)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              {isUrdu ? 'آج ہی اپنا قرآنی سفر شروع کریں' : 'Start Your Quranic Journey Today'}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/90">
              {isUrdu 
                ? 'دنیا بھر کے ہزاروں طلباء میں شامل ہوں۔ اپنی مفت ٹرائل کلاس کے لیے ابھی رجسٹر کریں۔'
                : 'Join thousands of students from around the world. Register now for your free trial class and experience our teaching firsthand.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                to="/registration"
                className="flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-primary shadow-lg hover:scale-105 transition-transform"
              >
                {isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now'}
              </Link>
              <a 
                href="https://wa.me/919866763270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-lg bg-white/20 border-2 border-white px-8 text-base font-bold text-white shadow-lg hover:bg-white/30 transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                {isUrdu ? 'واٹس ایپ پر رابطہ' : 'Contact on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const HomePage = () => {
  const { isUrdu } = useLanguage();
  
  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      <HeroSection />
      <TrustBadges />
      <FeatureSection />
      <WhyChooseUs />
      <CoursesSection />
      <HowItWorks />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
};

export default HomePage;

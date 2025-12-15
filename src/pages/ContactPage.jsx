import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const contactCards = [
  {
    id: 1,
    icon: 'chat',
    title: 'WhatsApp',
    info: '+91 98667 63270',
    color: 'bg-green-500',
  },
  {
    id: 2,
    icon: 'location_on',
    title: 'Location',
    info: 'Online - Worldwide',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    icon: 'mail',
    title: 'Email',
    info: 'info@quranacademy.com',
    color: 'bg-purple-500',
  },
];

const ContactPage = () => {
  const { t, isUrdu } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', contact: '', subject: '', message: '' });
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <PageHero 
        title={t.contact.title}
        titleUrdu={isUrdu ? '' : 'ہم سے رابطہ کریں'}
        subtitle={t.contact.subtitle}
        subtitleUrdu={isUrdu ? '' : 'ہمیں آپ سے سن کر خوشی ہوگی! واٹس ایپ، فارم، یا ای میل کے ذریعے رابطہ کریں۔'}
      />

      <div className="py-12 md:py-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <AnimatedSection key={card.id} delay={index * 100}>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-primary/20 hover-lift">
                <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-white text-2xl">{card.icon}</span>
                </div>
                <div>
                  <p className="text-gray-800 text-base font-bold">{card.title}</p>
                  <p className="text-gray-600 text-sm">{card.info}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Two Column Layout - Image and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Image */}
          <AnimatedSection animation="fade-left" className="flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&h=400&fit=crop&q=80"
                alt="Student learning Quran online"
                className="w-full h-64 object-cover"
              />
            </div>
            
            {/* Quick Contact Info */}
            <AnimatedSection delay={200}>
              <div className="bg-primary/5 rounded-xl p-6 hover-lift">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span>Available 24/7 for WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">language</span>
                    <span>English & Urdu Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">support_agent</span>
                    <span>Response within 24 hours</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Map or Another Image */}
            <AnimatedSection delay={300}>
              <div className="rounded-xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=300&fit=crop&q=80"
                  alt="Beautiful mosque interior"
                  className="w-full h-48 object-cover"
                />
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Column - Contact Form */}
          <AnimatedSection animation="fade-right">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "'Times New Roman', serif" }} dir="rtl">
                ہمیں ایک پیغام بھیجیں
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="name">
                    Full Name / پورا نام
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="contact">
                    Email or WhatsApp
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="subject">
                    Subject / موضوع
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="message">
                    Your Message / آپ کا پیغام
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary text-white text-base font-bold hover:scale-105 transition-transform"
                  type="submit"
                >
                  <span>Submit</span>
                  <span style={{ fontFamily: "'Times New Roman', serif" }}>| جمع کرائیں</span>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919866763270" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-all z-40"
        >
          <span className="material-symbols-outlined text-white text-3xl">chat</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

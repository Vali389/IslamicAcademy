import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

// Import PDFs
import gunaho from '../assets/gunaho.pdf';
import molanaMujahid from '../assets/Molana Mujahid Sahb last file (2).pdf';
import islamicTeachings from '../assets/islamic-teachings.pdf';
import islamicBook1 from '../assets/islamic-book-1.pdf';
import islamicBook2 from '../assets/islamic-book-2.pdf';
import islamicBook3 from '../assets/islamic-book-3.pdf';
import islamicBook4 from '../assets/islamic-book-4.pdf';
import islamicBook5 from '../assets/islamic-book-5.pdf';
import islamicBook6 from '../assets/islamic-book-6.pdf';

const BooksPage = () => {
  const { isUrdu } = useLanguage();
  const [downloadingId, setDownloadingId] = useState(null);

  const books = [
    {
      id: 1,
      name: isUrdu ? 'گناہوں کی معافی' : 'Gunaho (Forgiveness of Sins)',
      nameUrdu: 'گناہوں کی معافی',
      description: isUrdu 
        ? 'گناہوں سے توبہ اور معافی کے بارے میں ایک اہم کتاب'
        : 'An important book about repentance and forgiveness of sins',
      file: gunaho,
      fileName: 'gunaho.pdf',
      icon: 'auto_stories',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      name: isUrdu ? 'مولانا مجاہد صاحب کی تحریر' : 'Molana Mujahid Sahb',
      nameUrdu: 'مولانا مجاہد صاحب',
      description: isUrdu 
        ? 'مولانا مجاہد صاحب کی آخری تحریر'
        : 'Final writings of Molana Mujahid Sahb',
      file: molanaMujahid,
      fileName: 'Molana-Mujahid-Sahb.pdf',
      icon: 'menu_book',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      name: isUrdu ? 'اسلامی تعلیمات - حصہ ۱' : 'Islamic Teachings - Part 1',
      nameUrdu: 'اسلامی تعلیمات',
      description: isUrdu 
        ? 'قرآن و حدیث کی روشنی میں اسلامی تعلیمات'
        : 'Islamic teachings in the light of Quran and Hadith',
      file: islamicTeachings,
      fileName: 'Islamic-Teachings-1.pdf',
      icon: 'local_library',
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 4,
      name: isUrdu ? 'نماز کا طریقہ' : 'Method of Prayer',
      nameUrdu: 'نماز کا طریقہ',
      description: isUrdu 
        ? 'نماز کے صحیح طریقے کی مکمل رہنمائی'
        : 'Complete guide to the correct method of prayer',
      file: islamicBook1,
      fileName: 'Method-of-Prayer.pdf',
      icon: 'mosque',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 5,
      name: isUrdu ? 'تجوید کے قواعد' : 'Tajweed Rules',
      nameUrdu: 'تجوید کے قواعد',
      description: isUrdu 
        ? 'قرآن پاک کی صحیح تلاوت کے قواعد'
        : 'Rules for correct recitation of Holy Quran',
      file: islamicBook2,
      fileName: 'Tajweed-Rules.pdf',
      icon: 'record_voice_over',
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 6,
      name: isUrdu ? 'دعاؤں کا مجموعہ' : 'Collection of Duas',
      nameUrdu: 'دعاؤں کا مجموعہ',
      description: isUrdu 
        ? 'روزمرہ کی اہم دعائیں'
        : 'Important daily prayers and supplications',
      file: islamicBook3,
      fileName: 'Collection-of-Duas.pdf',
      icon: 'volunteer_activism',
      color: 'from-cyan-500 to-sky-600',
    },
    {
      id: 7,
      name: isUrdu ? 'سیرت النبی ﷺ' : 'Life of Prophet ﷺ',
      nameUrdu: 'سیرت النبی ﷺ',
      description: isUrdu 
        ? 'نبی کریم ﷺ کی مختصر سیرت'
        : 'Brief biography of Prophet Muhammad ﷺ',
      file: islamicBook4,
      fileName: 'Life-of-Prophet.pdf',
      icon: 'history_edu',
      color: 'from-lime-500 to-green-600',
    },
    {
      id: 8,
      name: isUrdu ? 'رمضان گائیڈ' : 'Ramadan Guide',
      nameUrdu: 'رمضان گائیڈ',
      description: isUrdu 
        ? 'رمضان المبارک کی مکمل رہنمائی'
        : 'Complete guide for the blessed month of Ramadan',
      file: islamicBook5,
      fileName: 'Ramadan-Guide.pdf',
      icon: 'nights_stay',
      color: 'from-fuchsia-500 to-purple-600',
    },
    {
      id: 9,
      name: isUrdu ? 'حج و عمرہ گائیڈ' : 'Hajj & Umrah Guide',
      nameUrdu: 'حج و عمرہ گائیڈ',
      description: isUrdu 
        ? 'حج اور عمرہ کی مکمل رہنمائی'
        : 'Complete guide for Hajj and Umrah',
      file: islamicBook6,
      fileName: 'Hajj-Umrah-Guide.pdf',
      icon: 'explore',
      color: 'from-teal-500 to-emerald-600',
    },
  ];

  const handleDownload = async (book) => {
    setDownloadingId(book.id);
    
    // Simulate download delay for animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create download link
    const link = document.createElement('a');
    link.href = book.file;
    link.download = book.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadingId(null);
  };

  const handleView = (book) => {
    window.open(book.file, '_blank');
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      <PageHero 
        title={isUrdu ? 'اسلامی کتب لائبریری' : 'Islamic Books Library'}
        subtitle={isUrdu 
          ? 'ہماری مفت اسلامی کتب ڈاؤن لوڈ کریں اور اپنے علم میں اضافہ کریں'
          : 'Download our free Islamic books and enhance your knowledge'}
      />

      <section className="py-16 px-4">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">library_books</span>
            <h2 className={`text-3xl font-bold text-navy ${isUrdu ? 'urdu-font-2xl' : ''}`}>
              {isUrdu ? 'دستیاب کتب' : 'Available Books'}
            </h2>
          </div>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isUrdu ? 'urdu-font-base' : ''}`}>
            {isUrdu 
              ? 'نیچے دی گئی کتب کو پڑھیں یا ڈاؤن لوڈ کریں۔ تمام کتب مفت ہیں۔'
              : 'Read or download the books below. All books are free of charge.'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <AnimatedSection key={book.id} delay={index * 100}>
              <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${book.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-2 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-20 h-20 border-2 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-4xl">{book.icon}</span>
                  </div>
                  
                  {/* PDF Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    PDF
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors ${isUrdu ? 'urdu-font-lg' : ''}`}>
                    {book.name}
                  </h3>
                  <p className={`text-gray-500 text-sm mb-4 line-clamp-2 ${isUrdu ? 'urdu-font-sm' : ''}`}>
                    {book.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(book)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary/10 text-primary rounded-xl font-medium hover:bg-primary/20 transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">visibility</span>
                      <span className={isUrdu ? 'urdu-font-sm' : ''}>{isUrdu ? 'پڑھیں' : 'View'}</span>
                    </button>
                    <button
                      onClick={() => handleDownload(book)}
                      disabled={downloadingId === book.id}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all ${
                        downloadingId === book.id ? 'animate-pulse' : 'hover:scale-105'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-lg ${downloadingId === book.id ? 'animate-spin' : ''}`}>
                        {downloadingId === book.id ? 'progress_activity' : 'download'}
                      </span>
                      <span className={isUrdu ? 'urdu-font-sm' : ''}>
                        {downloadingId === book.id 
                          ? (isUrdu ? 'ڈاؤن لوڈ...' : 'Loading...') 
                          : (isUrdu ? 'ڈاؤن لوڈ' : 'Download')}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl pointer-events-none transition-all duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Info Banner */}
        <AnimatedSection delay={800}>
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center border border-primary/20">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">info</span>
            <h3 className={`text-xl font-bold text-navy mb-2 ${isUrdu ? 'urdu-font-xl' : ''}`}>
              {isUrdu ? 'مزید کتب جلد آ رہی ہیں!' : 'More Books Coming Soon!'}
            </h3>
            <p className={`text-gray-600 ${isUrdu ? 'urdu-font-base' : ''}`}>
              {isUrdu 
                ? 'ہم مسلسل نئی اسلامی کتب شامل کر رہے ہیں۔ اپ ڈیٹس کے لیے ہم سے رابطے میں رہیں۔'
                : 'We are continuously adding new Islamic books. Stay connected with us for updates.'}
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default BooksPage;

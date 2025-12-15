import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const isUrdu = language === 'UR';

  // Translation content
  const translations = {
    // Header
    academyName: isUrdu ? 'نصبۃ اکیڈمی' : 'NISBATH ACADEMY',
    nav: {
      home: isUrdu ? 'ہوم' : 'Home',
      about: isUrdu ? 'ہمارے بارے میں' : 'About',
      courses: isUrdu ? 'کورسز' : 'Courses',
      fees: isUrdu ? 'فیس' : 'Fees',
      contact: isUrdu ? 'رابطہ' : 'Contact',
      login: isUrdu ? 'لاگ ان' : 'Login',
      bookDemo: isUrdu ? 'مفت ڈیمو بک کریں' : 'Book Free Demo',
    },
    
    // Hero Section
    hero: {
      title: isUrdu ? 'مستند علماء کے ساتھ آن لائن قرآن سیکھیں' : 'Learn Qur\'an Online With Qualified Ulema',
      subtitle: isUrdu ? 'ہماری عالمی برادری میں شامل ہوں اور مستند علماء کے ساتھ قرآنی تعلیم کا ایک تبدیلی کا سفر شروع کریں، اپنے گھر کے آرام سے۔' : 'Join our global community and embark on a transformative journey of Quranic learning with certified scholars, from the comfort of your home.',
      cta1: isUrdu ? 'مفت ڈیمو کلاس بک کریں' : 'Book Free Demo Class',
      cta2: isUrdu ? 'واٹس ایپ پر رابطہ کریں' : 'Contact on WhatsApp',
      trusted: isUrdu ? '5000+ طلباء کا اعتماد' : 'Trusted by 5000+ Students',
      qualified: isUrdu ? 'مستند علماء' : 'Qualified Ulema',
    },

    // Features
    features: {
      title: isUrdu ? 'کلیدی فوائد' : 'Key Benefits',
      subtitle: isUrdu ? 'ہمارے تجربہ کار اور مستند اساتذہ کے ساتھ سیکھنے کے فوائد دریافت کریں جو آپ کی روحانی ترقی کے لیے وقف ہیں۔' : 'Discover the advantages of learning with our qualified and experienced tutors who are dedicated to your spiritual growth.',
      items: [
        {
          title: isUrdu ? 'مستند علماء' : 'Qualified Ulema',
          description: isUrdu ? 'تصدیق شدہ اور تجربہ کار اسلامی علماء سے سیکھیں۔' : 'Learn from certified and experienced Islamic scholars.',
        },
        {
          title: isUrdu ? 'لچکدار اوقات' : 'Flexible Timings',
          description: isUrdu ? 'اپنی سہولت کے مطابق کلاسز شیڈول کریں، 24/7۔' : 'Schedule classes at your convenience, 24/7.',
        },
        {
          title: isUrdu ? 'انفرادی کلاسز' : 'One-on-One Classes',
          description: isUrdu ? 'مخصوص ٹیوٹرز کے ساتھ ذاتی توجہ حاصل کریں۔' : 'Get personalized attention with dedicated tutors.',
        },
        {
          title: isUrdu ? 'بچوں اور بڑوں کے لیے' : 'For Kids & Adults',
          description: isUrdu ? 'تمام عمر گروپوں اور سطحوں کے لیے کورسز۔' : 'Courses designed for all age groups and levels.',
        },
      ],
    },

    // Courses
    courses: {
      title: isUrdu ? 'نمایاں کورسز' : 'Featured Courses',
      subtitle: isUrdu ? 'ہمارے کورسز دریافت کریں، جو ہر طالب علم کی ضروریات کو پورا کرنے کے لیے تیار کیے گئے ہیں۔' : 'Explore our wide range of courses, tailored to meet the needs of every student on their journey with the Quran.',
      viewDetails: isUrdu ? 'تفصیلات دیکھیں' : 'View Details',
      registerNow: isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now',
      items: [
        {
          title: isUrdu ? 'ناظرہ قرآن' : 'Nazira Quran',
          description: isUrdu 
            ? 'قرآن مجید کو صحیح تلفظ کے ساتھ پڑھنا سیکھیں۔ یہ کورس بنیادی عربی حروف، ان کی آوازوں، اور قرآنی الفاظ کی صحیح ادائیگی پر مشتمل ہے۔ ہمارے تجربہ کار اساتذہ آپ کو قدم بہ قدم رہنمائی کریں گے۔ جمعہ کا دن چھٹی ہے۔'
            : 'Learn to read the Holy Quran with proper pronunciation and basic Tajweed rules. This comprehensive course covers Arabic alphabets, their sounds, and correct articulation of Quranic words. Our experienced teachers guide you step by step from basics to fluent reading. Perfect for beginners of all ages. Friday is a holiday.',
          level: isUrdu ? 'ابتدائی' : 'Beginner',
        },
        {
          title: isUrdu ? 'حفظ قرآن' : 'Hifz (Memorization)',
          description: isUrdu 
            ? 'قرآن مجید حفظ کریں ہمارے منظم پروگرام کے ساتھ۔ روزانہ نئی آیات یاد کرنا، پرانے سبق کا دہرانا، اور ہفتہ وار جائزہ شامل ہے۔ ہر طالب علم کے لیے ذاتی منصوبہ بنایا جاتا ہے۔ جمعہ چھٹی۔'
            : 'Memorize the Holy Quran with our structured Hifz program. This course includes daily memorization of new verses, revision of previous lessons, and weekly assessments to track progress. Each student receives a personalized memorization plan based on their pace and ability. Friday is a holiday.',
          level: isUrdu ? 'تمام سطحیں' : 'All Levels',
        },
        {
          title: isUrdu ? 'تجوید' : 'Tajweed Rules',
          description: isUrdu 
            ? 'قرآن کی تلاوت کے فن میں مہارت حاصل کریں۔ مخارج الحروف، صفات، نون ساکنہ اور میم ساکنہ کے احکام، مد کی اقسام سب سکھائی جاتی ہیں۔ جمعہ چھٹی ہے۔'
            : 'Master the art of Quranic recitation with proper Tajweed rules. Learn about Makharij (articulation points), Sifaat (characteristics), rules of Noon Sakinah, Meem Sakinah, and various types of Madd. Improve your recitation to sound beautiful and accurate. Friday is a holiday.',
          level: isUrdu ? 'درمیانی' : 'Intermediate',
        },
        {
          title: isUrdu ? 'قاری کورس' : 'Qari Course',
          description: isUrdu 
            ? 'ایک ماہر قاری بنیں۔ اعلی درجے کی تجوید، مختلف قراءات، اور خوبصورت تلاوت کی تکنیک سیکھیں۔ یہ کورس ان لوگوں کے لیے ہے جو تلاوت میں کمال حاصل کرنا چاہتے ہیں۔ جمعہ چھٹی۔'
            : 'Become an expert reciter of the Holy Quran. This advanced course covers sophisticated Tajweed rules, different Qiraat styles, and beautiful recitation techniques. Learn the art of melodious recitation while maintaining accuracy. Ideal for those who want to achieve excellence in Quran recitation. Friday is a holiday.',
          level: isUrdu ? 'اعلی' : 'Advanced',
        },
        {
          title: isUrdu ? 'عالم کورس' : 'Alim Course',
          description: isUrdu 
            ? 'اسلامی علوم کا گہرائی سے مطالعہ کریں۔ تفسیر، حدیث، فقہ، اور عربی ادب شامل ہے۔ یہ کورس ان لوگوں کے لیے ہے جو اسلامی علوم میں گہری سمجھ حاصل کرنا چاہتے ہیں۔ جمعہ چھٹی۔'
            : 'In-depth study of Islamic sciences including Tafseer, Hadith, Fiqh, and Arabic literature. This comprehensive course is designed for those who want to gain deep understanding of Islamic knowledge. Learn from qualified scholars with traditional ijazah. Friday is a holiday.',
          level: isUrdu ? 'اعلی' : 'Advanced',
        },
        {
          title: isUrdu ? 'عربی گرامر' : 'Arabic Grammar',
          description: isUrdu 
            ? 'قرآن کی زبان سمجھیں۔ نحو، صرف، اور عربی جملوں کی ساخت سیکھیں۔ یہ کورس آپ کو قرآن کو براہ راست عربی میں سمجھنے میں مدد کرے گا۔ بنیادی الفاظ سے لے کر پیچیدہ قواعد تک۔ جمعہ چھٹی۔'
            : 'Understand the language of the Quran. Learn Arabic grammar including Nahw (syntax), Sarf (morphology), and sentence structure. This course helps you understand the Quran directly in Arabic. From basic vocabulary to complex grammatical rules, we cover it all. Friday is a holiday.',
          level: isUrdu ? 'ابتدائی' : 'Beginner',
        },
      ],
    },

    // How it Works
    howItWorks: {
      title: isUrdu ? 'یہ کیسے کام کرتا ہے' : 'How It Works',
      subtitle: isUrdu ? 'تین آسان مراحل میں اپنا سیکھنے کا سفر شروع کریں۔' : 'Start your learning journey in three simple steps.',
      steps: [
        {
          title: isUrdu ? 'رجسٹر کریں' : 'Register',
          description: isUrdu ? 'ایک سادہ فارم بھریں اور ہماری اکیڈمی میں شامل ہوں۔' : 'Fill out a simple form to create your account and join our academy.',
        },
        {
          title: isUrdu ? 'مفت ڈیمو لیں' : 'Take a Free Demo',
          description: isUrdu ? 'ہمارے ماہر ٹیوٹر کے ساتھ مفت ڈیمو کلاس شیڈول کریں۔' : 'Schedule a free one-on-one demo class with one of our expert tutors.',
        },
        {
          title: isUrdu ? 'باقاعدہ کلاسز شروع کریں' : 'Start Regular Classes',
          description: isUrdu ? 'مطمئن ہونے کے بعد، اپنا شیڈول طے کریں اور سیکھنا شروع کریں۔' : 'Once satisfied, confirm your schedule and begin your learning journey.',
        },
      ],
    },

    // Testimonials
    testimonials: {
      title: isUrdu ? 'ہمارے طلباء کی آراء' : 'What Our Students Say',
      subtitle: isUrdu ? 'دنیا بھر کے خاندانوں کا اعتماد ہمارے لیے اعزاز ہے۔' : 'We are honored to have the trust of families from around the world.',
    },

    // Fees
    fees: {
      title: isUrdu ? 'فیس کا ڈھانچہ' : 'Our Fee Structure',
      subtitle: isUrdu ? 'آپ کے لیے سستی، لچکدار، اور قابل قدر قرآنی تعلیم۔' : 'Affordable, flexible, and valuable Quranic education tailored for you.',
      perMonth: isUrdu ? 'فی ماہ' : '/ month',
      perYear: isUrdu ? 'فی سال' : '/ year',
      fullCourse: isUrdu ? 'مکمل کورس' : 'Full Course',
      holiday: isUrdu ? 'جمعہ، ہفتہ چھٹی' : 'Fri & Sat Holiday',
    },

    // Contact
    contact: {
      title: isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us',
      subtitle: isUrdu ? 'ہمیں آپ سے سن کر خوشی ہوگی! واٹس ایپ، فارم، یا ای میل کے ذریعے رابطہ کریں۔' : 'We\'d love to hear from you! Reach out via WhatsApp, the form below, or email us.',
      sendMessage: isUrdu ? 'ہمیں پیغام بھیجیں' : 'Send us a Message',
      fullName: isUrdu ? 'پورا نام' : 'Full Name',
      email: isUrdu ? 'ای میل یا واٹس ایپ' : 'Email or WhatsApp',
      subject: isUrdu ? 'موضوع' : 'Subject',
      message: isUrdu ? 'آپ کا پیغام' : 'Your Message',
      submit: isUrdu ? 'جمع کرائیں' : 'Submit',
    },

    // About
    about: {
      title: isUrdu ? 'ہمارے بارے میں' : 'About Us',
      subtitle: isUrdu ? 'نصبۃ اکیڈمی کے بارے میں جانیں اور ہمارا مشن دریافت کریں۔' : 'Learn about Nisbath Academy and discover our mission.',
    },

    // Registration
    registration: {
      title: isUrdu ? 'رجسٹریشن' : 'Registration',
      subtitle: isUrdu ? 'آج ہی اپنا قرآنی سفر شروع کریں۔ مفت ٹرائل کلاس کے لیے رجسٹر کریں۔' : 'Start your Quranic journey today. Register for a free trial class.',
    },

    // Footer
    footer: {
      description: isUrdu ? 'آن لائن قرآنی تعلیم میں آپ کا قابل اعتماد ساتھی۔ مستند مرد و خواتین اساتذہ سے صحیح تجوید کے ساتھ قرآن پاک سیکھیں۔' : 'Your trusted partner in online Quranic education. Learn the Holy Quran with proper Tajweed from qualified male and female teachers.',
      quickLinks: isUrdu ? 'فوری لنکس' : 'Quick Links',
      ourCourses: isUrdu ? 'ہمارے کورسز' : 'Our Courses',
      contactUs: isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us',
      copyright: isUrdu ? '© 2024 نصبۃ اکیڈمی۔ جملہ حقوق محفوظ ہیں۔' : '© 2024 NISBATH ACADEMY. All Rights Reserved.',
    },

    // CTA
    cta: {
      title: isUrdu ? 'آج ہی قرآن کے ساتھ اپنے مبارک سفر کا آغاز کریں' : 'Begin Your Blessed Journey With The Quran Today',
      subtitle: isUrdu ? 'دنیا بھر کے سینکڑوں طلباء میں شامل ہوں۔ اپنی مفت ٹرائل کلاس کے لیے ابھی رجسٹر کریں۔' : 'Join hundreds of students from across the globe. Register now for your free trial class.',
      button: isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now',
    },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, isUrdu, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;


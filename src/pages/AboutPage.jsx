import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { isUrdu } = useLanguage();

  const teachers = isUrdu ? [
    {
      id: 1,
      name: 'احمد علی',
      title: 'تجوید میں اجازت',
      description: 'ایک تجربہ کار استاد جو اپنے طلباء میں قرآن سے محبت پیدا کرنے کے لیے وقف ہیں۔',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      badges: ['حافظ', 'عالم'],
      experience: '15+ سال',
    },
    {
      id: 2,
      name: 'فاطمہ زہرا',
      title: 'اسلامی علوم میں ماسٹرز',
      description: 'خواتین طلباء اور بچوں کو نرم اور صبر والے انداز میں پڑھانے میں ماہر۔',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      badges: ['قاریہ', 'حافظہ'],
      experience: '10+ سال',
    },
    {
      id: 3,
      name: 'یوسف خان',
      title: 'قراءات میں ماہر',
      description: 'مختلف انداز کی قرآنی تلاوت سکھانے کا شوق رکھنے والے معروف قاری۔',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      badges: ['حافظ', 'قاری'],
      experience: '12+ سال',
    },
    {
      id: 4,
      name: 'عائشہ بیگم',
      title: 'قرآنی علوم میں پی ایچ ڈی',
      description: 'اعلی طلباء کے لیے تفسیر اور قرآنی متن کے گہرے معانی پر توجہ دیتی ہیں۔',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
      badges: ['عالمہ', 'پی ایچ ڈی'],
      experience: '20+ سال',
    },
  ] : [
    {
      id: 1,
      name: 'Ahmed Ali',
      title: 'Ijazah in Tajweed',
      description: 'An experienced teacher dedicated to instilling a love for the Quran in his students.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      badges: ['Hafiz', 'Alim'],
      experience: '15+ years',
    },
    {
      id: 2,
      name: 'Fatima Zahra',
      title: 'Masters in Islamic Studies',
      description: 'Specializes in teaching female students and children with a gentle and patient approach.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      badges: ['Qaria', 'Hafiza'],
      experience: '10+ years',
    },
    {
      id: 3,
      name: 'Yusuf Khan',
      title: 'Expert in Qira\'at',
      description: 'A renowned Qari with a passion for teaching the different styles of Quranic recitation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      badges: ['Hafiz', 'Qari'],
      experience: '12+ years',
    },
    {
      id: 4,
      name: 'Aisha Begum',
      title: 'PhD in Quranic Sciences',
      description: 'Focuses on Tafsir and the deeper meanings of the Quranic text for advanced students.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
      badges: ['Alimah', 'PhD'],
      experience: '20+ years',
    },
  ];

  const values = isUrdu ? [
    {
      icon: 'auto_stories',
      title: 'مستند تعلیم',
      description: 'ہم نسل در نسل منتقل ہونے والے قرآنی تعلیم کے روایتی طریقوں پر عمل کرتے ہیں۔',
    },
    {
      icon: 'favorite',
      title: 'سیکھنے کا جذبہ',
      description: 'ہمارے اساتذہ ہر طالب علم میں قرآن سے محبت پیدا کرنے کے لیے پرجوش ہیں۔',
    },
    {
      icon: 'handshake',
      title: 'طالب علم پر مرکوز',
      description: 'ہر طالب علم منفرد ہے، اور ہم انفرادی ضروریات کو پورا کرنے کے لیے اپنا طریقہ تیار کرتے ہیں۔',
    },
    {
      icon: 'diversity_3',
      title: 'جامع برادری',
      description: 'ہم تمام پس منظر اور مہارت کی سطحوں کے طلباء کا خیرمقدم کرتے ہیں۔',
    },
  ] : [
    {
      icon: 'auto_stories',
      title: 'Authentic Teaching',
      description: 'We follow traditional methods of Quranic education passed down through generations.',
    },
    {
      icon: 'favorite',
      title: 'Passion for Learning',
      description: 'Our teachers are passionate about instilling a love for the Quran in every student.',
    },
    {
      icon: 'handshake',
      title: 'Student-Centered',
      description: 'Every student is unique, and we tailor our approach to meet individual needs.',
    },
    {
      icon: 'diversity_3',
      title: 'Inclusive Community',
      description: 'We welcome students from all backgrounds and skill levels.',
    },
  ];

  const stats = isUrdu ? [
    { value: '10+', label: 'سال کا تجربہ' },
    { value: '5000+', label: 'طلباء کو پڑھایا' },
    { value: '100+', label: 'اہل اساتذہ' },
    { value: '50+', label: 'ممالک میں خدمات' },
  ] : [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Students Taught' },
    { value: '100+', label: 'Qualified Teachers' },
    { value: '50+', label: 'Countries Served' },
  ];

  const learningFeatures = isUrdu ? [
    {
      icon: 'security',
      title: 'محفوظ اور باعزت ماحول',
      description: 'تمام طلباء کے سیکھنے اور بڑھنے کے لیے ایک محفوظ اور حوصلہ افزا جگہ۔',
    },
    {
      icon: 'person',
      title: 'انفرادی توجہ',
      description: 'ہر طالب علم کی رفتار اور ضروریات کے مطابق ذاتی کلاسز۔',
    },
    {
      icon: 'school',
      title: 'اسلامی اصولوں کی پابندی',
      description: 'تمام تدریس اور تعامل اسلامی آداب کے مطابق کیے جاتے ہیں۔',
    },
  ] : [
    {
      icon: 'security',
      title: 'Safe & Respectful Atmosphere',
      description: 'A secure and encouraging space for all students to learn and grow.',
    },
    {
      icon: 'person',
      title: 'One-on-One Attention',
      description: 'Personalized classes to cater to the individual pace and needs of each student.',
    },
    {
      icon: 'school',
      title: 'Adherence to Islamic Principles',
      description: 'All teaching and interactions are conducted in accordance with Islamic etiquette.',
    },
  ];

  const TeacherCard = ({ teacher, index }) => {
    return (
      <AnimatedSection delay={index * 100}>
        <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-200/80 hover-lift h-full">
          <img 
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-primary/20"
            src={teacher.image}
            alt={teacher.name}
          />
          <h4 className="mt-4 text-lg font-bold text-gray-900">{teacher.name}</h4>
          <p className="mt-1 text-sm text-primary font-medium">{teacher.title}</p>
          <p className="text-xs text-gray-500 mt-1">{teacher.experience} {isUrdu ? 'تجربہ' : 'Experience'}</p>
          <p className="mt-2 text-sm text-gray-600">{teacher.description}</p>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {teacher.badges.map((badge, idx) => (
              <span 
                key={idx}
                className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <PageHero 
        title={isUrdu ? 'نصبۃ اکیڈمی کے بارے میں' : 'About NISBATH ACADEMY'}
        titleUrdu={isUrdu ? '' : 'ہماری اکیڈمی کے بارے میں'}
        subtitle={isUrdu 
          ? 'ہم اہل اساتذہ کے ساتھ معیاری آن لائن تعلیم کے ذریعے دنیا بھر کے مسلمانوں تک قرآن پاک کی روشنی پھیلانے کے لیے وقف ہیں۔'
          : 'We are dedicated to spreading the light of the Holy Quran to Muslims around the world through quality online education with qualified teachers.'}
        subtitleUrdu={isUrdu ? '' : 'ہم اہل اساتذہ کے ساتھ معیاری آن لائن تعلیم کے ذریعے دنیا بھر کے مسلمانوں تک قرآن پاک کی روشنی پھیلانے کے لیے وقف ہیں۔'}
      />

      <div className="py-12 md:py-20">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="text-center p-6 bg-primary/5 rounded-xl hover-lift">
                <span className="text-4xl font-black text-primary">{stat.value}</span>
                <p className="text-gray-700 font-medium mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-16 md:mt-24">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              {isUrdu ? 'ہمارا مشن اور وژن' : 'Our Mission & Vision'}
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission Card */}
            <AnimatedSection animation="fade-left">
              <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden border border-gray-200/80 hover-lift h-full">
                <img 
                  className="h-56 w-full object-cover"
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop&q=80"
                  alt="A beautiful mosque interior with intricate geometric patterns"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className={`flex items-center gap-3 mb-3 ${isUrdu ? 'flex-row-reverse' : ''}`}>
                    <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                    <h3 className="text-xl font-bold text-gray-900">{isUrdu ? 'ہمارا مشن' : 'Our Mission'}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">
                    {isUrdu 
                      ? 'ہمارا مشن دنیا بھر کے مسلمانوں تک قرآن پاک کا مستند علم پھیلانا ہے، اسے سب کے لیے سیکھنے اور سمجھنے کے لیے قابل رسائی بنانا۔'
                      : 'Our mission is to spread the authentic knowledge of the Holy Quran to Muslims all over the world, making it accessible for everyone to learn and understand.'}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision Card */}
            <AnimatedSection animation="fade-right">
              <div className="flex flex-col rounded-xl bg-white shadow-sm overflow-hidden border border-gray-200/80 hover-lift h-full">
                <img 
                  className="h-56 w-full object-cover"
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=400&fit=crop&q=80"
                  alt="Close-up of an open Quran with golden light"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className={`flex items-center gap-3 mb-3 ${isUrdu ? 'flex-row-reverse' : ''}`}>
                    <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                    <h3 className="text-xl font-bold text-gray-900">{isUrdu ? 'ہمارا وژن' : 'Our Vision'}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">
                    {isUrdu 
                      ? 'ہمارا وژن اسلامی اور قرآنی تعلیم کے لیے ایک سرکردہ آن لائن مرکز بننا ہے، علم رکھنے والے اور متقی مسلمانوں کی عالمی برادری کو فروغ دینا۔'
                      : 'Our vision is to become a leading online center for Islamic and Quranic education, fostering a global community of knowledgeable and devout Muslims.'}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-16 md:mt-24">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
              {isUrdu ? 'ہماری بنیادی اقدار' : 'Our Core Values'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center p-6 bg-white rounded-xl border border-primary/20 shadow-sm hover-lift h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Islamic Learning Environment Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection animation="fade-left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {isUrdu ? 'ہمارا اسلامی تعلیمی ماحول' : 'Our Islamic Learning Environment'}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {isUrdu 
                    ? 'ہم ایک ایسا تعلیمی ماحول فراہم کرنے کے لیے پرعزم ہیں جو نہ صرف تعلیمی ہو بلکہ روحانی طور پر ترقی دینے والا اور اسلامی اقدار میں جڑا ہو۔'
                    : 'We are committed to providing a learning environment that is not only educational but also spiritually uplifting and rooted in Islamic values.'}
                </p>
                <ul className="mt-8 space-y-6">
                  {learningFeatures.map((feature, index) => (
                    <li key={index} className={`flex items-start ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                      <span className={`material-symbols-outlined text-primary text-2xl ${isUrdu ? 'ml-4' : 'mr-4'} mt-1`}>{feature.icon}</span>
                      <div>
                        <h5 className="font-bold text-gray-900">{feature.title}</h5>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
              <div className="aspect-square lg:aspect-auto lg:h-full relative">
                {/* Background blob */}
                <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <img 
                  className="w-full h-full object-cover rounded-xl shadow-md relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKaRH32TMBXbIje6h7EbJR9YqgZSrrq8VtXKKuFv3juXdsPz3Gv5RTqG3kvSvyGEqKz2w_BxprgaiSTR4opPISLIcz2VhdvkSJrsrnAd2jiH1z2BSz2c7bvk0SgDY2S0viERI9pL4naiZQQtvWZ23oht1sqsHQUG7G3ZIM3S_5ubDrxSC5aCRg8iALHCisV_CYjVChTa8bIdJRnFT0g0BPFG_JG_cuGMyXoxCStDfc2_a9bWXr6n1Dl6Hd4A61UaYJN2JoyP7hKfc"
                  alt="A young student is learning the Quran with a teacher in a serene setting"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="mt-16 md:mt-24">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              {isUrdu ? 'ہمارے معزز اساتذہ' : 'Our Esteemed Teachers'}
            </h2>
            <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
              {isUrdu 
                ? 'انتہائی اہل اور تجربہ کار اساتذہ سے سیکھیں جو اجازت کے حامل ہیں۔'
                : 'Learn from highly qualified and experienced teachers who are certified with Ijazah.'}
            </p>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16 md:mt-24">
          <div className="text-center bg-primary/5 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              {isUrdu ? 'سیکھنا شروع کرنے کے لیے تیار ہیں؟' : 'Ready to Start Learning?'}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {isUrdu 
                ? 'آج ہی ہماری اکیڈمی میں شامل ہوں اور قرآن پاک کو سمجھنے کی طرف اپنا سفر شروع کریں۔'
                : 'Join our academy today and begin your journey towards understanding the Holy Quran.'}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link 
                to="/registration"
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg hover:scale-105 transition-transform"
              >
                {isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now'}
              </Link>
              <Link 
                to="/contact"
                className="flex h-12 items-center justify-center rounded-lg bg-white border border-primary px-8 text-base font-bold text-primary shadow-lg hover:scale-105 transition-transform"
              >
                {isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;

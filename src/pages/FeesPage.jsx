import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const FeesPage = () => {
  const { t, isUrdu } = useLanguage();

  const pricingPlans = [
    {
      id: 1,
      name: isUrdu ? 'ناظرہ قرآن' : 'Nazira Quran',
      price: '₹699',
      period: isUrdu ? 'فی ماہ' : '/month',
      yearlyPrice: '₹6,499',
      yearlyPeriod: isUrdu ? 'فی سال' : '/year',
      popular: false,
      features: isUrdu ? [
        'ہفتے میں ۶ دن (جمعہ چھٹی)',
        'انفرادی کلاسز',
        'مستند اساتذہ',
        'صحیح تلفظ',
        'بنیادی تجوید',
      ] : [
        '6 Days/Week (Friday Holiday)',
        'One-on-One Classes',
        'Qualified Teachers',
        'Correct Pronunciation',
        'Basic Tajweed',
      ],
    },
    {
      id: 2,
      name: isUrdu ? 'تجوید' : 'Tajweed',
      price: '₹699',
      period: isUrdu ? 'فی ماہ' : '/month',
      yearlyPrice: '₹6,499',
      yearlyPeriod: isUrdu ? 'فی سال' : '/year',
      popular: true,
      features: isUrdu ? [
        'ہفتے میں ۶ دن (جمعہ چھٹی)',
        'انفرادی کلاسز',
        'اعلی تجوید کے قواعد',
        'مخارج الحروف',
        'مستند قاری',
      ] : [
        '6 Days/Week (Friday Holiday)',
        'One-on-One Classes',
        'Advanced Tajweed Rules',
        'Articulation Points',
        'Certified Qari',
      ],
    },
    {
      id: 3,
      name: isUrdu ? 'قاری کورس' : 'Qari Course',
      price: '₹699',
      period: isUrdu ? 'فی ماہ' : '/month',
      yearlyPrice: '₹6,499',
      yearlyPeriod: isUrdu ? 'فی سال' : '/year',
      popular: false,
      features: isUrdu ? [
        'ہفتے میں ۶ دن (جمعہ چھٹی)',
        'ماہر قاری سے سیکھیں',
        'تلاوت کا فن',
        'مختلف قراءات',
        'اعلی تجوید',
      ] : [
        '6 Days/Week (Friday Holiday)',
        'Learn from Expert Qari',
        'Art of Recitation',
        'Different Qiraat',
        'Advanced Tajweed',
      ],
    },
    {
      id: 4,
      name: isUrdu ? 'عربی گرامر' : 'Arabic Grammar',
      price: '₹699',
      period: isUrdu ? 'فی ماہ' : '/month',
      yearlyPrice: '₹6,499',
      yearlyPeriod: isUrdu ? 'فی سال' : '/year',
      popular: false,
      features: isUrdu ? [
        'ہفتے میں ۶ دن (جمعہ چھٹی)',
        'نحو اور صرف',
        'جملے کی ساخت',
        'قرآنی الفاظ',
        'بنیادی عربی',
      ] : [
        '6 Days/Week (Friday Holiday)',
        'Nahw & Sarf',
        'Sentence Structure',
        'Quranic Vocabulary',
        'Basic Arabic',
      ],
    },
  ];

  const specialPlans = [
    {
      id: 5,
      name: isUrdu ? 'مکمل حفظ کورس' : 'Complete Hifz Course',
      price: '₹24,999',
      period: isUrdu ? 'مکمل کورس' : 'Full Course',
      popular: true,
      special: true,
      features: isUrdu ? [
        'ہفتے میں ۶ دن (جمعہ چھٹی)',
        'مخصوص حفظ کوچ',
        'ذاتی منصوبہ',
        'ہفتہ وار جائزے',
        'مضبوط یادداشت کی تکنیک',
        'دہرائی کا نظام',
        'سرٹیفکیٹ',
      ] : [
        '6 Days/Week (Friday Holiday)',
        'Dedicated Hifz Coach',
        'Personalized Plan',
        'Weekly Assessments',
        'Strong Memorization Techniques',
        'Revision System',
        'Certificate on Completion',
      ],
    },
  ];

  const PricingCard = ({ plan, index }) => {
    const isPopular = plan.popular;
    const isSpecial = plan.special;
    
    return (
      <AnimatedSection delay={index * 150} animation="scale-up">
        <div className={`relative flex flex-col gap-5 rounded-xl ${
          isPopular ? 'border-2 border-primary shadow-xl' : 'border border-primary/20 shadow-sm hover-lift'
        } ${isSpecial ? 'bg-gradient-to-br from-primary/5 to-primary/10' : 'bg-white'} p-6 transition-shadow h-full`}>
          {isPopular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <p className="text-xs font-bold uppercase tracking-wider rounded-full bg-primary text-white px-4 py-1">
                {isUrdu ? 'سب سے زیادہ مقبول' : 'Most Popular'}
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-900">
              {plan.name}
            </h3>
            <p className="flex items-baseline gap-2 text-gray-900">
              <span className="text-4xl font-black tracking-tight text-primary">{plan.price}</span>
              <span className="text-base font-semibold text-gray-600">{plan.period}</span>
            </p>
            {plan.yearlyPrice && (
              <p className="text-sm text-gray-500">
                {isUrdu ? 'یا' : 'or'} <span className="font-bold text-gray-700">{plan.yearlyPrice}</span> {plan.yearlyPeriod}
              </p>
            )}
          </div>
          
          <Link 
            to="/registration"
            className={`w-full flex items-center justify-center rounded-lg h-12 px-6 text-sm font-bold transition-all hover:scale-105 ${
              isPopular 
                ? 'bg-primary text-white' 
                : 'bg-primary/20 text-gray-900 hover:bg-primary/30'
            }`}
          >
            <span className="truncate">{isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now'}</span>
          </Link>
          
          <div className="flex flex-col gap-3 pt-2 text-sm text-gray-700">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                {feature}
              </div>
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
        title={t.fees.title}
        titleUrdu={isUrdu ? '' : 'ہماری فیس کا ڈھانچہ'}
        subtitle={t.fees.subtitle}
        subtitleUrdu={isUrdu ? '' : 'آپ کے لیے تیار کردہ سستی، لچکدار، اور قابل قدر قرآنی تعلیم۔'}
      />

      <div className="py-12 md:py-20">
        {/* Monthly Pricing Cards */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {isUrdu ? 'ماہانہ کورسز' : 'Monthly Courses'}
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Special Hifz Course */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {isUrdu ? 'خصوصی حفظ پروگرام' : 'Special Hifz Program'}
          </h2>
        </AnimatedSection>
        
        <div className="max-w-md mx-auto mb-16">
          {specialPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Friday Holiday Notice */}
        <AnimatedSection className="mb-12">
          <div className="text-center bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="material-symbols-outlined text-yellow-600 text-2xl">event_busy</span>
              <h3 className="text-lg font-bold text-yellow-800">
                {isUrdu ? 'جمعہ کا دن چھٹی ہے' : 'Friday is Holiday'}
              </h3>
            </div>
            <p className="text-yellow-700 text-sm">
              {isUrdu 
                ? 'تمام کورسز ہفتے میں ۶ دن چلتے ہیں۔ جمعہ کا دن چھٹی کا دن ہے۔' 
                : 'All courses run 6 days a week. Friday is a holiday for all students.'}
            </p>
          </div>
        </AnimatedSection>

        {/* Discounts Section */}
        <AnimatedSection className="mt-12">
          <div className="text-center bg-white rounded-xl p-8 border border-primary/20 max-w-4xl mx-auto hover-lift">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {isUrdu ? 'رعایتیں اور ٹرائل کلاس' : 'Discounts & Trial Class'}
            </h2>
            
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              {isUrdu 
                ? 'ہم خاندانوں اور متعدد کورسز میں داخلہ لینے والے طلباء کے لیے خصوصی رعایت پیش کرتے ہیں۔ ابھی تک یقین نہیں؟ ہمارے مستند ٹیوٹر کے ساتھ مفت ٹرائل کلاس بک کریں۔'
                : 'We offer special discounts for families and students enrolling in multiple courses. Not sure yet? Book a free trial class with one of our qualified tutors.'}
            </p>
            
            <Link 
              to="/registration"
              className="mt-6 inline-flex mx-auto items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:scale-105 transition-transform"
            >
              {isUrdu ? 'مفت ٹرائل بک کریں' : 'Book a Free Trial'}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FeesPage;

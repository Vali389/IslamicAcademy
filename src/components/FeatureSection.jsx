import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const FeatureSection = () => {
  const { t, isUrdu } = useLanguage();

  const features = isUrdu ? [
    {
      icon: 'school',
      title: 'مستند علماء',
      description: 'تصدیق شدہ اور تجربہ کار اسلامی علماء سے سیکھیں۔',
    },
    {
      icon: 'schedule',
      title: 'لچکدار اوقات',
      description: 'اپنی سہولت کے مطابق کلاسز شیڈول کریں، 24/7۔',
    },
    {
      icon: 'person',
      title: 'انفرادی کلاسز',
      description: 'مخصوص ٹیوٹرز کے ساتھ ذاتی توجہ حاصل کریں۔',
    },
    {
      icon: 'event_busy',
      title: 'جمعہ چھٹی',
      description: 'ہفتے میں ۶ دن کلاسز۔ جمعہ کا دن چھٹی۔',
    },
  ] : [
    {
      icon: 'school',
      title: 'Qualified Ulema',
      description: 'Learn from certified and experienced Islamic scholars.',
    },
    {
      icon: 'schedule',
      title: 'Flexible Timings',
      description: 'Schedule classes at your convenience, 24/7.',
    },
    {
      icon: 'person',
      title: 'One-on-One Classes',
      description: 'Get personalized attention with dedicated tutors.',
    },
    {
      icon: 'event_busy',
      title: 'Friday Holiday',
      description: '6 days a week classes. Friday is holiday.',
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-4 py-16" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-navy">
          {t.features.title}
        </h2>
        <p className="max-w-3xl text-base font-normal leading-normal text-gray-600">
          {t.features.subtitle}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-primary/20 bg-white p-6 text-center shadow-sm hover-lift">
              <span className="material-symbols-outlined mx-auto text-4xl text-gold">{feature.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="text-sm font-normal leading-normal text-gray-500 mt-1">{feature.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

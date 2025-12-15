import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const pricingPlans = [
  {
    id: 1,
    name: 'Quran Reading',
    urduName: 'قرآن پڑھنا',
    price: 50,
    popular: false,
    features: [
      '3 Days / Week',
      'One-on-One Classes',
      'Qualified Tutors',
    ],
  },
  {
    id: 2,
    name: 'Tajweed Basics',
    urduName: 'تجوید کی بنیادیات',
    price: 65,
    popular: true,
    features: [
      '5 Days / Week',
      'One-on-One Classes',
      'Advanced Tajweed Rules',
      'Qualified Tutors',
    ],
  },
  {
    id: 3,
    name: 'Hifz Program',
    urduName: 'حفظ پروگرام',
    price: 80,
    popular: false,
    features: [
      '5 Days / Week',
      'Dedicated Hifz Coach',
      'Personalized Plan',
      'Weekly Assessments',
    ],
  },
];

const PricingCard = ({ plan, index }) => {
  const isPopular = plan.popular;
  
  return (
    <AnimatedSection delay={index * 150} animation="scale-up">
      <div className={`relative flex flex-col gap-5 rounded-xl ${isPopular ? 'border-2 border-primary shadow-lg scale-105' : 'border border-primary/20 shadow-sm hover-lift'} bg-white p-6 transition-shadow h-full`}>
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <p className="text-xs font-bold uppercase tracking-wider rounded-full bg-primary text-white px-4 py-1">
              Most Popular
            </p>
          </div>
        )}
        
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-gray-900">
            {plan.name} <span className="font-normal" dir="rtl">/ {plan.urduName}</span>
          </h3>
          <p className="flex items-baseline gap-2 text-gray-900">
            <span className="text-5xl font-black tracking-tight">${plan.price}</span>
            <span className="text-base font-semibold">/ month</span>
          </p>
        </div>
        
        <button className={`w-full flex items-center justify-center rounded-lg h-12 px-6 text-sm font-bold transition-all hover:scale-105 ${
          isPopular 
            ? 'bg-primary text-white' 
            : 'bg-primary/20 text-gray-900 hover:bg-primary/30'
        }`}>
          <span className="truncate">Register Now</span>
        </button>
        
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

const FeesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero 
        title="Our Fee Structure"
        titleUrdu="ہماری فیس کا ڈھانچہ"
        subtitle="Affordable, flexible, and valuable Quranic education tailored for you."
        subtitleUrdu="آپ کے لیے تیار کردہ سستی، لچکدار، اور قابل قدر قرآنی تعلیم۔"
      />

      <div className="py-12 md:py-20">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Discounts Section */}
        <AnimatedSection className="mt-20">
          <div className="text-center bg-white rounded-xl p-8 border border-primary/20 max-w-4xl mx-auto hover-lift">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Discounts & Trial Class
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-1" dir="rtl" style={{ fontFamily: "'Times New Roman', serif" }}>
              رعایتیں اور ٹرائل کلاس
            </h2>
            
            <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
              We offer special discounts for families and students enrolling in multiple courses. Not sure yet? Book a free trial class with one of our qualified tutors.
            </p>
            
            <button className="mt-6 flex mx-auto items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:scale-105 transition-transform">
              Book a Free Trial
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FeesPage;

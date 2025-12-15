import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: 'school',
    title: 'Qualified Ulema',
    urduTitle: 'مستند علماء',
    description: 'Learn from certified and experienced Islamic scholars.',
  },
  {
    icon: 'schedule',
    title: 'Flexible Timings',
    urduTitle: 'لچکدار اوقات',
    description: 'Schedule classes at your convenience, 24/7.',
  },
  {
    icon: 'person',
    title: 'One-on-One Classes',
    urduTitle: 'انفرادی کلاسز',
    description: 'Get personalized attention with dedicated tutors.',
  },
  {
    icon: 'escalator_warning',
    title: 'For Kids & Adults',
    urduTitle: 'بچوں اور بڑوں کے لیے',
    description: 'Courses designed for all age groups and levels.',
  },
];

const FeatureSection = () => {
  return (
    <section className="flex flex-col gap-10 px-4 py-16">
      <AnimatedSection className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-navy">
          Key Benefits | کلیدی فوائد
        </h2>
        <p className="max-w-3xl text-base font-normal leading-normal text-gray-600">
          Discover the advantages of learning with our qualified and experienced tutors who are dedicated to your spiritual growth.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="flex flex-1 flex-col gap-3 rounded-lg border border-primary/20 bg-white p-6 text-center shadow-sm hover-lift">
              <span className="material-symbols-outlined mx-auto text-4xl text-gold">{feature.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="text-sm text-primary font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>{feature.urduTitle}</p>
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

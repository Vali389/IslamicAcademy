import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: 1,
    title: 'Register',
    urduTitle: 'رجسٹر کریں',
    description: 'Fill out a simple form to create your account and join our academy.',
  },
  {
    number: 2,
    title: 'Take a Free Demo',
    urduTitle: 'مفت ڈیمو لیں',
    description: 'Schedule a free one-on-one demo class with one of our expert tutors.',
  },
  {
    number: 3,
    title: 'Start Regular Classes',
    urduTitle: 'باقاعدہ کلاسز شروع کریں',
    description: 'Once satisfied, confirm your schedule and begin your learning journey.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-navy">How It Works | یہ کیسے کام کرتا ہے</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-normal text-gray-600">
          Start your learning journey in three simple steps. We've made the process seamless and straightforward for you.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 text-center relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute top-10 left-1/4 right-1/4 h-0.5 bg-primary/20 hidden md:block" />

        {steps.map((step, index) => (
          <AnimatedSection key={step.number} delay={index * 150} className="relative">
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gold text-white shadow-lg text-3xl font-bold border-4 border-white z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-navy mt-4">{step.title}</h3>
              <p className="text-primary font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>{step.urduTitle}</p>
              <p className="text-gray-500">{step.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t, isUrdu } = useLanguage();

  const steps = t.howItWorks.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
  }));

  return (
    <section className="py-16 px-4" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-navy">{t.howItWorks.title}</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-normal text-gray-600">
          {t.howItWorks.subtitle}
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
              <p className="text-gray-500">{step.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

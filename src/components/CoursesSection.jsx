import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const CoursesSection = () => {
  const { t, isUrdu } = useLanguage();

  const courses = isUrdu ? [
    {
      id: 1,
      title: 'ناظرہ قرآن',
      description: 'صحیح تلفظ کے ساتھ قرآن پڑھنا سیکھیں۔',
      price: '₹699/ماہ',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'حفظ قرآن',
      description: 'ماہر رہنمائی کے ساتھ قرآن حفظ کریں۔',
      price: '₹24,999 مکمل',
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'تجوید',
      description: 'قرآنی تلاوت کے فن میں مہارت حاصل کریں۔',
      price: '₹699/ماہ',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'قاری کورس',
      description: 'ماہر قاری بنیں اور خوبصورت تلاوت سیکھیں۔',
      price: '₹699/ماہ',
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'عربی گرامر',
      description: 'قرآن کی زبان سمجھیں۔',
      price: '₹699/ماہ',
      image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?w=400&h=300&fit=crop&q=80',
    },
  ] : [
    {
      id: 1,
      title: 'Nazira Quran',
      description: 'Learn to read the Quran with proper pronunciation.',
      price: '₹699/month',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Hifz (Memorization)',
      description: 'Memorize the Holy Quran with expert guidance.',
      price: '₹24,999 Full',
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Tajweed Rules',
      description: 'Master the art of Quranic recitation.',
      price: '₹699/month',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Qari Course',
      description: 'Become an expert reciter with beautiful recitation.',
      price: '₹699/month',
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400&h=300&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'Arabic Grammar',
      description: 'Understand the language of the Quran.',
      price: '₹699/month',
      image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?w=400&h=300&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-16 px-4" dir={isUrdu ? 'rtl' : 'ltr'}>
      <AnimatedSection className="flex flex-col items-center gap-4 pb-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-navy">{t.courses.title}</h2>
        <p className="max-w-3xl text-base font-normal leading-normal text-gray-600">
          {t.courses.subtitle}
        </p>
      </AnimatedSection>

      {/* Carousel */}
      <div className="flex overflow-x-auto p-4 gap-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
        {courses.map((course, index) => (
          <AnimatedSection key={course.id} delay={index * 100} className="flex-shrink-0 snap-start">
            <div className="flex w-72 flex-col gap-4 rounded-xl bg-white shadow-md hover-lift overflow-hidden border border-gray-100">
              <img 
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover bg-gray-100"
              />
              <div className="flex flex-1 flex-col justify-between p-4 pt-0">
                <div className="mb-4">
                  <p className="text-lg font-bold text-navy">{course.title}</p>
                  <p className="text-sm font-normal text-gray-500 mt-1">{course.description}</p>
                  <p className="text-sm font-bold text-primary mt-2">{course.price}</p>
                </div>
                <Link 
                  to="/courses"
                  className="flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 text-sm font-bold text-primary hover:bg-primary/30 transition-colors"
                >
                  <span className="truncate">{t.courses.viewDetails}</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const courses = [
  {
    id: 1,
    title: 'Nazira',
    urduTitle: 'ناظرہ',
    description: 'Learn to read the Quran with proper pronunciation.',
    age: 'Kids & Adults',
    duration: 'Flexible',
    level: 'Beginner',
    levelColor: 'bg-primary/20 text-primary',
    outcomes: [
      { en: 'Correct pronunciation', ur: 'درست تلفظ' },
      { en: 'Basic Tajweed rules', ur: 'بنیادی تجوید کے قواعد' },
    ],
  },
  {
    id: 2,
    title: 'Hifz',
    urduTitle: 'حفظ',
    description: 'Memorize the Holy Quran with our structured program.',
    age: 'All Ages',
    duration: 'Self-Paced',
    level: 'All Levels',
    levelColor: 'bg-primary/20 text-primary',
    outcomes: [
      { en: 'Strong memorization', ur: 'مضبوط یادداشت' },
      { en: 'Revision techniques', ur: 'نظر ثانی کی تکنیک' },
    ],
  },
  {
    id: 3,
    title: 'Tajweed',
    urduTitle: 'تجوید',
    description: 'Perfect your recitation with the rules of Tajweed.',
    age: 'Adults',
    duration: 'Intermediate',
    level: 'Intermediate',
    levelColor: 'bg-gold/20 text-gold',
    outcomes: [
      { en: 'Master articulation', ur: 'مخارج میں مہارت' },
      { en: 'Rules of noon & meem', ur: 'نون اور میم کے قواعد' },
    ],
  },
  {
    id: 4,
    title: 'Qari Course',
    urduTitle: 'قاری کورس',
    description: 'Become an expert reciter of the Holy Quran.',
    age: 'Adults',
    duration: 'Advanced',
    level: 'Advanced',
    levelColor: 'bg-red-500/20 text-red-500',
    outcomes: [
      { en: 'Advanced Tajweed', ur: 'اعلی تجوید' },
      { en: 'Art of recitation', ur: 'تلاوت کا فن' },
    ],
  },
  {
    id: 5,
    title: 'Alim Course',
    urduTitle: 'عالم کورس',
    description: 'In-depth study of Islamic sciences.',
    age: 'Adults',
    duration: 'Advanced',
    level: 'Advanced',
    levelColor: 'bg-red-500/20 text-red-500',
    outcomes: [
      { en: 'Quranic exegesis', ur: 'قرآنی تفسیر' },
      { en: 'Hadith studies', ur: 'مطالعہ حدیث' },
    ],
  },
  {
    id: 6,
    title: 'Arabic Grammar',
    urduTitle: 'عربی گرامر',
    description: 'Understand the language of the Quran.',
    age: 'All Ages',
    duration: 'Beginner',
    level: 'Beginner',
    levelColor: 'bg-primary/20 text-primary',
    outcomes: [
      { en: 'Sentence structure', ur: 'جملے کی ساخت' },
      { en: 'Basic vocabulary', ur: 'بنیادی الفاظ' },
    ],
  },
];

const CourseCard = ({ course, index }) => {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-primary/20 shadow-sm hover-lift transition-all h-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-navy text-xl font-bold">{course.title}</h3>
            <p className="text-lg text-navy" style={{ fontFamily: "'Times New Roman', serif", direction: 'rtl' }}>
              {course.urduTitle}
            </p>
          </div>
          <span className={`text-xs font-semibold ${course.levelColor} px-3 py-1 rounded-full`}>
            {course.level}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm">{course.description}</p>
        <p className="text-gray-500 text-xs">Age: {course.age} | Duration: {course.duration}</p>
        
        <div className="border-t border-primary/20 pt-4 mt-2">
          <h4 className="text-navy font-semibold text-sm mb-2">Key Learning Outcomes:</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {course.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span className="flex-1">
                  {outcome.en} <span style={{ fontFamily: "'Times New Roman', serif", direction: 'rtl' }}>({outcome.ur})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="mt-4 w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
          Register Now
        </button>
      </div>
    </AnimatedSection>
  );
};

const CoursesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero 
        title="Our Courses"
        titleUrdu="ہمارے کورسز"
        subtitle="Explore our wide range of courses designed for all ages and levels. Start your Quranic journey today."
        subtitleUrdu="تمام عمر اور سطحوں کے لیے ڈیزائن کیے گئے ہمارے کورسز دریافت کریں۔"
      />

      <div className="py-12 md:py-20">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;

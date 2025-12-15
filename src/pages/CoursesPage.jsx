import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const CoursesPage = () => {
  const { t, isUrdu } = useLanguage();

  const courses = [
    {
      id: 1,
      title: isUrdu ? 'ناظرہ قرآن' : 'Nazira Quran',
      description: isUrdu 
        ? 'قرآن مجید کو صحیح تلفظ کے ساتھ پڑھنا سیکھیں۔ یہ کورس بنیادی عربی حروف، ان کی آوازوں، اور قرآنی الفاظ کی صحیح ادائیگی پر مشتمل ہے۔ ہمارے تجربہ کار اساتذہ آپ کو قدم بہ قدم رہنمائی کریں گے تاکہ آپ روانی سے قرآن پڑھ سکیں۔ ہر عمر کے ابتدائی سیکھنے والوں کے لیے بہترین۔ ہفتے میں 6 دن کلاسز ہوتی ہیں۔'
        : 'Learn to read the Holy Quran with proper pronunciation and basic Tajweed rules. This comprehensive course covers Arabic alphabets, their sounds, and correct articulation of Quranic words. Our experienced teachers guide you step by step from basics to fluent reading. You will learn the proper Makharij (articulation points) and basic rules of stopping and continuing. Perfect for beginners of all ages who want to start their Quranic journey. Classes are held 6 days a week with Friday as holiday.',
      age: isUrdu ? 'بچے اور بڑے' : 'Kids & Adults',
      duration: isUrdu ? 'لچکدار' : 'Flexible',
      level: isUrdu ? 'ابتدائی' : 'Beginner',
      levelColor: 'bg-primary/20 text-primary',
      price: '₹699/month',
      outcomes: isUrdu ? [
        'صحیح تلفظ اور مخارج',
        'بنیادی تجوید کے قواعد',
        'روانی سے قرآن پڑھنا',
      ] : [
        'Correct Pronunciation & Makharij',
        'Basic Tajweed Rules',
        'Fluent Quran Reading',
      ],
    },
    {
      id: 2,
      title: isUrdu ? 'حفظ قرآن' : 'Hifz (Memorization)',
      description: isUrdu 
        ? 'قرآن مجید حفظ کریں ہمارے منظم پروگرام کے ساتھ۔ روزانہ نئی آیات یاد کرنا، پرانے سبق کا دہرانا، اور ہفتہ وار جائزہ شامل ہے۔ ہر طالب علم کے لیے ان کی رفتار اور صلاحیت کے مطابق ذاتی منصوبہ بنایا جاتا ہے۔ ہمارے تجربہ کار حافظ اساتذہ آپ کی مکمل رہنمائی کرتے ہیں۔ کورس مکمل کرنے پر سرٹیفکیٹ دیا جاتا ہے۔'
        : 'Memorize the Holy Quran with our structured Hifz program designed for all ages. This course includes daily memorization of new verses, revision of previous lessons, and weekly assessments to track your progress. Each student receives a personalized memorization plan based on their pace and ability. Our experienced Hafiz teachers provide complete guidance throughout your memorization journey. Regular Sabqi, Sabqi Para, and Manzil revision ensures strong retention. Certificate is awarded upon completion.',
      age: isUrdu ? 'تمام عمر' : 'All Ages',
      duration: isUrdu ? 'اپنی رفتار سے' : 'Self-Paced',
      level: isUrdu ? 'تمام سطحیں' : 'All Levels',
      levelColor: 'bg-primary/20 text-primary',
      price: '₹24,999 (Full Course)',
      outcomes: isUrdu ? [
        'مضبوط یادداشت کی تکنیک',
        'منظم دہرائی کا نظام',
        'مکمل قرآن حفظ',
      ] : [
        'Strong Memorization Techniques',
        'Systematic Revision System',
        'Complete Quran Memorization',
      ],
    },
    {
      id: 3,
      title: isUrdu ? 'تجوید' : 'Tajweed',
      description: isUrdu 
        ? 'قرآن کی تلاوت کے فن میں مہارت حاصل کریں۔ اس کورس میں مخارج الحروف، صفات، نون ساکنہ اور تنوین کے احکام، میم ساکنہ کے قواعد، اور مختلف اقسام کی مد سکھائی جاتی ہے۔ آپ سیکھیں گے کہ قرآن کو خوبصورت اور درست انداز میں کیسے پڑھا جائے۔ ہمارے مستند قاری اساتذہ آپ کو عملی مشق کرواتے ہیں۔ یہ کورس ان لوگوں کے لیے ہے جو پہلے سے قرآن پڑھنا جانتے ہیں۔'
        : 'Master the art of Quranic recitation with proper Tajweed rules. This course covers Makharij Al-Huroof (articulation points), Sifaat (characteristics of letters), rules of Noon Sakinah and Tanween, Meem Sakinah rules, and various types of Madd (elongation). You will learn to recite the Quran beautifully and accurately. Our certified Qari teachers provide practical training with individual feedback. This course is designed for those who already know basic Quran reading.',
      age: isUrdu ? 'بڑے' : 'Adults',
      duration: isUrdu ? 'درمیانی' : 'Intermediate',
      level: isUrdu ? 'درمیانی' : 'Intermediate',
      levelColor: 'bg-gold/20 text-gold',
      price: '₹699/month',
      outcomes: isUrdu ? [
        'مخارج میں مہارت',
        'نون اور میم کے قواعد',
        'خوبصورت تلاوت',
      ] : [
        'Master Articulation Points',
        'Rules of Noon & Meem',
        'Beautiful Recitation',
      ],
    },
    {
      id: 4,
      title: isUrdu ? 'قاری کورس' : 'Qari Course',
      description: isUrdu 
        ? 'ایک ماہر قاری بنیں۔ یہ اعلی درجے کا کورس پیچیدہ تجوید کے قواعد، مختلف قراءات کے انداز، اور خوبصورت تلاوت کی تکنیک پر مشتمل ہے۔ آپ سیکھیں گے کہ درستگی برقرار رکھتے ہوئے خوش الحانی سے تلاوت کیسے کی جائے۔ اس کورس میں مقامات وقف، طریقہ تلاوت، اور آواز کی مشقیں شامل ہیں۔ قرآن تلاوت میں کمال حاصل کرنے والوں کے لیے مثالی۔'
        : 'Become an expert reciter of the Holy Quran. This advanced course covers sophisticated Tajweed rules, different Qiraat styles, and beautiful recitation techniques. You will learn the art of melodious recitation while maintaining complete accuracy. The course includes Waqf rules, recitation styles, voice modulation techniques, and breathing exercises. Our expert Qari teachers have ijazah in Qiraat and provide personalized coaching. Ideal for those who want to achieve excellence in Quran recitation.',
      age: isUrdu ? 'بڑے' : 'Adults',
      duration: isUrdu ? 'اعلی' : 'Advanced',
      level: isUrdu ? 'اعلی' : 'Advanced',
      levelColor: 'bg-red-500/20 text-red-500',
      price: '₹699/month',
      outcomes: isUrdu ? [
        'اعلی تجوید',
        'تلاوت کا فن',
        'مختلف قراءات',
      ] : [
        'Advanced Tajweed',
        'Art of Recitation',
        'Different Qiraat Styles',
      ],
    },
    {
      id: 5,
      title: isUrdu ? 'عالم کورس' : 'Alim Course',
      description: isUrdu 
        ? 'اسلامی علوم کا گہرائی سے مطالعہ کریں۔ اس جامع کورس میں تفسیر قرآن، علم الحدیث، فقہ اسلامی، اور عربی ادب شامل ہے۔ یہ کورس ان لوگوں کے لیے ڈیزائن کیا گیا ہے جو اسلامی علوم میں گہری سمجھ حاصل کرنا چاہتے ہیں۔ ہمارے علماء اساتذہ روایتی اجازت کے حامل ہیں۔ طلباء کو اصول الفقہ، مصطلح الحدیث، اور علوم القرآن کی تعلیم دی جاتی ہے۔'
        : 'In-depth study of Islamic sciences including Tafseer, Hadith, Fiqh, and Arabic literature. This comprehensive course is designed for those who want to gain deep understanding of Islamic knowledge and become scholars. Learn from qualified Ulema with traditional ijazah and authentic chain of knowledge. Students are taught Usool al-Fiqh, Mustalah al-Hadith, and Uloom al-Quran. The course follows the traditional Islamic seminary curriculum adapted for online learning.',
      age: isUrdu ? 'بڑے' : 'Adults',
      duration: isUrdu ? 'اعلی' : 'Advanced',
      level: isUrdu ? 'اعلی' : 'Advanced',
      levelColor: 'bg-red-500/20 text-red-500',
      price: isUrdu ? 'رابطہ کریں' : 'Contact Us',
      outcomes: isUrdu ? [
        'قرآنی تفسیر',
        'مطالعہ حدیث',
        'فقہ اسلامی',
      ] : [
        'Quranic Tafseer',
        'Hadith Studies',
        'Islamic Fiqh',
      ],
    },
    {
      id: 6,
      title: isUrdu ? 'عربی گرامر' : 'Arabic Grammar',
      description: isUrdu 
        ? 'قرآن کی زبان سمجھیں۔ اس کورس میں نحو (جملے کی ساخت)، صرف (لفظ کی ساخت)، اور عربی گرامر کے بنیادی قواعد سکھائے جاتے ہیں۔ یہ کورس آپ کو قرآن کو براہ راست عربی میں سمجھنے میں مدد کرے گا۔ بنیادی الفاظ سے لے کر پیچیدہ قواعد تک، ہم سب کچھ سکھاتے ہیں۔ قرآنی الفاظ کی تشریح اور ان کے معانی سمجھنا اس کورس کا خاص حصہ ہے۔'
        : 'Understand the language of the Holy Quran. This course covers Nahw (Arabic syntax), Sarf (Arabic morphology), and fundamental Arabic grammar rules. You will learn to understand the Quran directly in Arabic without depending on translations. From basic vocabulary to complex grammatical structures, we cover everything systematically. Special focus is given to Quranic vocabulary and understanding the meanings of verses. The course helps you appreciate the linguistic miracle of the Quran.',
      age: isUrdu ? 'تمام عمر' : 'All Ages',
      duration: isUrdu ? 'ابتدائی' : 'Beginner',
      level: isUrdu ? 'ابتدائی' : 'Beginner',
      levelColor: 'bg-primary/20 text-primary',
      price: '₹699/month',
      outcomes: isUrdu ? [
        'جملے کی ساخت',
        'قرآنی الفاظ',
        'بنیادی عربی',
      ] : [
        'Sentence Structure',
        'Quranic Vocabulary',
        'Basic Arabic',
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
            </div>
            <span className={`text-xs font-semibold ${course.levelColor} px-3 py-1 rounded-full whitespace-nowrap`}>
              {course.level}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{isUrdu ? 'عمر:' : 'Age:'} {course.age}</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{isUrdu ? 'سطح:' : 'Level:'} {course.duration}</span>
            <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded">{course.price}</span>
          </div>
          
          <div className="border-t border-primary/20 pt-4 mt-2">
            <h4 className="text-navy font-semibold text-sm mb-2">{isUrdu ? 'کیا سیکھیں گے:' : 'Key Learning Outcomes:'}</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {course.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span className="flex-1">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to="/registration"
            className="mt-auto w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform"
          >
            {isUrdu ? 'ابھی رجسٹر کریں' : 'Register Now'}
          </Link>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <PageHero 
        title={t.courses.title}
        titleUrdu={isUrdu ? '' : 'ہمارے کورسز'}
        subtitle={t.courses.subtitle}
        subtitleUrdu={isUrdu ? '' : 'تمام عمر اور سطحوں کے لیے ڈیزائن کیے گئے ہمارے کورسز دریافت کریں۔'}
      />

      <div className="py-12 md:py-20">
        {/* Friday Holiday Notice */}
        <AnimatedSection className="mb-10">
          <div className="text-center bg-yellow-50 border border-yellow-200 rounded-xl p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-yellow-600">event_busy</span>
              <span className="text-yellow-800 font-medium">
                {isUrdu ? 'جمعہ کا دن چھٹی ہے - تمام کورسز ہفتے میں 6 دن' : 'Friday is Holiday - All courses run 6 days/week'}
              </span>
            </div>
          </div>
        </AnimatedSection>

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

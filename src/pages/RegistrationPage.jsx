import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    alert('Thank you for registering! We will contact you shortly to schedule your free trial class.');
  };

  const courses = [
    'Nazira (Quran Reading)',
    'Hifz (Memorization)',
    'Tajweed',
    'Qari Course',
    'Alim Course',
    'Arabic Grammar',
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero 
        title="Student Registration"
        titleUrdu="طالب علم کی رجسٹریشن"
        subtitle="Register now and book your FREE trial class with one of our qualified teachers."
        subtitleUrdu="ابھی رجسٹر کریں اور ہمارے اہل اساتذہ میں سے ایک کے ساتھ اپنی مفت ٹرائل کلاس بک کریں۔"
      />

      <div className="py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Already have account */}
          <AnimatedSection>
            <p className="text-center text-gray-600 mb-8">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline">
                Login here
              </Link>
            </p>
          </AnimatedSection>

          {/* Registration Form */}
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover-lift">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="studentName">
                    Student Name / طالب علم کا نام *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="studentName"
                    name="studentName"
                    type="text"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Guardian Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="guardianName">
                    Parent/Guardian Name / سرپرست کا نام *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="guardianName"
                    name="guardianName"
                    type="text"
                    value={formData.guardianName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-700 text-sm font-medium" htmlFor="phone">
                      WhatsApp Number *
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="country">
                    Country / ملک *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Course Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="course">
                    Select Course / کورس منتخب کریں *
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="preferredTime">
                    Preferred Class Time
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="preferredTime"
                    name="preferredTime"
                    type="text"
                    placeholder="e.g., Morning, Afternoon, Evening"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-xl h-14 px-6 bg-primary text-white text-base font-bold hover:scale-105 transition-transform"
                  type="submit"
                >
                  <span>Register & Book Free Trial</span>
                  <span style={{ fontFamily: "'Times New Roman', serif" }}>| رجسٹر کریں</span>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

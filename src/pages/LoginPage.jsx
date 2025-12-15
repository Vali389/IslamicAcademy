import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const LoginPage = () => {
  const { isUrdu } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    alert('Login functionality will be implemented soon.');
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <PageHero 
        title={isUrdu ? 'طالب علم لاگ ان' : 'Student Login'}
        titleUrdu={isUrdu ? '' : 'طالب علم لاگ ان'}
        subtitle={isUrdu ? 'اپنے اکاؤنٹ تک رسائی حاصل کریں۔' : 'Access your account to manage classes, track progress, and more.'}
      />

      <div className="py-12 md:py-20">
        <div className="max-w-md mx-auto">
          {/* Login Form */}
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover-lift">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="email">
                    Email Address
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

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 h-12 px-4 text-base focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full flex items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold hover:scale-105 transition-transform"
                  type="submit"
                >
                  Sign In
                </button>
              </form>

              {/* Register Link */}
              <p className="mt-6 text-center text-gray-600">
                Don't have an account?{' '}
                <Link to="/registration" className="text-primary font-bold hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const testimonials = [
  {
    quote: "The one-on-one classes have been a game-changer for my son's progress. The teacher is patient and highly qualified. We are truly blessed to have found this academy.",
    name: 'Ahmed Raza',
    role: 'Parent, Canada',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Y4vg3KI_FiT2vOP5fPMmOgKl0XhPz2yfTGJUJyUhKWY-P3OzMl6BwNdmXEaSz4uq1NG3kpdWpD-sXvAe1tbsye08QAqcHMLpzkyWOGQ0-xRE14VZZ6YrF7Csj6H7BvHDu-PlY2bx6y9oHbt8Y5goJONpqjeCCBt2hMJHYvAiGnn1jPy4MPvkosAOns11OydV9hBeGCpwXk6M8IgQlf_CrPv-giZwaewRCynmNXwvAS6E9q7fNuq8pjIcmyks_tTmSakJrm8KdN8',
  },
  {
    quote: "I could never find time with my busy schedule, but the flexible timings offered here made it possible for me to finally start my Hifz journey. Highly recommended!",
    name: 'Fatima Ali',
    role: 'Student, UK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOi29lHyro-Ou8P2eg_egyctG-u9a6Wtb3Pw-tOdfX5KHOVbboHPHavd7lXw36JyR025D5Y7ovNM1N4UKaALMWl0EmqYX-cZckGKqX9osz6AcSSSReb8dF7Zy32zCybuZtj9kK1gksGSqVxccGuCakYsq9676tBLRC_sPfD6WtB1pWTGX0LfWzwfxElkx2QtigF9lBU3j-I20saWWWzOrEVlE0kUDZ6E7di9tYVSDCasFY8bXSupcVt-Int9xuEmgq1KUpDnDenak',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
      <div className="flex items-center mt-4">
        <img 
          className="h-12 w-12 rounded-full object-cover"
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
        />
        <div className="ml-4">
          <p className="font-bold text-navy">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-primary/5 rounded-xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-navy">
          What Our Students Say | ہمارے طلباء کی آراء
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base font-normal leading-normal text-gray-600">
          We are honored to have the trust of families from around the world. Here's what they have to say about their experience.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const CTABanner = () => {
  const backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCexz5j69e8fPeUqkQbkTf1hz_O549hD-5lbsE1EVeJCuasZhtgocQ84q5OwR4pStWztEkPqMMva55KGqsUsCz7IpnoTE4DseMMWSh6seWJe1jN6M3AzL_Np8tssqEq6K5kpUYq2l0djvVPZl8DXcXRZWcreD19SFDwc9gqHFBd-lIXyf3IZNI2hmWdJpaO-UCIrGfJTOPv4ca3OQ6dobwbZdxhbwDeo2oZN2lrvld_Yjtdj0WH8yyn_KvJoIBfzh9cpQ930VO5Urc";

  return (
    <section className="my-16">
      <div 
        className="rounded-xl bg-navy p-10 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <h2 className="text-3xl font-bold">
          Begin Your Blessed Journey With The Quran Today
        </h2>
        <h3 className="text-xl mt-1">
          آج ہی قرآن کے ساتھ اپنے مبارک سفر کا آغاز کریں۔
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          Join hundreds of students from across the globe. Register now for your free trial class and experience our teaching firsthand.
        </p>
        <button className="mt-8 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 mx-auto">
          <span className="truncate">Register Now | ابھی رجسٹر ہوں۔</span>
        </button>
      </div>
    </section>
  );
};

export default CTABanner;


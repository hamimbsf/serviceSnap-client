import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const testimonials = [
    {
      name: "Nahid Ibn Ali",
      role: "Freelancer",
      feedback:
        "This platform has completely changed the way I offer my services. Booking and managing clients has never been easier!",
      image:
        "https://i.ibb.co.com/gjtn1sv/460767775-1069333874819156-7191044746399754643-n.jpg",
    },
    {
      name: "Hamim Hossain",
      role: "Business Owner",
      feedback:
        "I found the perfect service provider for my needs here. The process was seamless and hassle-free!",
      image:
        "https://i.ibb.co.com/KyXs5xJ/277734982-1037219373813280-1745830410014843343-n.jpg",
    },
    {
      name: "Nadim Ahmed",
      role: "Designer",
      feedback:
        "A user-friendly platform with excellent features. Sharing my services has been a smooth experience.",
      image:
        "https://i.ibb.co.com/LzCK9JQ/414139825-1115480086312953-4786617054656948412-n.jpg",
    },
  ];
  return (
    <>
      <div className="py-10">
        <div className="container dark:text-white mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="mb-10">
            Hear from users who’ve experienced the power of service sharing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="card bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="avatar mb-4">
                  <div className="w-16 rounded-full mx-auto">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-black">{testimonial.role}</p>
                <p className="mt-4 text-black">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import React, { useEffect, useRef, useState } from "react";

const faqData = [
  { icon: "/q-1.png", title: "Documentation" },
  { icon: "/q-2.png", title: "License Policy" },
  { icon: "/q-3.png", title: "Refund Policy" },
  { icon: "/q-4.png", title: "Our Portfolio" },
  { icon: "/q-5.png", title: "Full Theme Features" },
];

export default function FaqSection() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="FAQs"
      className="py-16 px-6 text-center bg-white"
    >
      <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

      <div className="grid gap-6 justify-center grid-cols-2 sm:grid-cols-2 md:flex">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-2xl px-6 py-12 w-[300px] h-[250px] max-[576px]:w-[150px] max-[576px]:h-[250px] mx-auto opacity-0 translate-y-24 transition-all duration-700 ease-out 
              ${visible ? `opacity-100 translate-y-0 animate-slideUp delay-[${index * 200}ms]` : ""}`}
          >
            <div
              className="flex justify-center items-center h-[100px] mb-4 hover:animate-[shakeX_0.5s_ease-in-out_infinite_alternate]"
            >
              <img src={item.icon} alt={item.title} className="w-[70px] h-[70px]" />
            </div>
            <h4 className="mt-4 max-[576px]:text-sm font-semibold">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}


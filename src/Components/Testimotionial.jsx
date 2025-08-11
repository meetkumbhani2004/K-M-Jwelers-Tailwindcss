import React, { useEffect, useRef } from 'react';

const testimonials = [
  "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify)",
  "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
  "I'm very satisfied with this theme, especially its design freedom for users choices: so many possibilities at any step you can imagine for your business. But beyond such qualities (that anyone can see just looking theme page/demo), I must to mention my satisfaction with the support team: very professional. They clarified many doubts, solved little problems in my configuration and made easier and safer all the process. Thank you!",
  "Now i am really happy with My purchase First of all sorry what i early say about theme.This theme is really good with excellent support.the team members are very helping and very fast to solve whatever issue i face",
  "Thanks and again sorry what i early said.I want to add one more thing please if possible than make video about this theme feature like how to add product search and much more it really help people to know more about theme",
  "Not only a great Shopify theme, Alex fixed our issue wihtin 24h. Thank you very much for help.",
  "Great support Alex! Shopify is a solid platform but once a theme is applied, the templates, assets, and liquid files can be changed and functions shuffled. Alex and Nova-Creative are quick to respond and very efficient. Thanks again Alex.",
  "Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms",
  "Our experience with the theme developer was great! Alex was very helpful in guiding us with the theme and accommodating to our requests. Very responsive (within a couple of business days) and straightforward with responses. Thanks again for the great theme and excellent customer service",
  "3 Months before i purchased sale hub E-commerce shopify theme. it is very easy customized themes, and support team is also nice response. Thank you sale hub team",
  "Alex Nguyen who is the tech support for the theme settings. We have written 53 emails until now. He is helpful and effective, responsible. Theme is simple and just have basic function, but they can be customized and easy to learn. In all, good and professional",
  "Great theme, support and help reply very quickly, thank you, cost-effective theme and service, thank you sincerely",
  "Now i am really happy with My purchase.First of all sorry what i early say about theme.This theme is really good with excellent support.the team members are very helping and very fast to solve whatever issue i face.",
  "I had a problem with a feature of the website and the support team fixed it right away. The theme is awesome!!",
  "Alex Nguyen who is the tech support for the theme settings. We have written 53 emails until now. He is helpful and effective, responsible. Theme is simple and just have basic function, but they can be customized and easy to learn. In all, good and professional",
  "Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.",
  "Great theme, support and help reply very quickly, thank you, cost-effective theme and service, thank you sincerel",
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = sectionRef.current.querySelectorAll('.testimonial-card1');
      const triggerBottom = window.innerHeight * 0.9;

      cards.forEach((card, i) => {
        const top = card.getBoundingClientRect().top;
        if (top < triggerBottom) {
          setTimeout(() => {
            card.classList.add('opacity-100', 'translate-y-0');
          }, (i < 4 ? 0 : Math.floor(i / 3) * 200));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rule 3: Maintain only top spacing per card
  const positionStyles = [
    'mt-0', 'mt-0', 'mt-[-12px]', 'mt-[-90]', 'mt-[-10px]', 'mt-[0px]',
    'mt-4', 'mt-[-20px]', 'mt-[-10px]', 'mt-[-10px]', 'mt-2', 'mt-[10px]',
    'mt-4', 'mt-[10px]', 'mt-3', 'mt-[10px]', 'mt-[10px]'
  ];

  return (
    <section className="py-40 px-4 bg-gray-100 text-center" ref={sectionRef} id="Testimonia">
      <h2 className="text-4xl font-bold mb-2">What Customers Say About Us</h2>
      <p className="text-gray-600 mb-10">See Why Thousands of Customer Love Us!</p>

      {/* Responsive grid setup */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {testimonials.map((text, index) => (
          <div
            key={index}
            className={`testimonial-card1 opacity-0 translate-y-16 transition-all duration-700 ease-out bg-white rounded-xl shadow-md p-6 w-full max-w-[calc(100%-1rem)] sm:max-w-[300px] mx-auto relative ${positionStyles[index % positionStyles.length]}`}
          >
            <div className="text-[60px] text-blue-200 absolute -top-4 left-4">❝</div>
            <p className="text-gray-700 text-sm leading-relaxed relative z-10 mt-6">{text}</p>
            <div className="flex items-center gap-3 mt-4 z-10 relative">
              <img
                src="about-logo.png"
                alt="avatar"
                className="w-14 h-14 object-cover max-[576px]:w-7 max-[576px]:h-7"
              />
              <div className="text-left">
                <div className="font-semibold text-sm">Customer</div>
                <div className="text-xs text-gray-500">From Envato</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

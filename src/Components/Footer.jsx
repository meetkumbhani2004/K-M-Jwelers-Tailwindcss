import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={footerRef}>
      {/* Top Section */}
      <div
        className={`text-center py-24 px-5 bg-white transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <h5 className="text-lg mb-5">Can't Find the Answer You are looking for? We're Here To Help?</h5>
        <p className="text-2xl font-bold text-neutral-700">WE'RE HERE TO HELP!</p>
        <div>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-neutral-800 text-white font-bold rounded-md relative overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-green-600 hover:before:w-full before:z-[-1] before:transition-all before:duration-500"
          >
            CONTACT US NOW
          </a>
        </div>
      </div>

      {/* Demo Suggestion Section */}
      <div
        className={`relative z-50 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className=" bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto text-center flex flex-col lg:flex-row items-center justify-between gap-6 -mb-24">
          <div className="flex-shrink-0">
            <img src="./fot-1.png" alt="img" className="w-[150px]" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Suggest Demo That You Love</h4>
            <p className="text-sm text-gray-600">Send us your idea, it may appear on Mate in the next update!</p>
          </div>
          <div>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-neutral-800 text-white font-bold rounded-md relative overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-green-600 hover:bg-green-600 before:z-[-1] before:transition-all before:duration-500"
            >
              Submit Your Idea
            </a>
          </div>
        </div>
      </div>

      {/* Final Footer */}
      <div
        className={`bg-[#091017] text-white py-24 px-5 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="flex flex-wrap justify-center gap-10 mb-10 mt-24">
          <h6 className="text-base">NO monthly charge</h6>
          <h6 className="text-base">No coding knowledge required</h6>
          <h6 className="text-base">Premium Support</h6>
        </div>
        <div>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-neutral-800 text-white font-bold rounded-md relative overflow-hidden transition-colors: duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full  before:bg-green-600 hover:bg-green-600 before:w-full before:z-[-1] before:transition-all before:duration-500"
          >
            EXPLORE ALL OUR THEMES
          </a>
        </div>
      </div>
    </div>
  );
}

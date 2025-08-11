import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';

export default function Demos() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const demos = [
    { id: 1, img: '/hd-1.jpg', title: 'Homepage 01', desc: 'Jewelry & Fashion Accessories', link: '/Homepage1' },
    { id: 2, img: '/hd-2.jpg', title: 'Homepage 02', desc: 'Jewelry & Fashion Accessories' },
    { id: 3, img: '/hd-3.jpg', title: 'Homepage 03', desc: 'Jewelry & Fashion Accessories' },
    { id: 4, img: '/hd-4.jpg', title: 'Homepage 04', desc: 'Jewelry & Fashion Accessories' },
    { id: 5, img: '/hd-5.jpg', title: 'Homepage 05', desc: 'Jewelry & Fashion Accessories' },
    { id: 6, img: '/hd-6.jpg', title: 'Homepage 06', desc: 'Jewelry & Fashion Accessories' },
    { id: 7, img: '/hd-7.jpg', title: 'Homepage 07', desc: 'Jewelry & Fashion Accessories' },
    { id: 8, img: '/hd-9.jpg', title: 'Homepage 08', desc: 'Jewelry & Fashion Accessories' },
    { id: 9, img: '/hd-10.jpg', title: 'Homepage 09', desc: 'Jewelry & Fashion Accessories' },
  ];

  return (
    <div
      ref={ref}
      id="Demos"
      className="py-[100px] px-5 bg-[#E8EEF1] text-center font-sans"
    >
      <div className={`${inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-10 transition-all'} max-w-6xl mx-auto`}>
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          <span className="text-black mr-2">09</span> PRE-BUILD DEMOS
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed">
          Comes with 09 Homepage Layouts available with multi style that better for your choice.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 px-2 sm:px-5 md:px-10 transition-transform hover:-translate-y-2 duration-300">
          {demos.map((demo, index) => (
            <div
              key={index}
              onClick={() => demo.link && navigate(demo.link)}
              className="bg-white text-black rounded-2xl p-5 shadow-lg border cursor-pointer hover:shadow-2xl transition duration-300"
            >
              <img
                src={demo.img}
                alt={demo.title}
                className="w-full h-[300px] sm:h-[350px] object-cover rounded-xl"
              />
              <div className="text-left mt-4">
                <h4 className="text-base font-semibold">{demo.title}</h4>
                <p className="text-sm text-gray-600">{demo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



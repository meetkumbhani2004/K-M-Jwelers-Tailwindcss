import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: "/f-1.png",
    title: "Shopify OS 2.0",
    desc: "Theme is built on Shopify 2.0 platform with many newly upgraded functions. Mate allowing you to use sections anywhere."
  },
  {
    icon: "/f-2.png",
    title: "Compatible with Judge.me Review App",
    desc: "The Best Reviews App on the market. This is a powerful application, with a free or paid plan. Boost sales with product reviews!"
  },
  {
    icon: "/f-3.png",
    title: "No Coding Required",
    desc: "All done with 1 click, very intuitive and you hardly need to change the code."
  },
  {
    icon: "/f-4.png",
    title: "Search Auto Suggestion",
    desc: "As soon as a customer types in the search field, the module will show the search results as suggestions."
  },
  {
    icon: "/f-5.png",
    title: "RTL Ready",
    desc: "Some languages of the world (Arabic, Hebrew etc.) are RTL, meaning they are read right-to-left, instead of left-to-right. Our theme supports RTL for all layouts."
  },
  {
    icon: "/f-6.png",
    title: "Multi-Language",
    desc: "Allow your website to use multiple languages. If your online store is available in more than one country, this is an indispensable function."
  },
  {
    icon: "/f-7.png",
    title: "Calculate Free Shipping Bar",
    desc: "Free shipping threshold bar will encourage customers to add more items to their cart, increasing your AOV (average order value) and profits."
  },
  {
    icon: "/f-8.png",
    title: "Product 360, 3D & video",
    desc: "Display products in the most impressive, and most intuitive way. Customers cannot refuse to buy."
  },
];

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} id="Feature" className="py-24 px-5 text-center bg-white font-sans">
      <div className={`${inView ? 'animate-slideUp' : 'opacity-0 translate-y-10'} transition-all duration-700`}> 
        <h1 className="text-4xl font-bold mb-4"><span className="text-black">09</span> Main Features</h1>
        <p className="text-sm max-w-2xl mx-auto text-gray-700 leading-relaxed mb-12">
          What Makes costica Shopify Theme so Power Full ?
        </p>
      </div>

      <div className={`${inView ? 'animate-slideUp' : 'opacity-0 translate-y-10'} grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 md:px-8 transition-all duration-1000`}>
        {features.map((item, index) => (
          <div key={index} className="p-5 rounded-lg hover:shadow-md group cursor-pointer">
            <img
              src={item.icon}
              alt={item.title}
              className="w-[200px] h-[150px] mx-auto transition-transform duration-300 group-hover:animate-[zoomInOut_0.8s_ease-in-out_infinite]"
            />
            <div className="text-center mt-5">
              <h4 className="text-[16px] font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2 mb-5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// tailwind.config.js
// Add inside extend -> keyframes and animation
// keyframes: {
//   zoomInOut: {
//     '0%': { transform: 'scale(1)' },
//     '50%': { transform: 'scale(1.1)' },
//     '100%': { transform: 'scale(1)' },
//   },
// },
// animation: {
//   zoomInOut: 'zoomInOut 0.8s ease-in-out infinite',
// }

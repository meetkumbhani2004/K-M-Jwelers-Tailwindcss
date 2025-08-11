import { useInView } from 'react-intersection-observer';
import '../style/style.css';

export default function MainHeader() {
  const animationProps = {
    threshold: 0.2,
    triggerOnce: false, 
  };

  const [refH2, inViewH2] = useInView(animationProps);
  const [refH1, inViewH1] = useInView(animationProps);
  const [refP, inViewP] = useInView(animationProps);
  const [refFeatures, inViewFeatures] = useInView(animationProps);
  const [refImg, inViewImg] = useInView(animationProps);

  return (
    <div className="py-40 px-5 bg-black text-white text-center font-sans">
      <h2
        ref={refH2}
        className={`text-xl transition-all duration-700 ease-out ${inViewH2 ? 'animate-slideUp delay-[0.1s]' : 'opacity-0 translate-y-10'}`}
      >
        Choosing a Emillia Theme for
      </h2>

      <h1
        ref={refH1}
        className={`text-4xl font-bold mt-2 transition-all duration-700 ease-out ${inViewH1 ? 'animate-slideUp delay-[0.4s]' : 'opacity-0 translate-y-10'}`}
      >
        Your Next Project?
      </h1>

      <p
        ref={refP}
        className={`max-w-xl mx-auto mt-4 text-sm leading-relaxed transition-all duration-700 ease-out ${inViewP ? 'animate-slideUp delay-[0.7s]' : 'opacity-0 translate-y-10'}`}
      >
        Emillia is a sleek and modern Shopify 2.0 theme designed for jewelry stores, fashion accessories, and luxury boutiques. With 09 stunning homepage demos, multiple header & footer options, and a fully responsive design, Emillia provides a seamless shopping experience while ensuring fast performance and easy customization.
      </p>

      <div
        ref={refFeatures}
        className={`flex flex-wrap gap-4 justify-center mt-6 font-medium transition-all duration-700 ease-out ${inViewFeatures ? 'animate-slideUp delay-[1s]' : 'opacity-0 translate-y-10'}`}
      >
        <p>✔ Sections On Every Page</p>
        <p>✔ Drag & Drop Shopify Theme Sections</p>
        <p>✔ Support Filter Collection ver 2.0</p>
      </div>

      <div
        ref={refImg}
        className={`mt-10 transition-all duration-700 ease-out ${inViewImg ? 'animate-slideUp delay-[1.3s]' : 'opacity-0 translate-y-10'}`}
      >
        <img
          src="/templete.png"
          alt="Template"
          className="mx-auto rounded-lg shadow-lg w-[1100px] h-[400px]
            max-[1024px]:w-[990px]
            max-[768px]:w-[700px] max-[768px]:h-[300px]
            max-[576px]:w-[500px] max-[576px]:h-[200px]
            max-[353px]:w-[300px] max-[353px]:h-[200px]
            -mb-[160px]"
        />
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Heding() {
  const lines = [
    <h2 className="text-[30px] font-bold text-[#082E21] mb-6 max-[768px]:text-[20px] text-center">
      Jewelry & Accessories <br />
      Shopify Theme
    </h2>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> Shopify OS 2.0{" "}
    </p>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> NO coding
      knowledge required{" "}
    </p>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> NO Monthly Charge
    </p>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> High Converting
      Shopify Theme
    </p>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> Maximum
      Customizability
    </p>,
    <p className="text-[#082E21] font-medium max-[768px]:text-[12px] max-[576px]:block">
      <FontAwesomeIcon icon={faCheck} className="mr-[30px]" /> Premium Support
    </p>,
    <div className="flex gap-5 mt-5 max-[576px]:justify-center">
      <a
        href="#Demos"
        className="px-2 py-2 bg-white shadow-md font-semibold text-black hover:bg-neutral-800 hover:text-white transition "
      >
        View Demos
      </a>
      <a
        href="/"
        className="px-6 py-2 bg-white shadow-md font-semibold text-black hover:bg-neutral-800 hover:text-white transition"
      >
        Our Portfolio
      </a>
    </div>,
  ];

  const images = [
    <img
      src="/banner1-2.jpg"
      alt="top"
      className="w-[450px] h-[500px] animate-slideFromTop mr-[100px] max-[1024px]:w-[450px] max-[1024px]:h-[400px] max-[1200px]:mr-[50px] max-[768px]:w-[180px] max-[768px]:h-[350px] max-[576px]:w-[280px] max-[576px]:h-[350px] max-[576px]:mr-0"
    />,
    <img
      src="/banner1-1.jpg"
      alt="bottom"
      className="w-[700px] h-[800px] animate-slideFromBottom ml-[-200px] mt-[-390px] max-[1024px]:w-[400px] max-[1024px]:h-[500px] max-[1024px]:ml-[-100px] max-[768px]:w-[260px] max-[768px]:h-[390px] max-[768px]:mt-[-300px] max-[576px]:hidden"
    />,
  ];

  return (
    <div className="flex justify-between px-4 py-[120px] max-[576px]:block max-[768px]:py-[80px]">
      <div className="flex flex-col gap-3 mt-[100px] ml-[30px] py-40 max-[768px]:py-20 max-[576px]:py-8 max-[576px]:px-4">
        {lines.map((line, index) => (
          <div
            key={index}
            className="opacity-0 animate-slideIn"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {line}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10 items-center pt-[50px] max-[576px]:justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="opacity-0"
            style={{
              animation: `${
                index === 0 ? "slideFromTop" : "slideFromBottom"
              } 1s ease-out forwards`,
              animationDelay: `${index === 0 ? "2s" : "2.5s"}`,
            }}
          >
            {img}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./Acording.css";



const AccordionItem = ({ id, isOpen, onClick, title, lines }) => {
  const itemRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); 
      }
    },
    { threshold: 0.2 }
  );

  if (itemRef.current) {
    observer.observe(itemRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <div className="accordion-item" ref={itemRef}>
      <div className="accordion-header" onClick={() => onClick(id)}>
        <span className="accordion-title">{title}</span>
       <span className={`accordion-arrow ${isOpen ? "rotate" : ""}`}>&gt;</span>
      </div>

    {isOpen && isVisible && (
        <div className="accordion-content">
          {lines.map((line, index) => (
            <div
                key={index}
                className={`accordion-line ${isVisible ? 'fade' : ''}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
              <div className="line-border">
                <div
                  className="blue-loader"
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>
              </div>
              <div
                  className={`line-text ${isVisible ? 'fade' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                {line}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AccordionList() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const data = [
    {
      title: "Error message: zip does not contain a valid theme: missing template “layout/theme.liquid” OR “Unfortunately it gives the error that it exceeds the 50MB transferlimit and doesnt allow it to upload.”",
      lines: ["This is a common error when customers download the theme package and upload it immediately with this theme package. First, please extract/unzip the theme package you download from themeforest. The installation file is located in the Theme folder."],
    },
    {
      title: "I bought the wrong theme, can I get a refund?",
      lines: ["When purchasing the wrong theme, please do not download it and immediately submit a refund request. We will check the theme status, if you haven’t downloaded the theme we will refund you. If you have downloaded the theme, you will not receive a refund. Even if we agree to refund you and during that time you download the theme, the refund decision will be reversed."],
    },
    {
        title:"What Is The Support Time?",
        lines:["All of your emails will be reviewed and checked manually carefully. However, based on the number support tickets and the nature of the request itself, the response time can be up to 12 – 24 hours (Monday to Friday). Our timezone is GMT+7"],
    },
    {
        title:"After installing the theme, will my site be installed with sample data?",
        lines:["Images used and included in this theme are for demo purpose only. COMMERCIAL USAGE IS NOT ALLOWED AND IS AT YOUR OWN RISK."],
    },
    {
        title:"Why am I not getting a response after sending support?",
        lines:["Normally we never respond more than 12 - 24 hours after you submit a support request (Except Saturday and Sunday). However, there are some cases where we have responded but customers reflect in the comment that they have not received any emails. Please check some issues:",
            "1 - All emails we respond to you are answered via the email you registered for a Themeforest account",

            "2 - Please double check the Spam Box section, it is possible that for some reason the email has been queued as spam mail."],
    },
    {
        title:"Is the license I bought used forever or has a monthly fee ?",
        lines:["You only need to pay once, no monthly payments"],
    },
    {
        title:"Do I have to pay for any apps you integrate in the theme?",
        lines:["1 - Save $3200+ with our built-in theme features for Free.You don’t need to pay more for additional Apps",

            "2 - There is an app we partner with 3rd party judge.me review, which is a free and paid plan app. If you just use our demo-like features, it's completely free."],
    },
  ];

  return (
    <div className="accordion-wrapper">
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={idx}
          title={item.title}
          lines={item.lines}
          isOpen={openIndex === idx}
          onClick={handleToggle}
        />
      ))}
    </div>
  );
}

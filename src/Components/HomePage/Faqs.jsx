import React, { useState } from 'react';
import './Faq.css';

const faqItems = [
  {
    question: 'What are your business hours?',
    answer: 'Our business hours are Monday to Friday, from 9 AM to 6 PM EST. We are closed on weekends and major holidays. During business hours, our customer service team is available to assist you with any inquiries or support you may need.',
  },
  {
    question: 'Where is your company located?',
    answer: 'We combine traditional techniques with modern design to bring you a stunning jewelry collection. We invite you to visit us and explore our exquisite pieces, each crafted with care and designed to elevate your style. Experience the heart of our craftsmanship and discover the perfect accessory!',
  },
  {
    question: 'How can I contact customer service?',
    answer: 'You can also send an email to our, and we’ll respond within 24 hours. For quick inquiries, visit our websites live chat feature, available 2 hours. Were here to help and ensure you have the best experience with our products',
  },
  {
    question: 'Do you have a newsletter I can subscribe to?',
    answer: 'By signing up, you will receive exclusive updates on our latest jewelry collections, special promotions, and styling tips directly to your inbox. Stay in the loop with our exciting news and be the first to know about upcoming events',
  },
];

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Question</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}>
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQList;

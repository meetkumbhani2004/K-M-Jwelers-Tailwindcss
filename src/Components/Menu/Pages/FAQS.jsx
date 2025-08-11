import HomePageHeader from '../../Header/Header';
import './FAQs.css';
import React, { useState } from 'react';
import HomePageFooter from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    question: 'What shipping methods are available?',
    answer:
      'Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.',
  },
  {
    question: 'How to order?',
    answer:
      'Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.',
  },
  {
    question: 'Where are your products sent from?',
    answer: 'Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.',
  },
  {
    question: 'How to change or modify billing address?',
    answer: 'Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.',
  },
  {
    question: 'Why can’t I log into my account?',
    answer: 'Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.',
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

   
  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span className={`accordion-arrow ${activeIndex === index ? 'rotate' : ''}`}>
              ⌄
            </span>
          </div>
          <div className={`accordion-body ${activeIndex === index ? 'open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};


const FAQs = () => {

  const navigate = useNavigate();
    return(
        <div className='Faqs'>    
            <HomePageHeader/>
            <div className="faqs-page">
              <div className="about-title">
              <h1>FREQUENTLY ASKED QUESTIONS</h1>
              <p>Home • Frequently Asked Questions</p>
              </div>
              <div className='image-Head'>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</h5>
              </div>

              <div className='image-p'>
                <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
              </div>
            </div>
            <FAQAccordion />
            <div className='notfound-container'>
                
                <p>Can't find the answer you are looking for?</p>
                <h1>WE'RE HERE TO HELP!</h1>
            <div className="button-group">
                <button className="btn-dark" onClick={() => navigate('/contact')}>Contact Us Now</button>
                
            </div>
            </div>
            <HomePageFooter />
        </div>
    );
}

export default FAQs;
import React, { useState } from "react";
import "./FAQ.css"
const FAQSection = () => {
  const faqs = [
    {
      question: "Can I enroll in this course despite my lack of marketing background?",
      answer: "You can enroll even if you have no marketing experience or education. This is a course for beginners that covers the basics.",
    },
    {
      question: "Is it a good idea to work in SEO?",
      answer: "SEO training in Chandigarh can be a good choice for a great career. It provides opportunities for growth as businesses and offers job prospects.",
    },
    {
      question: "Why should I enroll in this SEO course in Zirakpur to learn SEO and web design?",
      answer: "Our SEO course in Zirakpur provides experienced instructors and 100% hands-on training using only international projects. We guarantee a job in digital marketing and offer practical experience as a company, not an institution, to make sure you succeed.",
    },
    {
      question: "How about salary growth and opportunities for earning online?",
      answer: "For earning online, SEO offers strong salary growth and many earning opportunities, like freelancing and consulting.",
    },
    {
      question: "What about support for finding jobs after completing the course?",
      answer: "After completing the advanced SEO coaching in Chandigarh, you will get job placement assistance, resume building, and interview preparations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="main-questions-section">
      <div className="questions-section">
        <div className="flex-text">
          <h1><b>FAQs</b></h1>
        </div>
        <p className="p-of-questions-section">
          Here are some of the answers to common questions about our
          <span> <b> advanced SEO coaching in Zirakpur, </b></span>
          the application process, certifications, and assistance with a career in our FAQs.
        </p>
      </div>
      <div className="question-section-main-div">
        <div className="question-main-section">
          <div className="questions-section1">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="first-question1" onClick={() => toggleFAQ(index)}>
                  <p className="first-question-p">{faq.question}</p>
                  <svg className="icon-of-question" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="first-question2">
                    <p className="ans-p">{faq.answer}</p>
                  </div>
                )}
                <hr className="hr-of-q3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

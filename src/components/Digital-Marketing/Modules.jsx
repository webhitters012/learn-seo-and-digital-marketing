import React, { useState } from "react";
import "./Modules.css"; // Import CSS file

const topics = [
  { 
    title: "Website Creation", 
    content: "Learn how to create stunning websites using modern tools.", 
    image: "images/website-creation.jpg" 
  },
  { 
    title: "Pay Per Click (Google Ads)", 
    content: "Master Google Ads and optimize ad campaigns.", 
    image: "images/google-ads.jpg" 
  },
  { 
    title: "SEO (Search Engine Optimization)", 
    content: "Improve your website's ranking on search engines.", 
    image: "images/seo.jpg" 
  },
  { 
    title: "Local SEO", 
    content: "Boost visibility for local businesses with local SEO strategies.", 
    image: "images/local-seo.jpg" 
  },
];

export default function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-grid">
        {topics.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleExpand(index)}>
              <span>{index + 1}. {item.title}</span>
              <button className="accordion-button">
                {expandedIndex === index ? "−" : "+"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
                <img src={item.image} alt={item.title} className="accordion-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  const reviews = [
    {
      name: 'Sarah Lee',
      date: 'June 10, 2024',
      text: 'I ve been purchasing from this online store for the some day a go, and I am consistently impressed by their service. The website is user-friendly, making it easy to find and order products. The shipping is always prompt, and the items arrive well-packaged and in excellent condition. Customer service is also top-notch; they are responsive and helpful with any inquiries or issues. I highly recommend this store for a seamless and reliable shopping experience.',
      helpfulCount: 5,
    },
    {
      name: 'David Martinez',
      date: 'Jan 10, 2024',
      text: 'This eCommerce site has become my go-to for all my online shopping needs. The product selection is fantastic, and the detailed descriptions and customer reviews help me make informed decisions. I appreciate the fast delivery and the quality of the products, which always match the descriptions. The return process is straightforward if needed, and the support team is quick to assist with any problems. I’m very satisfied with my experiences here and would recommend it to others.',
      helpfulCount: 10,
    },
  ];

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`} 
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-content">
        {activeTab === 'description' ? (
          <div className="descriptionbox-description">
            <p>Shoes are a fundamental part of everyone's wardrobe, providing both style and comfort for men, women, and kids. For men, 
              shoes range from classic leather dress shoes to sporty sneakers, offering versatility for both professional and casual 
              settings. Women's shoes come in a wide variety of styles, including elegant heels, practical flats, and athletic options, 
              catering to different fashion preferences and activities. Kids' shoes are designed with comfort and growth in mind, 
              featuring playful designs and sturdy construction to support their active lifestyles. Whether it's for work, play, or 
              special occasions, the right pair of shoes enhances any outfit and provides essential support and protection for the feet.
            </p>
          </div>
        ) : (
          <div className="descriptionbox-reviews">
            <h3>Review</h3>
            <div className="review-filters">
              <button>Newest</button>
              <button>Highest</button>
              <button>Lowest</button>
              <button>Most Helpful</button>
            </div>
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`review ${selectedReviewIndex === index ? 'selected' : ''}`}
                onClick={() => setSelectedReviewIndex(index === selectedReviewIndex ? null : index)}
              >
                <p><strong>{review.name}</strong> - {review.date}</p>
                {selectedReviewIndex === index && (
                  <div>
                    <p>{review.text}</p>
                    <p>{review.helpfulCount} people found this helpful</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;

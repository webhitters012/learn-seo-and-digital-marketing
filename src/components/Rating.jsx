import React, { useEffect, useState } from 'react';
import "./Rating.css"; // Your custom styles

const RatingsAndReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 2000;
  const stopSlideId = 'stopSlide';
  let intervalId;

  const slides = [
    { src: './Images/Hiring-Partners/AKS-Developers.png', alt: 'AKS Developers' },
    { src: './Images/Hiring-Partners/Architects-Group.png', alt: 'An Architects Group' },
    { src: './Images/Hiring-Partners/Art.png', alt: 'Art' },
    { src: './Images/Hiring-Partners/Arvind-Herbal-Labs.png', alt: 'Arvind-Herbal-Labs' },
    { src: './Images/Hiring-Partners/Barphani.png', alt: 'Barphani' },
    { src: './Images/Hiring-Partners/BEST-IELTS-COACHING-INSTITUTE-IN-CHANDIGARH.png', alt: 'Test-Ilets' },
    { src: './Images/Hiring-Partners/Book-My-Air-Travel.png', alt: 'Book-My-Air-Travel' },
    { src: './Images/Hiring-Partners/Move ONN.png', alt: 'Move-ONN' },
    { src: './Images/Hiring-Partners/Women-Care-Clinic.png', alt: 'Women-Care-Clinic' },
    { src: './Images/Hiring-Partners/Adore-me-boutique.png', alt: 'Adore-me-boutique' },
    { src: './Images/Hiring-Partners/Browse-Wheels.png', alt: 'Browse-Wheels'},
    { src: './Images/Hiring-Partners/California.png', alt:'California'},
    { src: './Images/Hiring-Partners/CPS.png', alt:'CPS'},
    { src: './Images/Hiring-Partners/CREx-Property.png', alt:'CREx-Property'},
    { src: './Images/Hiring-Partners/CSM.png', alt: 'CSM'},
    { src: './Images/Hiring-Partners/Elites.png', alt:'Elites'},
    { src: './Images/Hiring-Partners/Five-Star-Watches.png', alt:'Five-Star-Watches'},
    { src: './Images/Hiring-Partners/Fortnite-for-less.png', alt:'Fortnite-for-less'},
    { src: './Images/Hiring-Partners/HGroup-India.png', alt:'HGroup-India'},
    { src: './Images/Hiring-Partners/Hire-taxi.png', alt:'Hire-taxi'},
    { src: './Images/Hiring-Partners/Holy-Blood.png', alt:'Holy-Blood'},
    { src: './Images/Hiring-Partners/Hunt-for-electronics.png', alt:'Hunt-for-electronics'},
    { src: './Images/Hiring-Partners/Incredible-Blender.png', alt:'Incredible-Blender'},
    { src: './Images/Hiring-Partners/Invest-Reinvest.png', alt:'Invest-Reinvest'},
    { src: './Images/Hiring-Partners/Kids-Clothes.png', alt:'Kids-Clothes'},
    { src: './Images/Hiring-Partners/LS&W.png', alt:'Learn-Seo-&-Web-Design'},
    { src: './Images/Hiring-Partners/Monix.png', alt:'Monix'},
    { src: './Images/Hiring-Partners/Nivesh-Counsultant.png', alt:'Nivesh-Counsultant'},
    { src: './Images/Hiring-Partners/Perfume Breeze.png', alt:'Perfume Breeze'},
    { src: './Images/Hiring-Partners/Proptye.png', alt:'Proptye'},
    { src: './Images/Hiring-Partners/RealFinc.png', alt:'RealFinc'},
    { src: './Images/Hiring-Partners/Red-Club-VIP.png', alt:'Red-Club-VIP'},
    { src: './Images/Hiring-Partners/Renovin-Skin-Care.png', alt:'Renovin-Skin-Care'},
    { src: './Images/Hiring-Partners/Roof-&-Height.png', alt:'Roof-&-Height'},
    { src: './Images/Hiring-Partners/RR.png', alt:'RR'},
    { src: './Images/Hiring-Partners/SCHOLARS---The-Visa-Destination.png', alt:'SCHOLARS---The-Visa-Destination'},
    { src: './Images/Hiring-Partners/Show-discount.png', alt:'Shoe-Discount'},
    { src: './Images/Hiring-Partners/Sushma.png', alt:'Sushma'},
    { src: './Images/Hiring-Partners/The-Green-Nest.png', alt:'The-Green-Nest'},
    { src: './Images/Hiring-Partners/Virtual recipes.png', alt:'Virtual recipes'},
    { src: './Images/Hiring-Partners/Web-Hitters.png', alt:'Web-Hitters'},
  ];

  useEffect(() => {
    const autoSlide = () => {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        if (slides[currentIndex]?.alt === stopSlideId) {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentIndex(0);
            autoSlide();
          }, slideDuration);
        }
      }, slideDuration);
    };
    autoSlide();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const moveSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container mt-10">
      <div className="grid  lg:grid-cols-2 gap-4">
        <div className="p-4">
          <h3 className="text-center text-2xl font-bold mb-4">Rating & Review</h3>
          <div className="flex flex-wrap justify-center gap-5">
            <img className="w-40 h-auto rounded-lg shadow-lg" src="Images/Rating/Google-Rating new.jpg" alt="Google Rating" />
            <img className="w-40 h-auto rounded-lg shadow-lg" src="Images/Rating/Jusdial-Rating new.jpg" alt="Justdial Rating" />
            <img className="w-40 h-auto rounded-lg shadow-lg" src="Images/Rating/facebook review.jpg" alt="Facebook Review" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-center text-2xl font-bold mb-4">Associated With</h3>
          <div className="associated-container">
            <div className="associated-slider" style={{ transform: `translateX(-${currentIndex * 150}px)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="associated-slide">
                  <img src={slide.src} alt={slide.alt} className="w-40 h-20 rounded-lg shadow-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-6">
        <h3 className="text-2xl font-bold">Recruitment Partner</h3>
        <div className="mx-auto w-1/2">
          <img className="w-1/2 h-auto rounded-lg shadow-md" src="./Images/Hiring-Partners/Move ONN.png" alt="Recruitment Partner" />
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;

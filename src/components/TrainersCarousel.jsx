import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TrainersCarousel.css"; // Your custom styles

const trainers = [
  { img: "/Images/trainers/234444.jpg", name: "Sandeep Bhandari", expertise: "Digital Marketing Expert", since: "Since 2008" },
  { img: "/Images/trainers/Om-Sir.png", name: "Om Gupta", expertise: "SEO Expert", since: "Since 2019" },
  { img: "/Images/trainers/Rahul1.png", name: "Rahul Yadav", expertise: "Digital Marketing Expert", since: "Since 2013" },
  { img: "/Images/trainers/Manish-Sir.png", name: "Manish Bhardwaj", expertise: "Web Designer", since: "Since 2015" },
];

const TrainersCarousel = () => {
  return (
    <section id="trainer">
      <div className="trainers">
        <h2>
          Meet Our <span style={{ color: "#de3335" }}>Expert Trainers</span>
        </h2>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay
          autoplayTimeout={3000}
          dots={true} // Enable dots navigation
          nav={true}  // Enable navigation arrows
          responsive={{
            0: { items: 1 },  // 1 item for mobile screens
            600: { items: 2 }, // 2 items for tablets
            1000: { items: 3 } // 3 items for desktops
          }}
        >
          {trainers.map((trainer, index) => (
            <div className="item" key={index}>
              <img src={trainer.img} alt={trainer.name} />
              <h4>{trainer.name}</h4>
              <p>{trainer.expertise}<br />{trainer.since}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TrainersCarousel;

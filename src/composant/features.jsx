// FeaturesComponent.jsx

import React from 'react';
import "./features.css";

const FeaturesComponent = () => {
  const features = [
    {
      image: "./img/icon-chat.png",
      title: "You are our #1 priority",
      description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      image: "./img/icon-money.png",
      title: "Security you can trust",
      description: "We use top of the line encryption to make sure your data and money is always safe."
    },
    {
      image: "./img/icon-money.png",
      title: "More savings means higher rates",
      description: "The more you save with us, the higher your interest rate will be!"
    }
  ];

  return (
    <section className='features'>
  {features.map((feature, index) => (
    <div className='feature-item' key={index}>
      <img className='feature-icon' src={feature.image} alt="" />
      <h3 className='feature-item-title'>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  ))}
</section>

  );
};

export default FeaturesComponent;

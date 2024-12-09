import React from "react";

import lamborghini from "../assets/mers1.png";
import ferrari from "../assets/mers2.png";
import bugatti from "../assets/mers3.png";
import porsche from "../assets/mers4.webp";
import bmw from "../assets/mers6.webp";
import audi from "../assets/mers1.png";

const CarListing = () => {
  const cars = [
    { name: "Mercedes-Benz GLB", image: bugatti, price: "50,000€" },
    { name: "Mercedes-Benz CLA", image: audi, price: "40,000€" },
    { name: "Mercedes-Benz EQS", image: bmw, price: "120,000€" },
    { name: "Mercedes-Benz CLA", image: lamborghini, price: "40,000€" },
    { name: "Mercedes-Benz GLE", image: porsche, price: "75,000€" },
    { name: "Mercedes-Benz E-class", image: ferrari, price: "120,000€" },
  ];

  return (
    <section className="bg-orange-300 py-5 px-6">
      <h1 className="text-center font-bold text-2xl mb-6">Prabangūs Automobiliai</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="car-card hover:shadow-lg transition-shadow"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-4">{car.name}</h2>
            <p className="text-gray-600">{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarListing;





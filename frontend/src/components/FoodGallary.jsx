import React, { useEffect, useState } from "react";

const FoodGallary = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(`${window.location.origin}/api/foods`);

        if (!response.ok) {
          throw new Error("Network response was not OK !");
        }
        const data = await response.json();
        setFoods(data);
      } catch (err) {
        console.error("Error in fetching data", err);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="flex flex-col w-screen justify-center items-center bg-[#ffedd2] py-10 max-sm:py-6 h-auto">
      <div className="grid grid-cols-3 gap-20 max-sm:gap-4 max-sm:grid-cols-2 bg-beige">
        {foods.map((food) => (
          <div
            key={food._id}
            className="flex items-center justify-center overflow-hidden rounded shadow-lg"
          >
            <img
              src={`${window.location.origin}/uploads/${food.image}`}
              alt={food.name}
              className="object-cover w-full h-auto lg:w-60 lg:h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallary;

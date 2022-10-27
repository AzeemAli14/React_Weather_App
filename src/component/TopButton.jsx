import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Lahore",
    },
    {
      id: 2,
      title: "Islamabad",
    },
    {
      id: 3,
      title: "Karachi",
    },
    {
      id: 4,
      title: "Multan",
    },
    {
      id: 5,
      title: "Peshawar",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
      <button
        key={city.id}
        className="text-white text-lg font-medium"
        onClick={() => setQuery({ q: city.title })}
      >
        {city.title}
      </button>
    ))}
  </div>
  );
}

export default TopButton;

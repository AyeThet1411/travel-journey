import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/separate";
import data from "./components/data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        mapLink={item.googleMapsLink}
        startDate={item.startDate}
        endDate={item.endDate}
        img={item.imageURL}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

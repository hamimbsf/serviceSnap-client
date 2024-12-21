import React from "react";
import Card from "../../components/Card";

const PopularServices = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default PopularServices;

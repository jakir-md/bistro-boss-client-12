import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu from "../../shared/Menu";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setItems(popular);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <section className="w-3/4 mx-auto mb-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {items.map((item) => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularItems;

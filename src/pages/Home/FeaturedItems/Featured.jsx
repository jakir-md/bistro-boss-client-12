import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="py-10" style={{ backgroundImage: `url(${featuredImg})` }}>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"check it out"}
      ></SectionTitle>
      <section>
        <div className="flex gap-10 justify-center items-center px-40 py-30 pt-0 pb-30">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="text-white">
            <h1 className="text-xl">March 20, 2023</h1>
            <h1 className="text-3xl py-2">Where can i get some?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius id
              eligendi ratione velit facilis nemo maiores nostrum, beatae,
              incidunt cumque quia delectus eveniet fuga obcaecati officiis
              ullam nesciunt tenetur repellendus.
            </p>
            <div className="pt-10">
              <button className="btn btn-outline">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;

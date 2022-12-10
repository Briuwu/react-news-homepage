import React from "react";
import Img1 from "../assets/images/image-retro-pcs.jpg";
import Img2 from "../assets/images/image-top-laptops.jpg";
import Img3 from "../assets/images/image-gaming-growth.jpg";

const data = [
  {
    number: "01",
    img: Img1,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    number: "02",
    img: Img2,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    number: "03",
    img: Img3,
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
];

const Card = () => {
  return data.map((item) => (
    <article className={`card ${item.number}`} key={item.number}>
      <img className="card-img" src={item.img} alt={item.title} />
      <div className="card-info">
        <p className="card-info-number">{item.number}</p>
        <h3 className="card-info-title">{item.title}</h3>
        <p className="card-info-desc">{item.desc}</p>
      </div>
    </article>
  ));
};

export default Card;

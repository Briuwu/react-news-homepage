import React from "react";

const data = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const New = () => {
  const dataElements = data.map((item) => (
    <div key={item.id} className="new-info">
      <p className="new-info-title">{item.title}</p>
      <p className="new-info-desc">{item.desc}</p>
    </div>
  ));
  return (
    <article className="new">
      <p className="new-title">New</p>
      {dataElements}
    </article>
  );
};

export default New;

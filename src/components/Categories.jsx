import { useState } from "react";
import { store } from "../data/store";
import { categories, countInCategory } from "../utils/catalog";
import CategoryCard from "./CategoryCard";
import Reveal from "./Reveal";
import "./Categories.css";

export default function Categories() {
  const [active, setActive] = useState(0);
  const { title, subtitle } = store.home.categories;

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Reveal>

        <Reveal className="cats">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.name}
              category={category}
              count={countInCategory(category)}
              active={i === active}
              onActivate={() => setActive(i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

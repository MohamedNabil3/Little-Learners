import React from "react";
import "../../style/about.css";

export default function Section({ tag, title, description }) {
  return (
    <section className="mission-section">
      {tag && <div className="tag">{tag}</div>}
      {title && <h2 className="title">{title}</h2>}
      {description && <p className="description">{description}</p>}
    </section>
  );
}

import React, { useState } from "react";

import GalleryCard from "../ReusableComponent/Gallery/GalleryCard.jsx";
import Div from "../ReusableComponent/Header/Div/Div.jsx";
import styles from "./GalleriesContainer.module.css";
import { galleries, bText, hText, pText } from "./GalleriesImagesInfo.js"; // Importing feature cards information

function GalleriesContainer(props) {
  const [GalleryRender, setGalleryRender] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  const [activeButton, setActiveButton] = useState("all");

  function handleKeepTrue(index) {
    setGalleryRender(GalleryRender.map((_, i) => i === index));
    setActiveButton(index); // store index of clicked button
  }

  function handleSetAllTrue() {
    setGalleryRender(GalleryRender.map(() => true));
    setActiveButton("all"); // special case for ALL
  }

  return (
    <>
      <Div buttonText={bText} headerText={hText} paragraphText={pText} />
      <div className={styles.filterButtonContainer}>
        <button
          className={[
            styles.filterButton,
            activeButton === "all" ? styles.active : "",
          ].join(" ")}
          onClick={handleSetAllTrue}
        >
          ALL
        </button>

        <button
          className={[
            styles.filterButton,
            activeButton === 0 ? styles.active : "",
          ].join(" ")}
          onClick={() => handleKeepTrue(0)}
        >
          Classrooms
        </button>

        <button
          className={[
            styles.filterButton,
            activeButton === 1 ? styles.active : "",
          ].join(" ")}
          onClick={() => handleKeepTrue(1)}
        >
          Library
        </button>

        <button
          className={[
            styles.filterButton,
            activeButton === 2 ? styles.active : "",
          ].join(" ")}
          onClick={() => handleKeepTrue(2)}
        >
          Science Lab
        </button>

        <button
          className={[
            styles.filterButton,
            activeButton === 3 ? styles.active : "",
          ].join(" ")}
          onClick={() => handleKeepTrue(3)}
        >
          Computer Lab
        </button>

        <button
          className={[
            styles.filterButton,
            activeButton === 4 ? styles.active : "",
          ].join(" ")}
          onClick={() => handleKeepTrue(4)}
        >
          Garden and Nature Area
        </button>
      </div>
      <div className={styles.GalleriesContainer}>
        {galleries.map(
          (gallery, index) =>
            GalleryRender[index] && (
              <GalleryCard
                key={index}
                gallery={gallery.images}
                headertext={gallery.title}
                paragraphtext={gallery.description}
              />
            )
        )}
      </div>
    </>
  );
}

export default GalleriesContainer;

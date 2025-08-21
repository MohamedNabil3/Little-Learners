import React, { useState, useEffect } from 'react';
import styles from './GalleryCard.module.css';
import CardImage from "../Card/CardImage/CardImage.jsx";
import CardHeader from "../Card/CardHeader/CardHeader.jsx";
import CardParagraph from "../Card/CardParagraph/CardParagraph.jsx";

// Custom hook to get window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

function GalleryCard(props) {
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth >= 768 && windowWidth <= 991;
  const isMobile = windowWidth <= 767;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    // Logic to move to the next pair (or single image on mobile)
    if (isTablet) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 2) % props.gallery.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.gallery.length);
    }
  };

  const handlePrevClick = () => {
    // Logic to move to the previous pair (or single image on mobile)
    if (isTablet) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 2 + props.gallery.length) % props.gallery.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + props.gallery.length) % props.gallery.length);
    }
  };

  return (
    <div className={styles.GalleryCard}>
      <div className={styles.ImageContainer}>
        {isMobile ? (
          // Mobile View: Render a single image with buttons
          <CardImage imgsrc={props.gallery[currentImageIndex]} />
        ) : isTablet ? (
          // Tablet View: Render a pair of images with buttons
          <>
            <CardImage imgsrc={props.gallery[currentImageIndex]} />
            <CardImage imgsrc={props.gallery[currentImageIndex + 1]} />
          </>
        ) : (
          // Desktop/Laptop View: Render all images without buttons
          props.gallery.map((Galleryimage, index) => (
            <CardImage
              key={index}
              imgsrc={Galleryimage}
            />
          ))
        )}
      </div>

      {/* Only show controls on mobile and tablet */}
      {(isMobile || isTablet) && (
        <div className={styles.controls}>
          <button onClick={handlePrevClick}>←</button>
          <button onClick={handleNextClick}>→</button>
        </div>
      
    )}

      <CardHeader text={props.headertext} />
      <CardParagraph text={props.paragraphtext} />
    </div>
  );
}

export default GalleryCard;
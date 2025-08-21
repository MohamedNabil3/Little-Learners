import styles from "./CardImage.module.css";
function CardImage({ imgsrc, top = "", style }) {
  return (
    <>
      <img
        className={styles.CardImage}
        src={imgsrc}
        style={style ? style : { top }}
        alt="icon"
      />
    </>
  );
}

export default CardImage;

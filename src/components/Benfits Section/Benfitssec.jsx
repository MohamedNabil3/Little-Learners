import Sectionheading from "../Reusable Components/SectionsHeading/Sectionheading";
import Benfitscard from "./Benfitscard";
import cardicon1 from "../../Images/BenfitsCard-icon1.png";
import cardicon2 from "../../Images/BenfitsCard-icon2.png";
import cardicon3 from "../../Images/BenfitsCard-icon3.png";
import cardicon4 from "../../Images/BenfitsCard-icon4.png";
import cardicon5 from "../../Images/BenfitsCard-icon5.png";
import cardicon6 from "../../Images/BenfitsCard-icon6.png";

function Benfitssec() {
  const cards = [
    {
      imgsrc: cardicon1,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      imgsrc: cardicon2,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      imgsrc: cardicon3,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      imgsrc: cardicon4,
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      imgsrc: cardicon5,
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      imgsrc: cardicon6,
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];
  return (
    <div className="Benfitssec-container">
      <Sectionheading
        subtitle="Children Deserve Bright Future"
        title="Our Benefits"
        description="With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future."
      />
      <div className="cardsContainer">
        {cards.map((card, index) => (
          <Benfitscard
            key={index}
            imgsrc={card.imgsrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Benfitssec;

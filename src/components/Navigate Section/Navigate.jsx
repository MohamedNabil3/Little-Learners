import Sectionheading from "../Reusable Components/SectionsHeading/Sectionheading";
import NavSecCard from "./NavSecCard.jsx";

function Navigate() {
  const LinksFirstGroup = [
    {
      Title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    },
    {
      Title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
  ];

  const LinksSecoundGroup = [
    {
      Title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
      Title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    },
  ];
  return (
    <div className="Navigate-container">
      <Sectionheading
        subtitle="Explore More"
        title="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <div className="Navigatecards">
        <div className="firstgroup">
          {LinksFirstGroup.map((link, index) => (
            <NavSecCard
              key={index}
              title={link.Title}
              body={link.description}
            />
          ))}
        </div>
        <div className="secoundgroup">
          {LinksSecoundGroup.map((link, index) => (
            <NavSecCard title={link.Title} body={link.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigate;

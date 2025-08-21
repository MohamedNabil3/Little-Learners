import Sectionheading from "../Reusable Components/SectionsHeading/Sectionheading";
import Questioncard from "./Qestioncard";
function Question() {
  const QuestionsFirstGroup = [
    {
      Title: "What are the school hours at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "Is there a uniform policy for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];

  const QuestionsSecoundGroup = [
    {
      Title: "How do you handle food allergies and dietary restrictions?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "What is the teacher-to-student ratio at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "How do you handle discipline and behavior management?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Title: "How do you handle discipline and behavior management?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];
  return (
    <div className="Question-container">
      <Sectionheading
        subtitle="Solutions For The Doubts"
        title="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <div className="Questionscards">
        <div className="firstgroup">
          {QuestionsFirstGroup.map((question, index) => (
            <Questioncard
              key={index}
              title={question.Title}
              body={question.description}
            />
          ))}
        </div>
        <div className="secoundgroup">
          {QuestionsSecoundGroup.map((question, index) => (
            <Questioncard
              key={index}
              title={question.Title}
              body={question.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;

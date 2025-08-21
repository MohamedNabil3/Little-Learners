import Infostats from "./Infostats";

function Infotext() {
  return (
    <div className="Infotext-container">
      <div className="head">
        <p>Welcome to Little Learners Academy</p>
        <h1>
          Where Young Minds Blossom and <span>Dreams Take Flight.</span>
        </h1>
      </div>
      <div className="pharagrah">
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </div>
      <Infostats />
    </div>
  );
}

export default Infotext;

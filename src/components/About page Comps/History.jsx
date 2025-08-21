import "../../style/about.css";
import HistoryIcon from "../../Images/About imgs/Abstract Design (4).svg";

export default function History() {
  return (
    <div className="history-wrapper">
      <div className="history-container">
        <div className="history-item">
          <div className="history-date">
            <img src={HistoryIcon} alt="history icon" />
            <span>2023</span>
          </div>
          <div className="history-content">
            <h3>Resilience and Future Horizons</h3>
            <p>
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education. Looking ahead with
              optimism, we envision a future filled with boundless possibilities
              as we continue shaping the leaders and thinkers of tomorrow.
            </p>
          </div>
        </div>

        <div className="history-item">
          <div className="history-date">
            <img src={HistoryIcon} alt="history icon" />
            <span>2017</span>
          </div>
          <div className="history-content">
            <h3>Innovation and Technology</h3>
            <p>
              Innovation became the driving force behind our kindergarten's
              progress from 2016 to 2020. Embracing the latest educational
              technologies, we crafted engaging and interactive learning
              experiences for our students.
            </p>
          </div>
        </div>

        <div className="history-item">
          <div className="history-date">
            <img src={HistoryIcon} alt="history icon" />
            <span>2012</span>
          </div>
          <div className="history-content">
            <h3>Expansion and Recognition</h3>
            <p>
              These years marked as a period of expansion and recognition for
              our school. As we extended our facilities and enhanced our
              curriculum, we received accolades for our commitment to quality
              education and innovative teaching methodologies.
            </p>
          </div>
        </div>

        <div className="history-item">
          <div className="history-date">
            <img src={HistoryIcon} alt="history icon" />
            <span>2005</span>
          </div>
          <div className="history-content">
            <h3>Inception and Growth</h3>
            <p>
              Established in 2005, our kindergarten school began its journey
              with a vision to provide a nurturing space for young minds to
              explore, learn, and grow. Over the next five years, we witnessed
              significant growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

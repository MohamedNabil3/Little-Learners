import "../../style/main.css";
function Links() {
  return (
    <div className="Linkscontainer">
      <div className="linksgroup">
        <div className="LinksList">
          <ul>
            <h3 className="Linkshead">Home</h3>
            <li>
              <a href="" alt="">
                Features
              </a>
            </li>
            <li>
              <a href="" alt="">
                Our Testimonials
              </a>
            </li>
            <li>
              <a href="" alt="">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="LinksList">
          <ul>
            <h3 className="Linkshead">About</h3>
            <li>
              <a href="" alt="">
                Our Mission
              </a>
            </li>
            <li>
              <a href="" alt="">
                Our Vission
              </a>
            </li>
            <li>
              <a href="" alt="">
                Awards and Recognition
              </a>
            </li>
            <li>
              <a href="" alt="">
                History
              </a>
            </li>
            <li>
              <a href="" alt="">
                Teachers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="linksgroup">
        {" "}
        <div className="LinksList">
          <ul>
            <h3 className="Linkshead">Academic</h3>
            <li>
              <a href="" alt="">
                Specail Features
              </a>
            </li>
            <li>
              <a href="" alt="">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="LinksList">
          <ul>
            <h3 className="Linkshead">Contact us</h3>
            <li>
              <a href="" alt="">
                Information
              </a>
            </li>
            <li>
              <a href="" alt="">
                Map & Direction
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Links;

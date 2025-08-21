import "../../style/main.css";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Terms from "./Terms";
function Info() {
  return (
    <div className="Infocontainer">
      <Contact />
      <hr></hr>
      <Terms />
      <hr></hr>
      <Copyright />
    </div>
  );
}

export default Info;

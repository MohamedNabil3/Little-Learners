import Benfitssec from "../components/Benfits Section/Benfitssec.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Navigate from "../components/Navigate Section/Navigate.jsx";
import Question from "../components/Questions section/Questions.jsx";
import Testimonials from "../components/Testimonials Section/Testimonials.jsx";

function Home() {
  return (
    <div className="Home-container">
      {/* <Header /> */}
      <Landing />
      <Benfitssec />
      <Testimonials />
      <Question />
      <Navigate />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

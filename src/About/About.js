import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from"./component/nav";
import Footer from "./component/footer";
import { Team } from "./team";

 function About() {
    return (
      <>
      <Nav/>
      <Team/>
      <Footer/>
      </>
    );
  }
  export default About;
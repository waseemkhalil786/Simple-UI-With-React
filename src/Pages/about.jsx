import { Link } from "react-router-dom";

function AboutUs(params) {
  return (
    <div className="about-container">
      <h1 className="about-head">About Us</h1>
      <div className="about-dec">
        <p className="para-home">
          Affiliate marketing is the process by which an affiliate earns a
          commission f or marketing another person’s or company’s products. The
          affiliate simply searches for a product they enjoy, then promotes that
          product and earns a piece of the profit from each sale they make. The
          sales are tracked via affiliate links from one website to another.
        </p>
      </div>
      <h1 className="social-head">Social Platforms</h1>
      <div className="main-card">
        <div className="card">
          <h1>Github </h1>
          <p> Follow this page </p>
          <Link to="https://github.com/waseemkhalil786">
            <li> Github Here </li>
          </Link>
        </div>
        <div className="card">
            <h1>Linkedin</h1>
            <p>Follow this page</p>
        <Link to="https://www.linkedin.com/in/waseem-khalil-795b732a7/">
            <li> Linkedin </li>
          </Link>
        </div>
        <div className="card">
        <h1>Youtube </h1>
            <p> Subscribe this page</p>
        <Link to="https://www.youtube.com/@WaseemKhalil-kh6um">
            <li> Youtube </li>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;

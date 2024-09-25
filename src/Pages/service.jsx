import { Link } from "react-router-dom";

function Service() {
    return(
       <>
       <h1 className="service">Services</h1>
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
          <h1>With React </h1>
          <p> Simple Image Gallry </p>
          <Link to="https://66cc3740268038fbe18e09f1--musical-moxie-6e76f8.netlify.app/">
            <li> Only UI </li>
          </Link>
        </div>
       <div className="card">
          <h1>With Javascript </h1>
          <p> Simple color Genrator</p>
          <Link to="https://waseemkhalil786.github.io/color-generator/">
            <li>Color Genrator</li>
          </Link>
        </div>
       <div className="card">
          <h1>With HTML</h1>
          <p> Cli Github UI</p>
          <Link to="https://waseemkhalil786.github.io/Hacathoane-Mini/">
            <li>Github CLI</li>
          </Link>
        </div>
       <div className="card">
          <h1>Github </h1>
          <p> Follow this page </p>
          <Link to="https://github.com/waseemkhalil786">
            <li> Github Here </li>
          </Link>
        </div>
        </div>
       </>
    )
}
export default Service;
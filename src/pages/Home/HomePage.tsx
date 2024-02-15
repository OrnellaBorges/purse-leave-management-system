import { Link } from "react-router-dom";
import homeImage from "../../assets/welcome-image.png";
import "./HomeStyle.css";

export function HomePage() {
  return (
    <main className="main-welcome">
      <section className="section-welcome">
        <h1 className="title-level1">Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="welcome-button-container">
          <Link className="button button-welcome" to="/manager">
            Admin
          </Link>
          <Link className="button button-welcome" to="/employee">
            Employee
          </Link>
        </div>
      </section>
      <section className="section-image">
        <img
          className="image"
          src={homeImage}
          alt="jeune fille qui travaille"
        />
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <div className="home-header">
          <div className="title">
            <h1>HRnet</h1>
          </div>
          <Link className="nav-button" to="/">
            Return to the homepage
          </Link>
        </div>
        <div className="container">
          <h2>Sorry...</h2>
          <p>This page doesn't exist.</p>
        </div>
      </div>
    </>
  );
}

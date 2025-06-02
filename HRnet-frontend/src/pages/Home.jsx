import Form from "../components/form/Form";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-header">
          <div className="title">
            <h1>HRnet</h1>
          </div>
          <Link className="nav-button" to="/employee-list">
            View Current Employees
          </Link>
        </div>
        <div className="container">
          <div className="form-container">
            <h2>Create Employee</h2>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

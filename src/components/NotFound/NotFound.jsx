import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12 col-sm-offset-1 text-center">
                <div className="bg-img">
                  <h1 className="text-center">404</h1>
                </div>
                <div className="content">
                  <h3 className="h2">Page not found!</h3>
                  <p>are you sure you want to be here?</p>
                  <Link to="/" className="link">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFound;

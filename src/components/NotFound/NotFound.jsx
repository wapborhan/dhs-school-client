import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="col-sm-12 col-sm-offset-1 text-center">
                <div class="bg-img">
                  <h1 class="text-center">404</h1>
                </div>
                <div class="content">
                  <h3 class="h2">Page not found!</h3>
                  <p>are you sure you want to be here?</p>
                  <Link to="/" class="link">
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

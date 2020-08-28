import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md navDiv">
        <div className="container-fluid">
          <AnchorLink className="navbar-brand">
            <img
              src="assets/img/logo.png"
              className="img-fluid"
              width="100"
              alt="Logo"
            />
          </AnchorLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <AnchorLink className="nav-link">Home</AnchorLink>
              </li>
              <li className="nav-item" role="presentation">
                <AnchorLink className="nav-link" href="#howTo">
                  How to use
                </AnchorLink>
              </li>
              <li className="nav-item" role="presentation">
                <AnchorLink className="nav-link" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="searchFormDiv">
        <div className="d-flex justify-content-center align-items-center searchFormOuter">
          <div className="d-flex align-items-center order-12 searchFormCover">
            <div className="container searchFormInner">
              <h1 className="text-center">Search for food recipes</h1>
              <h3 className="text-center">I want to prepare</h3>
              <form className="searchForm">
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Chicken"
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary" type="button">
                        Search for recipes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="highlight-clean">
        <div className="container">
          <div className="recipeDiv">
            <h2 className="text-center">Recipes</h2>
            <p className="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="howTo" className="highlight-clean howTo">
        <div className="container">
          <div className="intro">
            <h3>How to use</h3>
            <p>
              Simply type the food item you want to prepare e.g chicken, fish. A
              list of several way preparation will be shown plus the ingredients
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <p>chef hook by kodedict</p>
            </div>
            <div className="col-md-6 text-center">
              <p>www.github.com/kodedict</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

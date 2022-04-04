import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navebar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Movie Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-2">
                <NavLink
                  to="/Movies"
                  style={{
                    color: "white",
                    padding: "5%",
                    textDecorationLine: "none",
                  }}
                  activeStyle={{
                    fontWeight: "bold",
                    //color: "green",
                    padding: "5%",
                    margin: "3%",
                    // borderBottom: "2px solid green",
                    // borderRadius: "10%",
                  }}
                >
                  <button type="button" className="btn btn-outline-success">
                    Movies
                  </button>
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  to="/Favourites"
                  style={{
                    color: "white",
                    padding: "5%",
                    textDecorationLine: "none",
                  }}
                  activeStyle={{
                    fontWeight: "bold",
                    //color: "green",
                    padding: "5%",
                    margin: "3%",
                    // borderBottom: "2px solid green",
                    // borderRadius: "10%",
                  }}
                >
                  <button type="button" className="btn btn-outline-success">
                    <span className="mr-2 me-2">Favourites</span>

                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-heart-fill"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navebar;

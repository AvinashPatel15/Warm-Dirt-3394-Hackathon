import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <div className="mainbody">
        <div className="about">
          <a
            className="bg_links social portfolio"
            href="https://www.rafaelalucas.com"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social dribbble"
            href="https://dribbble.com/rafaelalucas"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social linkedin"
            href="https://www.linkedin.com/in/rafaelalucas/"
          >
            <span className="icon"></span>
          </a>
        </div>

        <section className="wrapper">
          <div className="container">
            <div id="scene" className="scene" data-hover-only="false">
              <div className="circle" data-depth="1.2"></div>

              <div className="one" data-depth="0.9">
                <div className="content">
                  <span className="piece"></span>
                  <span className="piece"></span>
                  <span className="piece"></span>
                </div>
              </div>

              <div className="two" data-depth="0.60">
                <div className="content">
                  <span className="piece"></span>
                  <span className="piece"></span>
                  <span className="piece"></span>
                </div>
              </div>

              <div className="three" data-depth="0.40">
                <div className="content">
                  <span className="piece"></span>
                  <span className="piece"></span>
                  <span className="piece"></span>
                </div>
              </div>

              <p className="p404" data-depth="0.50">
                404
              </p>
              <p className="p404" data-depth="0.10">
                404
              </p>
            </div>

            <div className="text">
              <article>
                <p>
                  Uh oh! Looks like you got lost. <br />
                  Go back to the homepage!
                </p>
                <Link to={"/"}>
                  <button>Back To Home</button>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;

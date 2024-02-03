import React from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className={classes.section_cotainer}>
        <div className={classes.main}>
          <div className={classes.men_text}>
            <h1>
              <span>TastyCraft:</span> Where Flavor Meets Artistry in Every
              Bite!
            </h1>
          </div>

          <div className={classes.main_image}>
            <img src="./pictures/main_img.png" alt="main_img" />
          </div>
        </div>

        <p>
          Welcome hungry souls! Indulge your taste buds on a culinary journey
          with our food ordering website. Explore a world of flavors and
          convenience right at your fingertips. Explore a culinary landscape
          that caters to your cravings. Satisfy your appetite effortlessly with
          our user-friendly food ordering platform. Dive into a world where
          every click unveils a new realm of taste.
          <br />
          <br />
          <br />
          {/* ---------------------------------------------------- */}
          {/* <Link to="/order">
            <div className="main_btn">
              <button className={classes.whitee}>Order now</button>
            </div>
          </Link> */}
          {/* ---------------------------------------------------- */}
        </p>
      </section>
    </>
  );
}

export default Home;

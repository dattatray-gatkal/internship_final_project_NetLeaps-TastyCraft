import React, { useEffect, useReducer, useRef } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import Tags from "../../components/Tags/Tags";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import classes from "./homePage.module.css";
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from "../../services/foodService";
import NotFound from "../../components/NotFound/NotFound";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    case "TAGS_LOADED":
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();
  const ourMenuRef = useRef(null);

  useEffect(() => {
    getAllTags().then((tags) =>
      dispatch({ type: "TAGS_LOADED", payload: tags })
    );

    const loadFoods = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadFoods.then((foods) =>
      dispatch({ type: "FOODS_LOADED", payload: foods })
    );
  }, [searchTerm, tag]);

  const handleOrderNowClick = () => {
    // Scroll to the element with the our-menu ID
    if (ourMenuRef.current) {
      ourMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.main_container} style={{ marginTop: "80px" }}>
      <Home />
      <div className="main_btn">
        <button className={classes.whitee} onClick={handleOrderNowClick}>
          Order now
        </button>
      </div>
      <h1 id="our-menu" className={classes.container} ref={ourMenuRef}>
        Our Menu
      </h1>

      <Search />
      <Tags tags={tags} />
      {foods.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails foods={foods} />
      <Footer />
    </div>
  );
}

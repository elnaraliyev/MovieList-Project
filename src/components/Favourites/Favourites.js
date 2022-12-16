import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Favourites/Favourites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {favlistsAction} from "../../Redux/actions/favlist"

export function Favourites() {
  const movies = useSelector((state) => state.lists.list);
  const [btn, setBtn] = useState();
  const [btnColor, setBtnColor] = useState();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.value === "") {
      setBtn(false);
      setBtnColor('#575756')
    } 
    else {
      setBtn(true)
      setBtnColor('red')
      const saveBtn  = e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling
      saveBtn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicked')
      })
    }
  };

  const handleClick = (e) => {
    const inputValue = e.target.parentElement.firstChild.firstChild.value
    dispatch(favlistsAction(movies, inputValue));
  };




  return (
    <div className="fav">
      <form className="fav-form">
        <div className="fav-container">
          <input type="text" className="fav-input" onChange={handleChange} />
        </div>
        <div>
          <ul className="fav-lists">
            {movies !== undefined &&
              !!movies.length &&
              movies.map((movie) => {
                return (
                  <li className="fav-list" key={movie.imdbID}>
                    <article className="fav-movie-item">
                      <div className="fav-movie-cont">
                        {" "}
                        <img
                          className="fav-movie-item__poster"
                          src={movie.Poster}
                          alt={movie.Title}
                        />
                      </div>
                      <div className="fav-movie-item__info">
                        <h3 className="fav-movie-item__title">
                          {movie.Title}&nbsp;{movie.Year}
                        </h3>

                        <div className="delete-icon">
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="icon"
                          />
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
          </ul>
        </div>
        <button
          type="submit"
          className="fav-btn"
          onClick={handleClick}
          style={{ disabled: btn , borderColor: btnColor}}
        >
          Save List
        </button>
      </form>
    </div>
  );
}

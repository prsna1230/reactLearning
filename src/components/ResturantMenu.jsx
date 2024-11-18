import { useState } from "react";
import arrowDown from "../utils/arrowDown.png";
import upArrow from "../utils/upArrow.png";
import star from "../utils/star.png";

export default ResturantMenu = ({ res }) => {
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const { title, itemCards } = res;
  console.log(itemCards);

  return (
    <div>
      {title && (
        <div className="resturant-menu">
          <div className="resturant-dropdown">
            <h2 className="resturant-categories">{res.title}</h2>
            <div className="down-arrow">
              <img
                src={dropDownClicked ? upArrow : arrowDown}
                alt="arrow-down"
                className="down-arrow"
                onClick={() => setDropDownClicked(!dropDownClicked)}
              />
            </div>
          </div>

          {dropDownClicked &&
            itemCards &&
            itemCards.map((card) => {
              return (
                <div className="menu-dropdown">
                  <h3>{card.card.info.name}</h3>
                  <p className="item-price">₹ {card.card.info.price / 100} </p>
                  <img src={star} alt="" className="res-rating-star" />
                  <p className="item-rating">
                    {card.card.info.ratings.aggregatedRating.rating}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

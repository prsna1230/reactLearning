import { useState } from "react";
import arrowDown from "../utils/arrowDown.png";
import upArrow from "../utils/upArrow.png";
import star from "../utils/star.png";
import sadFace from "../utils/sadFace.png";

export default ResturantMenu = ({ res }) => {
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const { title, itemCards } = res;
  const itemImageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

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
            (itemCards ? (
              itemCards.map((card) => {
                return (
                  <div className="menu-dropdown">
                    <div className="menu-dropdown-left">
                      <h3>{card.card.info.name}</h3>
                      <p className="item-price">
                        ₹ {card.card.info.price / 100}{" "}
                      </p>
                      <div className="item-rating">
                        <img src={star} alt="" className="res-rating-star" />
                        <p className="item-rating">
                          {card.card.info.ratings.aggregatedRating.rating}
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={itemImageUrl + card.card.info.imageId}
                        alt=""
                        className="item-image"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="menu-dropdown">
                <h2>
                  Yey, Nothing Found as of Now..!!{" "}
                  <img src={sadFace} alt="" width="30px" />
                </h2>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

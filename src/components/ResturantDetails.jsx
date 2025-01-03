import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import star from "../utils/star.png";
import ResturantMenu from "./ResturantMenu";
import { useParams } from "react-router-dom";

export default ResturantDetails = () => {
  const [resturantInfo, setResturantInfo] = useState([]);

  const { resId } = useParams();

  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9020616&lng=78.1171184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    const resDetails = json.data;
    console.log(resDetails);
    setResturantInfo(resDetails.cards);
  };

  if (resturantInfo.length === 0) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    locality,
    areaName,
    city,
    costForTwoMessage,
    sla,
  } = resturantInfo[2]?.card?.card?.info;

  return (
    <div className="res-info">
      <h1 className="resturant-name">{name}</h1>
      <div className="res-common-info">
        <div className="res-common-info-left">
          {/* resturant-ratings */}
          <div className="res-rating">
            <img src={star} alt="star" className="res-rating-star" />
            <p className="res-rating-text">{avgRating}</p>
            <p className="res-rating-number">({totalRatingsString})</p>
          </div>
          {/* resturant-cusines */}
          <div className="res-cuisines">{cuisines.join(", ")}</div>

          {/* resturant-address */}
          <div className="res-address">
            <p>{locality}</p>
            <p>{areaName}</p>
            <p className="resturant-city">{city}</p>
          </div>
        </div>
        <div className="res-common-info-right">
          <p className="res-cost">{costForTwoMessage}</p>
          <p className="res-delivery-time">{sla?.slaString?.toLowerCase()}</p>
        </div>
      </div>

      {/* res-menus */}
      <div>
        {resturantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (res) => (
            <ResturantMenu res={res.card.card} />
          )
        )}
      </div>
    </div>
  );
};

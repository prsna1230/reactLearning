import { CDN_URL } from "../commons/constant";

const Resturantcard = ({ resturant }) => {
  // console.log("resturant", resturant);
  const { name, cuisines, avgRatingString, cloudinaryImageId, locality } =
    resturant.info;
  const { cta } = resturant;

  // console.log("name", name);
  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cusines">{cuisines.join(",")}</h4>
      <div className="res-inner">
        <h5 className="res-locality">{locality}</h5>
        <h4 className="res-rating">{avgRatingString} starts</h4>
      </div>
    </div>
  );
};

export default Resturantcard;

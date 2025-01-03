import { Link } from "react-router-dom";
import { CDN_URL } from "../commons/constant";

const Resturantcard = ({ resturant }) => {
  // console.log("resturant", resturant);
  const { name, cuisines, avgRatingString, cloudinaryImageId, locality, id } =
    resturant.info;

  const { cta } = resturant;

  // console.log("name", name);
  return (
    <div className="w-64 border border-cyan-200">
      <img
        className="res-image w-auto h-1/2"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">
        <Link to={`/restaurant/${id}`} className="text-right">
          {name}
        </Link>
      </h3>
      <h4 className="res-cusines">{cuisines.join(",")}</h4>
      <div className="">
        <h5 className="res-locality">{locality}</h5>
        <h4 className="">{avgRatingString} starts</h4>
      </div>
    </div>
  );
};

export default Resturantcard;

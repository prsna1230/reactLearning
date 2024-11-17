import dummyData from "../commons/dummyData";
import Resturantcard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export default Body = () => {
  // const dummyResturants =
  //   dummyData?.data?.success?.cards[0]?.card?.card?.gridElements?.infoWithStyle
  //     .restaurants;

  const [resturants, setResturants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9020616&lng=78.1171184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setResturants(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, reset]);

  const handleTopRated = () => {
    const topResturants = resturants.filter((res) => res.info.avgRating > 4.5);
    setResturants(topResturants);
  };

  const handleReset = () => {
    setReset(!reset);
    setSearchTerm("");
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setResturants(dummyResturants);
    } else {
      const searchedRestaurant = resturants.filter((res) =>
        res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResturants(searchedRestaurant);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Resturants
        </button>
        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {resturants.length === 0 ? (
          <Shimmer />
        ) : (
          resturants.map((resturant) => {
            return (
              <Resturantcard resturant={resturant} key={resturant.info.id} />
            );
          })
        )}
      </div>
    </div>
  );
};

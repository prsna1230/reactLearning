import dummyData from "../commons/dummyData";
import Resturantcard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RES_API_URL } from "../commons/constant";

export default Body = () => {
  // const dummyResturants =
  //   dummyData?.data?.success?.cards[0]?.card?.card?.gridElements?.infoWithStyle
  //     .restaurants;

  const [resturants, setResturants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [reset, setReset] = useState(false);

  const fetchData = async () => {
    const res = await fetch(RES_API_URL);
    const data = await res.json();
    const resturant =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(resturant);
    setFilteredRes(resturant);
  };

  useEffect(() => {
    fetchData();
  }, [reset]);

  const handleTopRated = () => {
    const topResturants = resturants.filter((res) => res.info.avgRating > 4.5);
    setResturants(topResturants);
  };

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  const handleSearchTerm = (e) => {
    // if (e.target.value === "") {
    //   fetchData();
    // }
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const searchedRestaurant = resturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRes(searchedRestaurant);
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
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
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
        ) : filteredRes.length === 0 ? (
          <h2>No Results found</h2>
        ) : (
          filteredRes.map((resturant) => {
            return (
              <Resturantcard resturant={resturant} key={resturant.info.id} />
            );
          })
        )}
      </div>
    </div>
  );
};

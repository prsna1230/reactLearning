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
    setFilteredRes(topResturants);
  };

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  const handleSearchTerm = (e) => {
    if (e.target.value === "") {
      fetchData();
    }
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const searchedRestaurant = resturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRes(searchedRestaurant);
  };

  return (
    <div className="body mx-auto block">
      <div className="filter">
        <input
          type="text"
          name="search"
          id="search"
          className="search-input border-2 p-1 w-3/5 rounded-md m-3 outline-red-400"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
        <button
          className="bg-violet-400 px-3 py-1 rounded-md hover:bg-violet-800 text-white me-4"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="filter-btn bg-green-400 px-3 py-1 rounded-md hover:bg-green-800 text-white me-4"
          onClick={handleTopRated}
        >
          Top Rated Resturants
        </button>
        <button
          className="filter-btn bg-red-400 px-3 py-1 rounded-md hover:bg-red-800 text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
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

import Card from "./Card";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
  useEffect(()=>{
    fetchData();
  }, []); 
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2982549&lng=77.9681544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonFormat = await data.json();
    // console.log(jsonForm);
    // optional chaining
    setListOfRestaurants(jsonFormat?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
  // this is know as conditional rendering 
  // if (listOfRestaurants.length === 0) {
  //   // return <h1>Loading...</h1>;
  //   return <Shimmer />;
  // }

  // this is know as conditional rendering 
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // filer restaurants cards
          const filteredLst = resList.filter((res) => res.info.avgRating >= 4.5);
          setListOfRestaurants(filteredLst);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="card-container">
        {/*Resturant card */}
        {/* <Card
          resName="res one"
          cuisine="Chinese. Italian. Japanese. Mexican. Indian. Thai. French."
          rating="4.2 ⭐️"
          time="38 min"
        /> */}
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
        <div />
      </div>
    </div>
  );
};

export default Body;




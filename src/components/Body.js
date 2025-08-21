import Card from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);  
  return (
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
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-teal-50 rounded-lg hover:shadow-md hover:bg-teal-100">
      <img
        className="res-logo rounded-lg max-h-48 min-w-52"
        alt=" res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//Higher Order Component

export const withNewLabel = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          New
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

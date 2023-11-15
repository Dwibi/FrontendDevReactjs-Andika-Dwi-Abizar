import { useNavigate } from "react-router";
import RatingStar from "../../../../Components/Rating/RatingStar";

function RestaurantCard({ id, image, name, rating, category, price, open }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-[411px] flex flex-col gap-2" key={id}>
      <img
        className="w-full aspect-[4/3] object-cover"
        src={image}
        alt={`restaurant ${name}`}
        loading="lazy"
      />
      <p className="text-lg">{name}</p>
      <RatingStar value={rating} />
      <div>
        <div className="flex justify-between">
          <p className="text-sm">
            {category.name.toUpperCase()} -{" "}
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          {open ? (
            <div className="flex gap-2 items-center">
              <div className="w-[10px] h-[10px] bg-open rounded-full"></div>
              <p className="text-sm">OPEN NOW</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <div className="w-[10px] h-[10px] bg-close rounded-full"></div>
              <p className="text-sm">CLOSED</p>
            </div>
          )}
        </div>
      </div>
      <div className="h-full flex flex-row justify-end items-end">
        <button
          onClick={() => navigate(`/restaurant/${id}`)}
          className="w-full p-3 flex justify-center bg-primary text-white font-light tracking-widest"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;

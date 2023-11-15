import RatingStar from "../../Components/Rating/RatingStar";
import useRestaurantDetail from "../../Hooks/useRestaurantDetail";

function RestaurantDetail() {
  const { restaurant } = useRestaurantDetail();

  const { image, name, rating, reviews } = restaurant;
  console.log(restaurant);
  return (
    <>
      <div className="mb-4">
        <img
          className="w-full aspect-video object-cover mb-2"
          src={image}
          alt={`${name}img`}
        />
        <h1 className="text-4xl mb-2">{name}</h1>
        <RatingStar
          value={rating}
          className="flex gap-2 w-[150px] mb-2"
          showValue
        />
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-2">
          What people loved about this restaurant
        </h2>
        <div className="grid gap-4">
          {reviews?.map((review) => {
            return (
              <div
                className="p-4 flex flex-col gap-2 bg-gray rounded-lg"
                key={review.id}
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={review.image}
                    alt="profile"
                  />
                  <p>{review.name}</p>
                </div>
                <RatingStar value={review.rating} showValue />
                <p className="line-clamp-2">{review.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default RestaurantDetail;

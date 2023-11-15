import useRestaurantList from "../../Hooks/useRestaurantList";
import useCategoryList from "../../Hooks/useCategoryList";
import FilterBar from "./Components/FilterBar/FilterBar";
import RestaurantCard from "./Components/RestaurantCard/RestaurantCard";

function Home() {
  const {
    restaurantList,
    isOpenOnly,
    minPrice,
    maxPrice,
    categoryId,
    isLoading,
    handleToggleOpenOnly,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleFilterByCategory,
    handleClearAllFilters,
  } = useRestaurantList();

  console.log(restaurantList);

  const { categoryList } = useCategoryList();

  return (
    <>
      <header className="mb-4">
        <h1 className="text-4xl mb-2">Restaurants</h1>
        <p className="max-w-[33rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      <FilterBar
        categoryList={categoryList}
        handleClearAllFilters={handleClearAllFilters}
        handleFilterByCategory={handleFilterByCategory}
        handleMaxPriceChange={handleMaxPriceChange}
        handleMinPriceChange={handleMinPriceChange}
        handleToggleOpenOnly={handleToggleOpenOnly}
        isOpenOnly={isOpenOnly}
        maxPrice={maxPrice}
        minPrice={minPrice}
        categoryId={categoryId}
      />

      {isLoading ? (
        <div className="w-full flex justify-center">
          <p>Loading...</p>
        </div>
      ) : !isLoading && !restaurantList.length ? (
        <div className="w-full flex justify-center">
          <p>Restaurant not found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
          {restaurantList?.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
                category={restaurant.category}
                price={restaurant.price}
                open={restaurant.open}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;

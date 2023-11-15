import Dropdown from "../../../../Components/Dropdown/Dropdown";
import InputPrice from "../../../../Components/InputPrice";

function FilterBar({
  isOpenOnly,
  handleToggleOpenOnly,
  handleMinPriceChange,
  handleMaxPriceChange,
  minPrice,
  maxPrice,
  handleFilterByCategory,
  categoryList,
  handleClearAllFilters,
  categoryId,
}) {
  return (
    <div className="flex items-center flex-col gap-4 md:flex-row md:justify-between py-4 mb-4 border-y border-gray">
      <div className="flex items-center gap-4">
        <p>Filter By:</p>

        {/* Open Now */}
        <div className="flex gap-2 border-b border-gray">
          <input
            id="check-radio"
            readOnly
            className=" checked:bg-primary"
            name="open"
            type="radio"
            checked={isOpenOnly}
            onClick={(event) => handleToggleOpenOnly(event)}
          />
          <label htmlFor="check-radio" className="text-primary">
            Open Now
          </label>
        </div>

        {/* Price Filter */}
        <Dropdown label="Price">
          <div className="flex flex-col gap-2 p-4 bg-white border border-gray rounded-lg absolute top-[100%] right-0 z-10">
            <div className="flex gap-2 justify-center items-center">
              <InputPrice onChange={handleMinPriceChange} value={minPrice} />
              <p>TO</p>
              <InputPrice onChange={handleMaxPriceChange} value={maxPrice} />
            </div>
          </div>
        </Dropdown>

        {/* Category Filter */}
        <Dropdown label="Categories">
          <div className="w-[200px] flex flex-col gap-2 p-4 bg-white border border-gray rounded-lg absolute top-[100%] right-0 z-10">
            <p
              className="border-b border-gray cursor-pointer hover:font-bold"
              onClick={() => handleFilterByCategory(0)}
            >
              All
            </p>
            {categoryList.map((category) => {
              return (
                <p
                  className="border-b border-gray cursor-pointer hover:font-bold"
                  key={category.id}
                  onClick={() => handleFilterByCategory(category.id)}
                >
                  {category.name}
                </p>
              );
            })}
          </div>
        </Dropdown>
      </div>

      <button
        className="border border-primary text-primary py-2 px-4 disabled:border-gray disabled:text-gray"
        onClick={handleClearAllFilters}
        disabled={!categoryId && !minPrice && !maxPrice && !isOpenOnly}
      >
        Clear All
      </button>
    </div>
  );
}

export default FilterBar;

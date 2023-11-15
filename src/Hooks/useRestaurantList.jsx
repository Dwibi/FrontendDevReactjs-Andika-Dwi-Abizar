import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { config } from "../config";

const useRestaurantList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    isOpenOnly: false,
  });
  const apiKey = config.apiKey;
  const [originalRestaurantsList, setOriginalRestaurantsList] = useState([]);
  const isOpenOnly = searchParams.get("isOpenOnly") === "true";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const categoryId = searchParams.get("categoryId") || 0;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getRestaurants = async () => {
      try {
        let url = `${apiKey}/restaurants?_expand=category`;
        if (categoryId) url += `&categoryId_like=${categoryId}`;
        setIsLoading(true);
        const response = await axios.get(url, { signal });
        const data = response.data;
        console.log(response);
        setOriginalRestaurantsList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getRestaurants();

    return () => {
      controller.abort();
    };
  }, [categoryId, apiKey]);

  const handleToggleOpenOnly = () => {
    setSearchParams((prev) => {
      prev.set(
        "isOpenOnly",
        searchParams.get("isOpenOnly") === "true" ? false : true
      );
      return prev;
    });
  };

  const handleMinPriceChange = (event) => {
    setSearchParams((prev) => {
      prev.set("minPrice", event.target.value);
      return prev;
    });
  };

  const handleMaxPriceChange = (event) => {
    setSearchParams((prev) => {
      prev.set("maxPrice", event.target.value);
      return prev;
    });
  };

  const handleClearAllFilters = () => {
    setSearchParams((prev) => {
      prev.set("isOpenOnly", false);
      prev.set("minPrice", "");
      prev.set("maxPrice", "");
      prev.set("categoryId", "");
      return prev;
    });
  };

  const handleFilterByCategory = (category_id) => {
    setSearchParams((prev) => {
      prev.set("categoryId", category_id < 1 ? "" : category_id);
      return prev;
    });
  };

  const restaurantList = originalRestaurantsList.filter((restaurant) => {
    let result = true;
    if (minPrice !== "") {
      result = restaurant.price >= parseInt(minPrice, 10);
    }

    if (maxPrice !== "" && result) {
      result = restaurant.price <= parseInt(maxPrice, 10);
    }

    if (isOpenOnly && result) {
      result = restaurant.open;
    }

    return result;
  });

  return {
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
  };
};

export default useRestaurantList;

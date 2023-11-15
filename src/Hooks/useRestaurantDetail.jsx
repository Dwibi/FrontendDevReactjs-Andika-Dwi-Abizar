import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { config } from "../config";

const useRestaurantDetail = () => {
  const [restaurant, setrestaurant] = useState({});
  const { id } = useParams();
  const apiKey = config.apiKey;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${apiKey}/restaurants/${id}?_embed=reviews`,
          {
            signal,
          }
        );
        const data = response.data;
        setrestaurant(data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();

    return () => {
      controller.abort();
    };
  }, [id, apiKey]);

  return {
    restaurant,
  };
};

export default useRestaurantDetail;

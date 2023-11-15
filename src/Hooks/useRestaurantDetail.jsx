import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useRestaurantDetail = () => {
  const [restaurant, setrestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/restaurants/${id}?_embed=reviews`,
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
  }, [id]);

  return {
    restaurant,
  };
};

export default useRestaurantDetail;

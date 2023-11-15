import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

  const apiKey = config.apiKey;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // console.log(process.env.BACKEND_URL);

    const getCategories = async () => {
      try {
        // let url = process.env.BACKEND_URL;
        const response = await axios.get(`${apiKey}/categories`, {
          signal,
        });
        const data = response.data;
        setCategoryList(data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();

    return () => {
      controller.abort();
    };
  }, [apiKey]);

  return {
    categoryList,
  };
};

export default useCategoryList;

import axios from "axios";
import { useEffect, useState } from "react";

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories", {
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
  }, []);

  return {
    categoryList,
  };
};

export default useCategoryList;

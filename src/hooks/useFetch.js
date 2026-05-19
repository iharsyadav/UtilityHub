

import { useState } from "react";

const useFetch = (apiFunction) => {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {

      setLoading(true);

      setError(null);

      // Calling API function
      const response = await apiFunction();

      setData(response);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useFetch;
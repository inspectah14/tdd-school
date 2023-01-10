import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(url);

        if (response.status === 200) {
          setData(await response.json());
        }
      } catch (error) {
        setError(error);
      }
    };

    loadData();
  }, [url]);

  return { data, error };
};

export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (config) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(config.url, {
          method: config.method ? config.method : "GET",
          headers: config.headers ? config.headers : {},
          body: config.body ? JSON.stringify(config.body) : null,
        });

        if (response.status === 200) {
          setData({ data: await response.json(), type: config.type });
        }
      } catch (error) {
        setError(error);
      }
    };

    loadData();
  }, [config.url]);

  return { data, error };
};

export default useFetch;

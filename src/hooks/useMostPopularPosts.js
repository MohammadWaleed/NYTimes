import * as React from "react";
import { API } from "../api";
import { useEffect, useState } from "react";


export const useMostPopular = (section, timePeriod) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (section, timePeriod) => {
    setLoading(true);
    try {
      const response = await API.NYTimes.mostPopular(section, timePeriod);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(section, timePeriod);
  }, [section, timePeriod]);

  return { data, error, loading,fetchData };
};


import { useState, useEffect } from 'react';
import axiosApi from '../api/axiosApi';

export function useFetch(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get(endpoint);
        setData(response.data); 
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
}
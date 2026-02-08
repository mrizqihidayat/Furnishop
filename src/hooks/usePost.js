import { useState } from 'react';
import axiosApi from '../api/axiosApi';

export const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axiosApi.post(url, payload);
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message;
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  };

  return { postData, loading, error, data };
};
import { useState, useEffect } from 'react';
import { getCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
      } catch (e) {
        setError('error');
      }
    };
    fetchData();
  }, []);
  console.log('using countries', countries);
  return { countries, error };
}

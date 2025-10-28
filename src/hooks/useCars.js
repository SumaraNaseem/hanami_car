import { useState, useEffect } from 'react';
import apiService from '../services/api';

/**
 * Custom hook for fetching cars with loading and error states
 */
export function useCars(filters = {}) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getCars(filters);
        setCars(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching cars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [JSON.stringify(filters)]);

  return { cars, loading, error };
}

/**
 * Custom hook for fetching a single car by ID
 */
export function useCar(carId) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!carId) {
      setLoading(false);
      return;
    }

    const fetchCar = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getCarById(carId);
        setCar(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching car:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  return { car, loading, error };
}

/**
 * Custom hook for search results
 */
export function useSearchResults(searchParams = {}, page = 1, itemsPerPage = 4) {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.searchCars({
          ...searchParams,
          page,
          limit: itemsPerPage,
        });
        setResults(response.data || response);
        setTotalResults(response.total || response.length);
      } catch (err) {
        setError(err.message);
        console.error('Error searching cars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [JSON.stringify(searchParams), page, itemsPerPage]);

  return { results, totalResults, loading, error };
}

/**
 * Custom hook for clearance cars
 */
export function useClearanceCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getClearanceCars();
        setCars(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching clearance cars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
}

/**
 * Custom hook for top sellers
 */
export function useTopSellers() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getTopSellers();
        setSellers(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching top sellers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  return { sellers, loading, error };
}

/**
 * Custom hook for new arrivals
 */
export function useNewArrivals() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getNewArrivals();
        setCars(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching new arrivals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
}

/**
 * Custom hook for featured stocks
 */
export function useFeaturedStocks() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getFeaturedStocks();
        setCars(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching featured stocks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
}

/**
 * Custom hook for recommended cars
 */
export function useRecommendedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getRecommendedCars();
        setCars(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching recommended cars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
}

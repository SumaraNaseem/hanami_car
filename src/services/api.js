/**
 * API Service - Centralized API calls
 * Replace baseURL with your actual backend API endpoint
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

class ApiService {
  /**
   * Generic fetch method with error handling
   */
  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // ============ CAR API METHODS ============

  /**
   * Get all cars with filters
   * @param {Object} filters - Filter parameters
   * @returns {Promise<Array>}
   */
  async getCars(filters = {}) {
    const queryParams = new URLSearchParams(filters);
    return this.request(`/cars?${queryParams}`);
  }

  /**
   * Get car by ID
   * @param {string|number} carId
   * @returns {Promise<Object>}
   */
  async getCarById(carId) {
    return this.request(`/cars/${carId}`);
  }

  /**
   * Search cars with query
   * @param {Object} searchParams
   * @returns {Promise<Array>}
   */
  async searchCars(searchParams = {}) {
    const queryParams = new URLSearchParams(searchParams);
    return this.request(`/cars/search?${queryParams}`);
  }

  /**
   * Get clearance cars (discounted cars)
   * @returns {Promise<Array>}
   */
  async getClearanceCars() {
    return this.request('/cars/clearance');
  }

  /**
   * Get top sellers
   * @returns {Promise<Array>}
   */
  async getTopSellers() {
    return this.request('/sellers/top');
  }

  /**
   * Get new arrivals
   * @returns {Promise<Array>}
   */
  async getNewArrivals() {
    return this.request('/cars/new-arrivals');
  }

  /**
   * Submit car inquiry
   * @param {Object} inquiryData
   * @returns {Promise<Object>}
   */
  async submitInquiry(inquiryData) {
    return this.request('/inquiries', {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  }

  /**
   * Calculate car price
   * @param {string|number} carId
   * @param {Object} calculationParams
   * @returns {Promise<Object>}
   */
  async calculatePrice(carId, calculationParams = {}) {
    return this.request(`/cars/${carId}/calculate-price`, {
      method: 'POST',
      body: JSON.stringify(calculationParams),
    });
  }

  /**
   * Get featured stocks
   * @returns {Promise<Array>}
   */
  async getFeaturedStocks() {
    return this.request('/cars/featured');
  }

  /**
   * Get recommended cars
   * @returns {Promise<Array>}
   */
  async getRecommendedCars() {
    return this.request('/cars/recommended');
  }

  /**
   * Get customer reviews
   * @param {string|number} carId - Optional car ID
   * @returns {Promise<Array>}
   */
  async getReviews(carId = null) {
    const endpoint = carId ? `/reviews?carId=${carId}` : '/reviews';
    return this.request(endpoint);
  }
}

export default new ApiService();
export { API_BASE_URL };

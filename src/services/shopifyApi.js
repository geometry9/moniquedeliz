import axios from 'axios'

/**
 * Setting baseUrl oesn't seem to work. Could just make this a global const.
 */
axios.defaults.baseUrl = SHOPIFY_API_BASE_URL

export function getProducts (queryParams = {}) {
  /**
   * TODO:
   * 1. Change const to let
   * 2. Dynamically build query string from queryParams.
   * 3. Append query string to endpoint
   */
  const endpoint = `${axios.defaults.baseUrl}/products`
  return axios.get(endpoint)
}

export function getProductDetail (id) {
  return axios.get(`${axios.defaults.baseUrl}product/${id}`)
}

export function getCollections (queryParams = {}) {
  /**
   * TODO:
   * 1. Change const to let
   * 2. Dynamically build query string from queryParams.
   * 3. Append query string to endpoint
   */
  const endpoint = `${axios.defaults.baseUrl}/collections`
  return axios.get(endpoint)
}

export function getCollectionDetails (id) {
  return axios.get(`${axios.defaults.baseUrl}venues/${id}`)
}

export function getSales (queryParams = {}) {
  /**
   * TODO:
   * 1. Change const to let
   * 2. Dynamically build query string from queryParams.
   * 3. Append query string to endpoint
   */
  const endpoint = `${axios.defaults.baseUrl}/sales`
  return axios.get(endpoint)
}

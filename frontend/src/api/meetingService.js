import axios from "axios"
import { API_BASE_URL, API_ENDPOINTS } from "./config"

class MeetingService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  async makeRequest(endpoint, options = {}) {
    try {
      const response = await this.client.request({
        url: endpoint,
        method: options.method || "GET",
        data: options.body ? JSON.parse(options.body) : undefined,
        headers: {
          ...options.headers,
        },
        params: options.params, // optional query params
      })

      return { data: response.data, success: true }
    } catch (error) {
      return {
        error: error.response?.data?.message || error.message || "An unknown error occurred",
        success: false,
      }
    }
  }

  async submitSlots(payload) {
    return this.makeRequest(API_ENDPOINTS.SLOTS, {
      method: "POST",
      body: JSON.stringify(payload),
    })
  }

  async getSuggestions(duration) {
    return this.makeRequest(API_ENDPOINTS.SUGGEST, {
      method: "GET",
      params: { duration },
    })
  }

  async bookMeeting(booking) {
    return this.makeRequest(API_ENDPOINTS.BOOK, {
      method: "POST",
      body: JSON.stringify(booking),
    })
  }

  async getUserCalendar(userId) {
    return this.makeRequest(`${API_ENDPOINTS.CALENDAR}/${userId}`)
  }
}

export const meetingService = new MeetingService()

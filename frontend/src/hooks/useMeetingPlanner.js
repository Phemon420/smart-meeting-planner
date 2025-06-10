"use client"

import { useState } from "react"
import { meetingService } from "../api/meetingService"
import { validateDuration, validateJsonInput } from "../utils/timeUtils"

export function useMeetingPlanner() {
  const [jsonInput, setJsonInput] = useState(`{
  "users": [
    { "id": 1, "busy": [["09:00","10:30"], ["13:00","14:00"]] },
    { "id": 2, "busy": [["11:00","12:00"], ["15:00","16:00"]] }
  ]
}`)
  const [duration, setDuration] = useState("30")
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [bookedSlots, setBookedSlots] = useState([])
  const [calendar, setCalendar] = useState(null)
  const [userIdInput, setUserIdInput] = useState("")

  window.calendar = calendar

  const clearMessages = () => {
    setError("")
    setSuccess("")
  }

  const handleSubmitSlots = async () => {
    try {
      setLoading(true)
      clearMessages()
      setBookedSlots([])
      setSuggestions([])
      setCalendar(null)

      if (!validateJsonInput(jsonInput)) {
        throw new Error("Invalid JSON format. Please check your input.")
      }

      const payload = JSON.parse(jsonInput)
      const result = await meetingService.submitSlots(payload)

      if (!result.success) {
        throw new Error(result.error || "Failed to submit schedules")
      }

      setSuccess("User schedules submitted successfully!")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit schedules")
    } finally {
      setLoading(false)
    }
  }

  const handleSuggest = async () => {
    try {
      setLoading(true)
      clearMessages()
      setSuggestions([])
      setCalendar(null)

      if (!validateDuration(duration)) {
        throw new Error("Duration must be between 15 and 480 minutes")
      }

      const result = await meetingService.getSuggestions(Number.parseInt(duration))

      if (!result.success) {
        throw new Error(result.error || "Failed to get suggestions")
      }

      setSuggestions(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get suggestions")
    } finally {
      setLoading(false)
    }
  }

  const handleBook = async (startTime, endTime) => {
    try {
      setLoading(true)
      clearMessages()
      setCalendar(null)

      const result = await meetingService.bookMeeting({
        start: startTime,
        end: endTime,
      })

      if (!result.success) {
        throw new Error(result.error || "Failed to book meeting")
      }

      setBookedSlots((prev) => [...prev, { start: startTime, end: endTime }])
      setSuccess(`Meeting booked for ${startTime} - ${endTime}`)

      // Remove the booked slot from suggestions
      setSuggestions((prev) => prev.filter((slot) => !(slot[0] === startTime && slot[1] === endTime)))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to book meeting")
    } finally {
      setLoading(false)
    }
  }

const handleGetCalendar = async () => {
  try {
    setLoading(true)
    clearMessages()
    setCalendar(null)
    
    if (!userIdInput.trim()) {
      throw new Error("Please enter a user ID.")
    }

    const result = await meetingService.getUserCalendar(userIdInput)

    if (!result.success) {
      throw new Error(result.error || "Failed to fetch calendar")
    }

    setCalendar(result.data)
    setSuccess(`Fetched calendar for user ${userIdInput}`)
  } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to fetch calendar")
  } finally {
    setLoading(false)
  }
}


  return {
    // State
    jsonInput,
    duration,
    suggestions,
    loading,
    error,
    success,
    bookedSlots,
    calendar,
    userIdInput,
    // Actions
    setUserIdInput,
    setJsonInput,
    setDuration,
    handleSubmitSlots,
    handleSuggest,
    handleBook,
    handleGetCalendar
  }
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export function UserCalendarCard({ userIdInput, setUserIdInput, calendar, onFetch, loading }) {
  const formatMinutesToHours = (minutes) => {
    const hrs = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hrs > 0 ? hrs + " hr " : ""}${mins} min${mins !== 1 ? "s" : ""}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Calendar</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Enter User ID"
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
            className="max-w-xs"
          />
          <Button
            className="bg-black text-white font-mono"
            onClick={onFetch}
            disabled={loading}
          >
            Get Calendar
          </Button>
        </div>

        {calendar && (
          <>
            <div>
              <h3 className="font-semibold text-gray-700">Busy Slots:</h3>
              {calendar.busy_slots?.length ? (
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {calendar.busy_slots.map(([start, end], index) => {
                    const duration = end - start
                    return (
                      <li key={index}>
                        {formatMinutesToHours(start)} to {formatMinutesToHours(end)} — Duration: {formatMinutesToHours(duration)}
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No busy slots</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Newly Booked Slots:</h3>
              {calendar.newly_booked?.length ? (
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {calendar.newly_booked.map(([start, end], index) => (
                    <li key={index}>
                      {(start)} to {(end)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No bookings</p>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

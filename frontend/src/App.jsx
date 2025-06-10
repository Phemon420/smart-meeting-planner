"use client"

import { useMeetingPlanner } from "./hooks/useMeetingPlanner"
import { JsonInputSection } from "./components/JsonInputSection"
import { SuggestSection } from "./components/SuggestSection"
import { SuggestionsTable } from "./components/SuggestionsTable"
import { BookedMeetingsTable } from "./components/BookedMeetingsTable"
import { AlertMessage } from "./components/AlertMessage"
import { InstructionsCard } from "./components/InstructionsCard"
import { UserCalendarCard } from "./components/UserSchedule"

function App() {
  const {
    jsonInput,
    duration,
    suggestions,
    loading,
    error,
    success,
    bookedSlots,
    calendar,
    userIdInput,
    setUserIdInput,
    setJsonInput,
    setDuration,
    handleSubmitSlots,
    handleSuggest,
    handleBook,
    handleGetCalendar
  } = useMeetingPlanner()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Meeting Planner</h1>
          <p className="text-gray-600">Find the best meeting times for your team</p>
        </div>

        {error && <AlertMessage message={error} type="error" />}
        {success && <AlertMessage message={success} type="success" />}

        <JsonInputSection
          jsonInput={jsonInput}
          onJsonInputChange={setJsonInput}
          onSubmit={handleSubmitSlots}
          loading={loading}
        />

        <SuggestSection
          duration={duration}
          onDurationChange={setDuration}
          onSuggest={handleSuggest}
          loading={loading}
        />

        <UserCalendarCard 
          userIdInput={userIdInput}
          setUserIdInput={setUserIdInput}
          calendar={calendar} 
          onFetch={handleGetCalendar} 
          loading={loading}
          />

        <SuggestionsTable suggestions={suggestions} duration={duration} onBook={handleBook} loading={loading} />

        <BookedMeetingsTable bookedSlots={bookedSlots} />

        <InstructionsCard />

      </div>
    </div>
  )
}

export default App

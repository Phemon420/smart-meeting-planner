import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export function InstructionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Instructions</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 space-y-2">
        <p>
          <strong>1.</strong> Paste your JSON with user schedules in the textarea above
        </p>
        <p>
          <strong>2.</strong> Click "Submit Schedules" to send the data to the backend
        </p>
        <p>
          <strong>3.</strong> Set your desired meeting duration and click "Suggest Meeting Times"
        </p>
        <p>
          <strong>4.</strong> Book a meeting by clicking the "Book Meeting" button next to your preferred time slot
        </p>
        <p>
          <strong>Note:</strong> Working hours are 09:00-18:00 IST. All times should be in HH:MM format.
        </p>
      </CardContent>
    </Card>
  )
}

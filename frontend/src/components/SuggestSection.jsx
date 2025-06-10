"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export function SuggestSection({ duration, onDurationChange, onSuggest, loading }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Step 2: Get Meeting Suggestions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="duration" className="mb-1.5">Meeting Duration (minutes)</Label>
          <Input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => onDurationChange(e.target.value)}
            placeholder="30"
            min="15"
            max="480"
          />
        </div>
        <Button className="bg-black text-white rounded-md px-4 py-2 w-full text-center font-mono" onClick={onSuggest} disabled={loading}>
          {loading ? "Finding Slots..." : "Suggest Meeting Times"}
        </Button>
      </CardContent>
    </Card>
  )
}

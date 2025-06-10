"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "../../components/ui/label"

export function JsonInputSection({ jsonInput, onJsonInputChange, onSubmit, loading }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Step 1: Submit User Schedules</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="json-input" className="mb-1.5">JSON Input (User Busy Times)</Label>
          <Textarea
            id="json-input"
            value={jsonInput}
            onChange={(e) => onJsonInputChange(e.target.value)}
            placeholder="Paste your JSON here..."
            className="min-h-[200px] font-mono text-sm"
          />
        </div>
        <div className="bg-black text-white rounded-md px-4 py-2 w-full text-center font-mono" onClick={onSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit Schedules"}
        </div>
      </CardContent>
    </Card>
  )
}
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { formatTimeSlot } from "../utils/timeUtils"

export function SuggestionsTable({ suggestions, duration, onBook, loading }) {
  if (suggestions.length === 0) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Meeting Slots</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time Slot</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="pl-10">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suggestions.map((slot, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{formatTimeSlot(slot)}</TableCell>
                <TableCell>{duration} minutes</TableCell>
                <TableCell className="align-middle">
                  <div className="flex items-center h-full">
                  <Button
                    variant="black"
                    className="px-4 py-2 text-white bg-black rounded-md hover:bg-neutral-900"
                    onClick={() => onBook(slot[0], slot[1])}
                    disabled={loading}>
                      Book Meeting
                  </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

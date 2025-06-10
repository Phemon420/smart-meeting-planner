import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"

export function BookedMeetingsTable({ bookedSlots }) {
  if (bookedSlots.length === 0) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booked Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time Slot</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookedSlots.map((slot, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {slot.start} - {slot.end}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Booked
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

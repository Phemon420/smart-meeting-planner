import { Alert, AlertDescription } from "../../components/ui/alert"

export function AlertMessage({ message, type }) {
  const alertClasses = type === "error" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"

  const textClasses = type === "error" ? "text-red-800" : "text-green-800"

  return (
    <Alert className={alertClasses}>
      <AlertDescription className={textClasses}>{message}</AlertDescription>
    </Alert>
  )
}

export const formatTimeSlot = (slot) => {
  return `${slot[0]} - ${slot[1]}`
}

export const validateDuration = (duration) => {
  const num = Number.parseInt(duration)
  return !isNaN(num) && num >= 15 && num <= 480
}

export const validateJsonInput = (input) => {
  try {
    const parsed = JSON.parse(input)
    return (
      parsed.users &&
      Array.isArray(parsed.users) &&
      parsed.users.every(
        (user) =>
          typeof user.id === "number" &&
          Array.isArray(user.busy) &&
          user.busy.every(
            (slot) =>
              Array.isArray(slot) && slot.length === 2 && typeof slot[0] === "string" && typeof slot[1] === "string",
          ),
      )
    )
  } catch {
    return false
  }
}

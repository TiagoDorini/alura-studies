export function hourToMinutes(time: string) {
  const [hours = "0", minutes, seconds] = time.split(":")
  const totalMinutes = Number(hours) * 60 + Number(minutes)
  return `${String(totalMinutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`
}

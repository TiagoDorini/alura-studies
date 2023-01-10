export function hourToMinutes(time: string) {
  const [hours = "0", minutes, seconds] = time.split(":")
  const totalMinutes = Number(hours) * 60 + Number(minutes)
  return `${totalMinutes}:${seconds}`
}

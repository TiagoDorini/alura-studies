export function durationToSeconds(duration: string) {
  const [hours, minutes, seconds] = duration.split(":")
  const totalSeconds =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)
  return totalSeconds
}

export function secondsToAluraTimerFormat(seconds: number) {
  const minutesString = Math.floor(seconds / 60).toString()
  const secondsString = (seconds % 60).toString()
  return [minutesString.padStart(2, "0"), secondsString.padStart(2, "0")]
}

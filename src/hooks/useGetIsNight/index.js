export const useGetIsNight = () => {
  const NIGHT_HOUR = 19

  const actualTime = Date.now()
  const formatedTime = new Date(actualTime)
  const actualFormatedHour = formatedTime.getHours()

  const isNight = actualFormatedHour >= NIGHT_HOUR

  return { isNight }
}
